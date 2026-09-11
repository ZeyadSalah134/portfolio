/**
 * github-api.js
 * Loads public repositories for ZeyadSalah134.
 * On failure, shows the known REVORA repository only — no invented stats or fake repos.
 */
(function () {
  const container = document.getElementById('github-repos-container');
  if (!container) return;

  const USERNAME = 'ZeyadSalah134';
  const API_URL = `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`;

  const knownRepo = {
    name: 'FinalNtiSpeedProject',
    description: 'REVORA — a live machine-learning application that predicts vehicle horsepower from car specifications.',
    language: 'Python',
    html_url: 'https://github.com/ZeyadSalah134/FinalNtiSpeedProject'
  };

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderRepos(repos) {
    const list = Array.isArray(repos) && repos.length ? repos : [knownRepo];

    container.innerHTML = list.map((repo) => {
      const lang = repo.language || 'Code';
      const desc = repo.description || '';
      const stars = typeof repo.stargazers_count === 'number' ? repo.stargazers_count : null;
      const forks = typeof repo.forks_count === 'number' ? repo.forks_count : null;

      return `
        <article class="repo-card reveal">
          <a href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener noreferrer" class="repo-name-link">
            <span>${escapeHtml(repo.name)}</span>
            <span aria-hidden="true">↗</span>
          </a>
          ${desc ? `<p class="repo-desc">${escapeHtml(desc)}</p>` : ''}
          <div class="repo-meta">
            <span class="repo-stat">${escapeHtml(lang)}</span>
            ${stars !== null ? `<span class="repo-stat">${stars} stars</span>` : ''}
            ${forks !== null ? `<span class="repo-stat">${forks} forks</span>` : ''}
          </div>
        </article>
      `;
    }).join('');
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  fetch(API_URL, { signal: controller.signal })
    .then((res) => {
      clearTimeout(timeoutId);
      if (!res.ok) throw new Error('GitHub API unavailable');
      return res.json();
    })
    .then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        renderRepos(data.filter((r) => !r.fork).slice(0, 6));
      } else {
        renderRepos([knownRepo]);
      }
    })
    .catch(() => {
      renderRepos([knownRepo]);
    });
})();
