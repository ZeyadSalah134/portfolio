/**
 * modals.js
 * High-end project case study modals and interactive video showcase viewer
 */

const projectData = {
  revora: {
    badge: "PROJECT 01 • MACHINE LEARNING & STREAMLIT",
    title: "REVORA — Car Horsepower Prediction",
    category: "Machine Learning / Streamlit Web App",
    image: "assets/images/revora-preview.jpg",
    description: "Car spec sheets tell you almost everything except the number many people actually want: horsepower. REVORA predicts a car's horsepower from its specifications and turns the trained ML pipeline into an interactive application.",
    overview: "Built using real-world automotive market data (~8,100 UAE car listings), REVORA addresses the gap where horsepower metrics are frequently missing or obscured in listing sheets. By engineering key displacement, induction, and mechanical features, REVORA accurately models engine horsepower output across vehicle categories.",
    pipeline: [
      "Dataset Curation (~8,100 UAE vehicle specs & listings)",
      "Data Cleaning & Outlier Mitigation (imputation & boundary pruning)",
      "Feature Engineering (Power-to-weight estimation, displacement ratios, aspiration tagging)",
      "Categorical Encoding (Target-based encoding via category_encoders)",
      "Model Exploration (ExtraTrees, XGBoost, Random Forest, Gradient Boosting)",
      "Model Comparison & Hyperparameter Tuning (Cross-validation on RMSE & R²)",
      "Production Joblib Pipeline Serialization",
      "Interactive Web Deployment via Streamlit Cloud"
    ],
    features: [
      "Predictor: Real-time horsepower estimation from displacement, cylinders, trim, and transmission specs.",
      "Performance DNA: Interactive radar charts and feature importance breakdown.",
      "Power Battle: Side-by-side comparative horsepower benchmarking across two vehicles.",
      "Model Insights: Explainability and SHAP value projections showing feature impact."
    ],
    links: [
      { text: "View GitHub", url: "https://lnkd.in/epcD4Auh", primary: true },
      { text: "Live App", url: "https://lnkd.in/ec7Tamv6", primary: false }
    ]
  },
  mlproject: {
    badge: "PROJECT 02 • MACHINE LEARNING PROJECT",
    title: "AI / Machine Learning Engineering Project",
    category: "Machine Learning / Model Evaluation",
    image: "assets/images/ml-preview.jpg",
    description: "Comprehensive machine learning implementation exploring data preprocessing, feature engineering, model training, evaluation metrics, and practical deployment workflows.",
    overview: "This project represents an end-to-end practical AI and Machine Learning engineering project featuring model development, performance evaluation, and systematic testing. Watch the full demonstration video below for the complete architectural walkthrough.",
    pipeline: [
      "Problem Formulation & Objective Definition",
      "Exploratory Data Analysis (EDA) & Feature Distribution Analysis",
      "Preprocessing Pipeline (Handling missing data, scaling, transformations)",
      "Model Architecture Design & Training Execution",
      "Evaluation Metrics Verification (Precision, Recall, F1-Score, Loss Curves)",
      "End-to-End System Demonstration & Video Presentation"
    ],
    features: [
      "Full Project Video Demonstration: Detailed video walkthrough highlighting model mechanics and evaluation.",
      "Clean Modular Codebase: Separated data pipelines, model definitions, and inference scripts.",
      "Production-focused Evaluation: Validated against out-of-distribution cases and baseline benchmarks."
    ],
    videoUrl: "https://drive.google.com/file/d/13XEQDt8zYrCe6eYPGEyt8-kMCT9HHYmN/view?usp=sharing",
    links: [
      { text: "Watch Full Video", url: "https://drive.google.com/file/d/13XEQDt8zYrCe6eYPGEyt8-kMCT9HHYmN/view?usp=sharing", primary: true }
    ]
  },
  egytech: {
    badge: "PROJECT 03 • UI/UX & PRODUCT DESIGN",
    title: "EgyTech — iOS UI/UX Design Challenge",
    category: "iOS Mobile Design / Apple HIG",
    image: "assets/images/egytech-preview.jpg",
    description: "Designed an iOS mobile application interface following Apple Human Interface Guidelines, created wireframes and interactive prototypes, and focused on user-centered design and usability.",
    overview: "Developed as part of the Sandooq Al Watan Program Project (Feb 2024 – Jun 2024) under the project name 'EgyTech Zeyad moaz'. The project reimagined the digital portal for Egypt's tech startup ecosystem, networking innovators, startup founders, and venture investors.",
    pipeline: [
      "User Research & Ecosystem Stakeholder Interviews",
      "Information Architecture & Low-Fidelity Wireframing",
      "Apple Human Interface Guidelines (HIG) Design System Alignment",
      "High-Fidelity UI Screens & Component Library in Figma",
      "Interactive Prototype Connections & Micro-Animations",
      "Usability Testing & Iterative Design Refinement"
    ],
    features: [
      "Apple HIG Native Navigation: Tab bars, modal sheets, and standard iOS typography.",
      "Startup Ecosystem Grid: Categorized startup directories, event listings, and investor matching.",
      "Light & Dark Mode Variants: Cohesive design tokens optimized for OLED screens."
    ],
    links: [
      { text: "View Design", url: "https://www.figma.com/design/Vt4vxTnAD4ZmSURWwUTK06/EgyTech-Zeyad-moaz-?t=h6ZflwpaICDlKVxP-1", primary: true },
      { text: "View Prototype", url: "https://www.figma.com/proto/Vt4vxTnAD4ZmSURWwUTK06/EgyTech-Zeyad-moaz-?node-id=0-1&t=04BneSzBdaPXMUWJ-1", primary: false }
    ]
  },
  savore: {
    badge: "PROJECT 04 • UI/UX & PRODUCT DESIGN",
    title: "SAVORÉ — Premium Food Ordering Experience",
    category: "Food / Restaurant Mobile App",
    image: "assets/images/savore-preview.jpg",
    description: "Premium food ordering mobile application crafted with connected prototype interactions, restaurant discovery, curated gourmet menus, and friction-free checkout flows.",
    overview: "SAVORÉ elevates everyday food ordering into a luxurious dining experience. The application emphasizes visual appetency with high-fidelity imagery, elegant warm-toned accents, and a streamlined multi-step order flow designed to minimize cart abandonment.",
    pipeline: [
      "Competitive Benchmarking & Consumer Journey Mapping",
      "Wireframing Core User Flows (Discovery to Checkout)",
      "Visual Hierarchy & Dark Luxe Aesthetic Formulation",
      "Interactive Prototyping (Figma Smart Animate, Page Transitions)",
      "Usability Validation across Touch Targets & Gesture Navigation"
    ],
    features: [
      "Restaurant Discovery: Curated fine dining lists, cuisine categorization, and geolocation sorting.",
      "Menu Browsing & Customization: Dish specifics, dietary allergen tags, and real-time add-on calculations.",
      "Cart & Checkout: Seamless Apple Pay integration UI, coupon applicator, and delivery address switcher.",
      "Order Tracking: Live progress status with courier ETA telemetry."
    ],
    links: [
      { text: "View Design", url: "https://www.figma.com/design/5Dx2YqMOXwqxbo3Xk7y4Se/SAVOR%C3%89-Food-?node-id=3-2&t=gH2c3v5UYi3RHDg7-1", primary: true },
      { text: "View Prototype", url: "https://www.figma.com/proto/5Dx2YqMOXwqxbo3Xk7y4Se/SAVOR%C3%89-Food-?node-id=3-2&t=Hva6Bca8JRBKjwkc-1", primary: false }
    ]
  },
  shoply: {
    badge: "PROJECT 05 • UI/UX & PRODUCT DESIGN",
    title: "SHOPLY — Luxury E-Commerce iOS Experience",
    category: "E-Commerce / iOS UI/UX",
    image: "assets/images/shoply-preview.jpg",
    description: "A premium shopping experience featuring interconnected screens, complete end-to-end user flows, and modern design aesthetics.",
    overview: "SHOPLY is an extensive end-to-end iOS e-commerce application prototype designed in Figma. It encompasses 15+ connected screens providing an effortless retail experience from initial discovery to doorstep delivery tracking.",
    pipeline: [
      "E-commerce Flow Architecture & User Journey Mapping",
      "Design System with Atomic Components (Cards, Buttons, Navbars, Pills)",
      "Figma Prototype Transitions & Fluid Micro-Interactions",
      "Apple Pay & Multi-tier Payment UX Simulation",
      "Interactive Delivery Tracking Map UI"
    ],
    features: [
      "Complete 15-Step Flow: Onboarding → Login → Home → Search → Categories → Product Listing → Product Details → Favorites/Cart → Delivery → Address → Payment → Review → Confirmation → Tracking → Orders.",
      "Sneaker & Streetwear Catalog UI: High-impact dark mode aesthetics with electric accents.",
      "Interactive Figma Prototype: Full clickable prototype available directly via Figma."
    ],
    links: [
      { text: "View Design", url: "https://www.figma.com/design/szVBQj2Dp32eb8cFZEpN2p/SHOPLY?node-id=0-1&t=e80c1N1tWgir27M2-1", primary: true },
      { text: "View Prototype", url: "https://www.figma.com/proto/szVBQj2Dp32eb8cFZEpN2p/SHOPLY?node-id=0-1&t=2J3Lf6gjLGsiY1oC-1", primary: false }
    ]
  }
};

