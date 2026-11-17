# Monaco Agent Fieldguide

Live: https://howdymary.github.io/monaco/

This static study guide includes the research, RAG, API/MCP, strategy, interview,
and always-on-agent lessons. The initial public copy came from the verified
Research Agent Fieldguide source commit `0d6e0bd119303414f5b5f1ac7814213f2668a641`.

Open the guide online and wait for **Ready for offline reading** before a trip.
The service worker caches this guide, local fonts, code explorer, and starter ZIP.
External articles and videos still require internet. Browser storage can be
cleared or evicted; progress and notes are local to the browser and this origin.

Publishing uses this repository's existing GitHub Pages configuration: `main`,
repository root. Only the `monaco/` directory belongs to this guide.

After changing cached assets, run `python3 monaco/update-cache.py` from the
repository root. It rebuilds the asset list and content-derived cache version.
Commit and push the change. Existing readers can use **Update guide** when a
new service worker has finished caching the replacement copy.
