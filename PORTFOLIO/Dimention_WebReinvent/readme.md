# 🌐 Dimention – Webpack + Tailwind Modern Collaboration UI

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-5-blue?logo=webpack)
![Responsive](https://img.shields.io/badge/Responsive-Design-brightgreen)
![Status](https://img.shields.io/badge/Project-Demo--Ready-blue)

**Dimention** is a responsive, developer-focused UI built using **Webpack**, **Tailwind CSS**, and custom animation layers. It simulates a real-time collaboration platform featuring chat UI, task boards, and team dashboards.

---

## 🚀 Features

- ✨ Responsive hero section with animated gradient text
- 🔒 Email waitlist input + multi-layered CTA button
- 💬 Fully simulated chat dashboard (desktop-only)
- 🧭 Fixed header with navigation
- 🧩 Animated strokes and hover interactions
- 🏷️ Brand logos and announcement banner

---

## 📱 Responsive Design

Built mobile-first using Tailwind’s utility classes:

| Device        | Behavior                         |
|---------------|----------------------------------|
| **Mobile**    | Chat dashboard hidden, layout stacked |
| **Tablet**    | Adaptive layout and scaling     |
| **Desktop**   | Full UI with animations and chat board |

✅ Breakpoints: `sm`, `md`, `lg`, `xl`  
✅ `flex`, `grid`, `backdrop-blur`, gradient utilities used extensively

---

## 🛠️ Tech Stack

- HTML5
- Tailwind CSS (via PostCSS)
- Webpack 5
- Google Fonts (`Inter`)
- Custom CSS variables
- SVGs, gradients, animations

---

## 📂 Project Structure

```bash
project-root/
├── dist/                   # Bundled output
├── src/
│   ├── index.html          # HTML structure
│   ├── styles/
│   │   └── input.css       # Tailwind source CSS
│   ├── images/             # Static assets
│   └── index.js            # JS entry (if needed)
├── tailwind.config.js
├── postcss.config.js
├── webpack.config.js
├── package.json
└── README.md
