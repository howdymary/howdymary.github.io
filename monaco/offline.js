'use strict';
// Cache only this public guide. Notes stay in this browser's existing localStorage.
(() => {
  const base = new URL('./', document.currentScript.src);
  const workerUrl = new URL('sw.js', base);
  const status = document.querySelector('#offlineStatus');
  const update = document.querySelector('#offlineUpdate');
  let registration;
  let cached = false;
  let controlled = !!navigator.serviceWorker?.controller;
  const paint = () => {
    status.textContent = cached
      ? (navigator.onLine ? 'Ready for offline reading' : 'Offline · saved guide available')
      : (navigator.onLine ? 'Preparing offline copy…' : 'Connect once to save the guide');
  };
  const check = () => registration?.active?.postMessage({type: 'CHECK_OFFLINE_COPY', repair: navigator.onLine});
  const showUpdate = () => { update.hidden = !registration?.waiting; };
  if (!('serviceWorker' in navigator)) {
    status.textContent = 'Offline reading is unavailable in this browser';
    return;
  }
  navigator.serviceWorker.addEventListener('message', event => {
    if (event.source?.scriptURL !== workerUrl.href || event.data?.type !== 'OFFLINE_COPY_STATUS') return;
    cached = event.data.complete === true;
    paint();
    if (!cached && navigator.onLine) status.textContent = 'Offline copy unavailable · reconnect and reload';
  });
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (controlled) { location.reload(); return; }
    controlled = true;
    check();
  });
  for (const name of ['online', 'offline']) window.addEventListener(name, () => { paint(); check(); });
  update.addEventListener('click', () => {
    if (!registration?.waiting) return;
    update.disabled = true;
    update.textContent = 'Updating…';
    registration.waiting.postMessage({type: 'ACTIVATE_UPDATE'});
  });
  navigator.serviceWorker.register(workerUrl, {scope: base.href, updateViaCache: 'none'})
    .then(async reg => {
      registration = reg;
      showUpdate();
      reg.addEventListener('updatefound', () => {
        const installing = reg.installing;
        installing?.addEventListener('statechange', () => {
          if (installing.state === 'installed') { showUpdate(); check(); }
          if (installing.state === 'redundant' && !reg.active) status.textContent = 'Could not save offline copy · reconnect and reload';
        });
      });
      const ready = await navigator.serviceWorker.ready;
      if (ready.scope === base.href) { registration = ready; check(); showUpdate(); }
    })
    .catch(() => { status.textContent = 'Could not save offline copy · reconnect and reload'; });
  paint();
})();
