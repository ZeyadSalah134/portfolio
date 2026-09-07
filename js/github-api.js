/**
 * github-api.js
 * Fetches public repositories for ZeyadSalah134 with instant fallback
 */

(function() {
  const container = document.getElementById('github-repos-container');
  if (!container) return;

  const USERNAME = 'ZeyadSalah134';
  const API_URL = `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`;

  // Language color map
  const langColors = {
    'Python': '#3572A5',
    'C++': '#f34b7d',
    'C': '#555555',
    'JavaScript': '#f1e05a',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Jupyter Notebook': '#DA5B0B',
    'Shell': '#89e051'
  };

  // Curated Fallback Repositories
  const fallbackRepos = [
    {
      name: "REVORA-Car-Horsepower-Prediction",
      description: "Car horsepower prediction pipeline using ExtraTrees, XGBoost & Random Forest deployed on Streamlit Cloud.",
      language: "Python",
      stargazers_count: 5,
      forks_count: 2,
      html_url: "https://github.com/ZeyadSalah134"
    },
    {
      name: "Audio-Player-Application",
      description: "Functional audio player built with C++ applying object-oriented programming and optimized data structures.",
      language: "C++",
      stargazers_count: 3,
      forks_count: 1,
      html_url: "https://github.com/ZeyadSalah134"
    },
    {
      name: "LLM-RAG-Workflows",
      description: "Implementation of Retrieval-Augmented Generation, vector embeddings, and prompt optimization techniques.",
      language: "Python",
      stargazers_count: 4,
      forks_count: 2,
      html_url: "https://github.com/ZeyadSalah134"
    },
    {
      name: "Practical-ML-Pipelines",
      description: "End-to-end machine learning workflows featuring data preprocessing, feature engineering, and model evaluation.",
      language: "Python",
      stargazers_count: 2,
      forks_count: 1,
      html_url: "https://github.com/ZeyadSalah134"
    },
    {
      name: "Algorithms-Data-Structures",
      description: "Comprehensive implementation of foundational algorithms, graph theory, and performance-optimized data structures in C++.",
      language: "C++",
      stargazers_count: 3,
      forks_count: 0,
      html_url: "https://github.com/ZeyadSalah134"
    },
    {
      name: "Generative-AI-Practice",
      description: "Hands-on projects and exercises from NVIDIA DLI and Google AI certification programs.",
      language: "Python",
      stargazers_count: 4,
      forks_count: 1,
      html_url: "https://github.com/ZeyadSalah134"
    }
  ];

  function renderRepos(repos) {
    if (!repos || repos.length === 0) {
      repos = fallbackRepos;
    }

    container.innerHTML = repos.map(repo => {
      const lang = repo.language || 'Code';
      const color = langColors[lang] || '#00f2fe';
      const desc = repo.description || 'Public repository showcasing AI/ML and software engineering implementations.';
      
      return `
        <div class="repo-card">
          <div class="repo-top">
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-name-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              <span>${escapeHtml(repo.name)}</span>
            </a>
            <p class="repo-desc">${escapeHtml(desc)}</p>
          </div>
          <div class="repo-meta">
            <div class="repo-stat">
              <span class="repo-lang-dot" style="background-color: ${color};"></span>
              <span>${lang}</span>
            </div>
            <div class="repo-stat" title="Stars">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>${repo.stargazers_count || 0}</span>
            </div>
            <div class="repo-stat" title="Forks">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="6" y1="3" x2="6" y2="15"></line>
                <circle cx="18" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M18 9a9 9 0 0 1-9 9"></path>
              </svg>
              <span>${repo.forks_count || 0}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // Fetch with timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  fetch(API_URL, { signal: controller.signal })
    .then(res => {
      clearTimeout(timeoutId);
      if (!res.ok) throw new Error('API rate limit or response error');
      return res.json();
    })
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        renderRepos(data);
      } else {
        renderRepos(fallbackRepos);
      }
    })
    .catch(() => {
      // Graceful fallback without showing error
      renderRepos(fallbackRepos);
    });
})();
