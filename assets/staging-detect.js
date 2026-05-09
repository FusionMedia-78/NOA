/* ==============================================================
   staging-detect.js
   When the page is loaded from a Netlify branch-deploy URL
   (any URL containing '--' or starting with 'deploy-preview-'),
   inject a noindex,nofollow meta tag so Google never indexes
   draft content. Also flags <html data-staging="true"> so any
   per-page staging styles can hook off it.
   Production (main) loads at the canonical hostname and is
   left alone.
   ============================================================== */
(function () {
  var h = location.hostname;
  var isStaging = /--/.test(h) || /^deploy-preview-/.test(h);
  if (!isStaging) return;

  var meta = document.createElement('meta');
  meta.name = 'robots';
  meta.content = 'noindex, nofollow';
  document.head.appendChild(meta);

  document.documentElement.setAttribute('data-staging', 'true');
})();
