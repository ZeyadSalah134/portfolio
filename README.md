# Zeyad Salah — AI & Machine Learning Engineer Portfolio

A premium, production-grade personal portfolio website for **Zeyad Salah El Sayed Ali Elshanab**, Computer Science (AI) student specializing in Machine Learning, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and practical AI systems.

Built purely with modern **HTML5**, **CSS3**, and modular **Vanilla JavaScript (ES6+)**. Designed to be 100% static and ready for direct deployment to **GitHub Pages**.

---

## 🌟 Features & Highlights

- **Dark High-Tech Visual Identity**: Near-black/navy backgrounds (`#07090e`, `#0c111c`), white typography, glassmorphism cards, glowing electric cyan borders, and ambient neural network canvas.
- **Hero Showcase**: Prominent profile photo with glowing cybernetic frame and floating tech chips (`CS (AI) • Class of 2028`, `LLMs & RAG Systems`).
- **Interactive Sticky Navigation & Mobile Drawer**: Smooth scroll spy, active section indicator, CV download button, and responsive hamburger menu.
- **Experience Timeline**: Structured chronology of Machine Learning and LLM internships (Uneeq Interns, Tips Hindawi).
- **Interactive Skills Section**: Filterable by category (*AI/ML*, *Generative AI*, *Programming*, *Tools & Practices*) with animated proficiency meters without fake percentages.
- **Verified Certifications**: Credential cards for NVIDIA DLI (Generative AI, LLM Prompt Engineering) and Google AI certifications.
- **Core AI/ML Projects Showcase**:
  - **REVORA — Car Horsepower Prediction**: Feature mini-cards (*Predictor*, *Performance DNA*, *Power Battle*, *Model Insights*), visual interactive ML pipeline flow (*Dataset &rarr; Cleaning &rarr; Feature Engineering &rarr; Target Encoding &rarr; Training &rarr; Comparison &rarr; Joblib &rarr; Streamlit*), live demo, and GitHub links.
  - **AI / ML Project**: Video demonstration preview card with direct play trigger linked to Google Drive.
- **UI/UX & Product Design Projects**:
  - **EgyTech**: iOS Design Challenge adhering to Apple Human Interface Guidelines.
  - **SAVORÉ**: Luxury food delivery and restaurant discovery app flow.
  - **SHOPLY**: Complete 15-screen connected e-commerce user journey in Figma.
- **Dynamic GitHub Repositories**: Synchronizes live repositories from `@ZeyadSalah134` via GitHub public API with graceful fallback.
- **Interactive Case Study Modals**: Fullscreen modals for in-depth project overviews, pipelines, and direct links.
- **Interactive Contact**: One-click "Copy Email" with animated toast notification and direct mailto button.

---

## 📁 Directory Structure

```
MyPorto/
├── index.html                   # Semantic HTML5 architecture & SEO/OG metadata
├── README.md                    # Documentation & deployment guide
├── css/
│   └── style.css                # Design system tokens, glowing effects & responsive grid
├── js/
│   ├── main.js                  # Navigation scroll spy, copy toast, skill filter
│   ├── neural-canvas.js         # Interactive ambient AI particle constellation
│   ├── github-api.js            # Dynamic GitHub repo loader with fallback
│   └── modals.js                # Fullscreen project modal & case study viewer
└── assets/
    ├── images/
    │   ├── zeyad-photo.jpg      # Profile photo
    │   ├── favicon.svg          # Neural node SVG favicon
    │   ├── revora-preview.jpg   # REVORA project preview
    │   ├── ml-preview.jpg       # ML video project preview
    │   ├── egytech-preview.jpg  # EgyTech design preview
    │   ├── savore-preview.jpg   # SAVORÉ food app preview
    │   └── shoply-preview.jpg   # SHOPLY e-commerce preview
    └── docs/
        └── Zeyad_Salah_CV.pdf   # Downloadable CV
```

---

## 🚀 How to Run Locally

You do not need to install Node.js or any build tools. You can run the website using any static server:

