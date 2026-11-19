const progress = document.querySelector('.reading-progress');
const sections = [...document.querySelectorAll('.prose > section')];
const nav = [...document.querySelectorAll('.contents a')];
function updateReading() {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${max > 0 ? scrollY / max * 100 : 0}%`;
  const active = [...sections].reverse().find(section => section.getBoundingClientRect().top < 180);
  nav.forEach(link => link.classList.toggle('active', link.hash === `#${active?.id}`));
}
addEventListener('scroll', updateReading, {passive: true});
addEventListener('resize', updateReading);
updateReading();

document.querySelectorAll('[data-replay]').forEach(block => {
  const placeholder = block.querySelector('.replay-placeholder');
  const button = block.querySelector('.load-replay');
  button.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = `replay/?study=${block.dataset.replay}`;
    iframe.title = block.dataset.replay === 'training' ? 'Matched parent and trained checkpoint simulation replay' : 'Matched navigation controller comparison';
    iframe.allowFullscreen = true;
    const bar = document.createElement('div');
    bar.className = 'replay-loaded';
    const label = document.createElement('span');
    label.textContent = 'ARCHIVED PHYSICS · NO NEW TRAINING';
    const close = document.createElement('button');
    close.type = 'button';
    close.textContent = 'Close replay';
    bar.append(label, close);
    placeholder.hidden = true;
    placeholder.style.display = 'none';
    placeholder.after(bar, iframe);
    const observer = new IntersectionObserver(entries => {
      iframe.contentWindow?.postMessage({type:'mochi-visibility', visible:entries[0].isIntersecting}, location.origin);
    }, {threshold:0.05});
    observer.observe(iframe);
    close.addEventListener('click', () => {
      observer.disconnect();
      iframe.remove();
      bar.remove();
      placeholder.hidden = false;
      placeholder.style.display = '';
      button.focus();
    });
  });
});
