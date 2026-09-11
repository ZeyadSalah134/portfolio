# Zeyad Salah — AI/ML Engineer in Progress & UI/UX Designer Portfolio

A premium, modern, responsive, and interactive personal portfolio for **Zeyad Salah**, Computer Science (AI) student at Zagazig National University specializing in:
- Artificial Intelligence & Machine Learning
- Generative AI & Large Language Models (LLMs)
- Retrieval-Augmented Generation (RAG)
- AI Product Prototyping
- UI/UX & Interaction Design (Apple HIG)

Built purely with modern **HTML5**, **Vanilla CSS**, and **Vanilla JavaScript**. 100% static, performant, accessible, and ready for deployment to **GitHub Pages**.

---

## 🌟 Key Highlights & Design System

- **Dual-Theme Engine (Light & Dark)**:
  - **Light Mode Palette**:
    - Primary: `#3368A0`
    - Secondary: `#66A3BF`
    - Soft Accent: `#C8DFDB`
    - Main Background: `#F7F9F8`
    - Cards: `#FFFFFF`
    - Primary Text: `#111111`
    - Secondary Text: `#606060`
  - **Dark Mode Palette**:
    - Primary Dark Background: `#313647`
    - Secondary Surface: `#435663`
    - Accent: `#A3B087`
    - Primary Text: `#F4F5F2`
    - Secondary Text: `#BFC4C5`
  - Instant theme switching without reload, persisted in `localStorage`, honoring system preferences.
- **Hero Section with Typewriter Effect**:
  - Reserved width to prevent layout shift.
  - Loops continuously: *AI/ML Engineer in Progress*, *UI/UX Designer*, *Machine Learning Developer*, *Generative AI Builder*.
  - Displays user's actual portrait photo on desktop (right side) and cleanly underneath on mobile.
  - Accessible with graceful fallback under `prefers-reduced-motion`.
- **9 Streamlined Sections**:
  1. **Home**: Hero introduction, typewriter headline, call-to-actions, and social links.
  2. **About**: In-depth philosophy on turning working ideas into running systems, academic background (3.97 GPA).
  3. **Experience**: Vertical timeline with Uneeq Interns & Tips Hindawi.
  4. **Services**: What I Build (AI & ML solutions, LLMs, AI Product Prototyping, UI/UX, Product Design).
  5. **Skills**: Categorized into Programming, AI/ML, ML/Data Stack, AI Engineering, Development, and Design.
  6. **Projects**:
     - **AI/ML**: REVORA (Horsepower prediction from car specs, Streamlit app).
     - **UI/UX & Product Design**: EgyTech, SHOPLY, SAVORÉ, AUTOVA (with Figma designs and prototypes).
     - Empty, pre-styled image containers ready for asset insertion without broken glyphs.
  7. **Testimonials**: Accessible carousel with touch swipe, previous/next controls, and authentic peer/mentor reviews.
  8. **Get In Touch**: Clickable email, one-click copy button with toast notification, GitHub, and LinkedIn links.
  9. **Footer**: Quick links, official contact info, and copyright.

---

## 📁 Directory Structure

```
MyPorto/
├── index.html                   # Semantic HTML5 architecture & SEO metadata
├── README.md                    # Project overview & documentation
├── LINK.md                      # Deployment links & instructions
├── css/
│   └── style.css                # Design system tokens, light/dark themes, responsive rules
├── js/
│   ├── theme.js                 # Theme engine with localStorage persistence
│   └── main.js                  # Typewriter engine, scroll spy, carousel, toast
└── assets/
    ├── images/
    │   ├── zeyad-profile.jpg    # Portrait photo
    │   └── favicon.svg          # Portfolio favicon
    └── docs/
        └── Zeyad_Salah_CV.pdf   # Downloadable CV
```

---

## 🚀 Running Locally

You do not need Node.js or heavy dependencies. You can run the website with any lightweight HTTP server:

```powershell
python -m http.server 3000
```

Open `http://localhost:3000` in your web browser.

---

## 📬 Contact Information

- **Email**: [ZeyadElshanab@gmail.com](mailto:ZeyadElshanab@gmail.com)
- **LinkedIn**: [linkedin.com/in/zeyad-salah-elshanab](https://eg.linkedin.com/in/zeyad-salah-elshanab)
- **GitHub**: [github.com/ZeyadSalah134](https://github.com/ZeyadSalah134)
- **REVORA GitHub**: [github.com/ZeyadSalah134/FinalNtiSpeedProject](https://github.com/ZeyadSalah134/FinalNtiSpeedProject)
- **REVORA Live App**: [revoraproject.streamlit.app](https://revoraproject.streamlit.app)