(function() {
  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalContentArea = document.getElementById('modal-content-area');

  if (!modalOverlay) return;

  function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    let linksHtml = '';
    if (data.links && data.links.length > 0) {
      linksHtml = data.links.map(l => {
        const btnClass = l.primary ? 'btn btn-primary btn-sm' : 'btn btn-outline btn-sm';
        const isPlaceholder = l.url === '#';
        const targetAttr = isPlaceholder ? '' : 'target="_blank" rel="noopener noreferrer"';
        const tooltip = isPlaceholder ? ' title="Editable placeholder link - add your URL"' : '';
        const icon = l.text.toLowerCase().includes('prototype') ? '▶' : '↗';
        return `<a href="${l.url}" ${targetAttr}${tooltip} class="${btnClass}">${l.text} ${icon}</a>`;
      }).join('');
    }

    let pipelineHtml = '';
    if (data.pipeline && data.pipeline.length > 0) {
      pipelineHtml = `
        <h4 class="modal-section-title">Technical Pipeline & Workflow</h4>
        <ul class="modal-list">
          ${data.pipeline.map(step => `<li>${step}</li>`).join('')}
        </ul>
      `;
    }

    let featuresHtml = '';
    if (data.features && data.features.length > 0) {
      featuresHtml = `
        <h4 class="modal-section-title">Key Capabilities & Features</h4>
        <ul class="modal-list">
          ${data.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      `;
    }

    let videoPreviewHtml = '';
    if (data.videoUrl) {
      videoPreviewHtml = `
        <div style="margin-top: 1rem; margin-bottom: 1.5rem;">
          <a href="${data.videoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%;">
            ▶ Watch Project Demo Video on Google Drive ↗
          </a>
        </div>
      `;
    }

    modalContentArea.innerHTML = `
      <span class="modal-badge">${data.badge}</span>
      <h2 class="modal-title">${data.title}</h2>
      <img src="${data.image}" alt="${data.title}" class="modal-hero-img" loading="lazy" />
      <p class="modal-desc">${data.description}</p>
      <h4 class="modal-section-title">Project Overview</h4>
      <p class="modal-desc">${data.overview}</p>
      ${videoPreviewHtml}
      ${pipelineHtml}
      ${featuresHtml}
      <div class="modal-footer-actions">
        ${linksHtml}
        <button type="button" class="btn btn-outline btn-sm" id="modal-inner-close">Close Case Study</button>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    const innerCloseBtn = document.getElementById('modal-inner-close');
    if (innerCloseBtn) {
      innerCloseBtn.addEventListener('click', closeModal);
    }
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Bind clicks on triggers
  document.addEventListener('click', function(e) {
    const trigger = e.target.closest('[data-modal-target]');
    if (trigger) {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-modal-target');
      openModal(targetId);
    }
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  window.openProjectModal = openModal;
})();