### Option 1: Python Built-in Server (Recommended)
Open a terminal in the project directory and run:
```bash
python -m http.server 8000
```
Then open your browser and navigate to:
```
http://localhost:8000
```

### Option 2: VS Code Live Server
1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and select **"Open with Live Server"**.

---

## ⚙️ Customization Guide

### 1. How to Replace Your Profile Photo
Replace the image located at:
```
assets/images/zeyad-photo.jpg
```
Keep the filename `zeyad-photo.jpg` (or update the `src` attribute in `index.html` under `<img src="assets/images/zeyad-photo.jpg" ... />`).

### 2. How to Update or Replace Your CV
Replace the PDF located at:
```
assets/docs/Zeyad_Salah_CV.pdf
```
Ensure the filename remains `Zeyad_Salah_CV.pdf` so all download buttons automatically link to your updated document.

### 3. How to Update Project Images
Replace the images in `assets/images/`:
- `revora-preview.jpg`
- `ml-preview.jpg`
- `egytech-preview.jpg`
- `savore-preview.jpg`
- `shoply-preview.jpg`

### 4. Figma Design & Prototype Links
Each Figma project card and modal features two dedicated external links:
- **View Design** (`target="_blank" rel="noopener noreferrer"`): Opens the full workspace design file in Figma.
- **View Prototype** (`target="_blank" rel="noopener noreferrer"`): Opens the interactive, clickable presentation prototype in Figma.

Active mappings:
- **EgyTech**:
  - Design: `https://www.figma.com/design/Vt4vxTnAD4ZmSURWwUTK06/EgyTech-Zeyad-moaz-?t=h6ZflwpaICDlKVxP-1`
  - Prototype: `https://www.figma.com/proto/Vt4vxTnAD4ZmSURWwUTK06/EgyTech-Zeyad-moaz-?node-id=0-1&t=04BneSzBdaPXMUWJ-1`
- **SHOPLY**:
  - Design: `https://www.figma.com/design/szVBQj2Dp32eb8cFZEpN2p/SHOPLY?node-id=0-1&t=e80c1N1tWgir27M2-1`
  - Prototype: `https://www.figma.com/proto/szVBQj2Dp32eb8cFZEpN2p/SHOPLY?node-id=0-1&t=2J3Lf6gjLGsiY1oC-1`
- **SAVORÉ**:
  - Design: `https://www.figma.com/design/5Dx2YqMOXwqxbo3Xk7y4Se/SAVOR%C3%89-Food-?node-id=3-2&t=gH2c3v5UYi3RHDg7-1`
  - Prototype: `https://www.figma.com/proto/5Dx2YqMOXwqxbo3Xk7y4Se/SAVOR%C3%89-Food-?node-id=3-2&t=Hva6Bca8JRBKjwkc-1`

---

## 🌐 How to Deploy to GitHub Pages (Step-by-Step)

Because this website uses 100% relative paths (`./assets/...`, `css/style.css`, `js/...`), it is instantly compatible with GitHub Pages.

### Step 1: Initialize Git and Commit
In the project directory, run:
```bash
git init
git add .
git commit -m "feat: initial release of Zeyad Salah AI portfolio"
```

### Step 2: Create a GitHub Repository
1. Go to [GitHub New Repository](https://github.com/new).
2. Name it `portfolio` (or `ZeyadSalah134.github.io` for your root domain).
3. Set visibility to **Public**.
4. Leave "Add a README" unchecked.
5. Click **Create repository**.

### Step 3: Push to GitHub
```bash
git branch -M main
git remote add origin https://github.com/ZeyadSalah134/portfolio.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (top navigation).
3. In the left sidebar, click **Pages**.
4. Under **Branch**, select `main` and folder `/ (root)`.
5. Click **Save**.
6. After 1–2 minutes, your website will be live at:
   ```
   https://ZeyadSalah134.github.io/portfolio/
   ```

---

## 📄 License & Attribution

&copy; 2026 Zeyad Salah. Designed and built with HTML5, CSS3, and JavaScript. All rights reserved.
