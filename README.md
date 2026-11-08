# ITB STIKOM Bali Campus Web Platform Redesign - Next-Gen Campus Experience

A comprehensive front-end redesign and user experience makeover of the official ITB STIKOM Bali campus web platform. Centered around the concept of "Next-Gen Campus Experience", this platform modernizes academic portals through immersive multimedia, human-centered UI/UX design, visual hierarchy engineering, and assistive accessibility tools.

## Concept and Philosophy

ITB STIKOM Bali is recognized as the pioneering information technology institute in Bali. This makeover project modernizes the digital front door of the university, transforming traditional static informational pages into an engaging, responsive, and accessible academic hub.

### 1. Color Palette and Visual Psychology
- Primary Brand Tone: Deep Blue (`#003366`) representing institutional integrity, academic authority, and digital trust.
- Achievement Accent: Golden Yellow (`#FFCC00`) derived from the official STIKOM Bali insignia, symbolizing academic excellence and high-priority call-to-actions.
- Tech Accent: Cyan / Light Blue (`#00D2FF`) representing software innovation and technological progression.
- Clean Foundation: White whitespace (`#FFFFFF` / `#F8FAFC`) maximizing reading contrast and content legibility.

### 2. Mitigation of Chromostereopsis
Although the institutional brand identity contains blue and red hues, primary user interface surfaces deliberately minimize saturated red elements. Simultaneous exposure to high-intensity red and blue colors induces chromostereopsis (optical eye fatigue resulting from differing focal wavelengths in the human eye). Restricting red strictly to micro-branding ensures prolonged reading comfort during academic study.

### 3. Dual-Tier Typographic Hierarchy
- Informational Pages (Home, News, Contact, Curricula): Engineered using the **Inter** sans-serif font family. Selected for its tall x-height and clear letter spacing, optimizing rapid scanning across diverse mobile and desktop screen resolutions.
- Institutional Heritage Pages (Campus Profile, History): Enhanced with **Playfair Display** serif headings combined with Inter body copy, delivering elegance for historical timelines, vision-mission declarations, and leadership citations.

## Interface Preview

[![Interface Preview Status](https://img.shields.io/badge/Interface_Preview-Documentation_in_Progress-2563eb?style=for-the-badge)](https://github.com/ANTARTICA1/Website-Stikom-UAS)

## Key Features and Pages

### 1. Immersive Digital Gateway (Home - `index.html`)
- Fullscreen Looping Video Hero: High-definition ambient background video presenting campus life.
- Smart Modal Announcement Hub: Side panel pop-up system enabling rapid reading of campus circulars without requiring page reloads.
- Interactive Academic Cards: Dynamic cards with hover elevation effects highlighting undergraduate programs (S1 Sistem Informasi, S1 Sistem Komputer, S1 Teknologi Informasi, S1 Bisnis Digital, D3 Manajemen Informatika).
- Responsive Achievement Banner: Viewport-adaptive visual banner scaling dynamically across mobile and desktop displays.

### 2. Cinematic News Reader
- Reading Progress Indicator: Fixed real-time progress bar tracking vertical scroll depth.
- Modern Discussion Section: Styled comment threads and discussion blocks.

### 3. Interactive Campus Profile & History
- Grid-Structured Vision & Mission: Distinct cards replacing legacy bullet lists.
- Vertical Timeline of Institutional History: Interactive chronological timeline tracking the evolution of STIKOM Bali from its founding onward.

### 4. Contact & Interactive Location Engine
- Full-Screen Embedded Map: Responsive map integration with campus location markers.
- Context-Aware Mobile Forms: Address and communication channels collapsible on small screens to maximize visible viewport.

### 5. Assistive Accessibility Suite
- Floating Text Resizer: Dedicated accessibility controls (`A-`, `A`, `A+`) allowing real-time font scaling across the entire document without layout clipping.
- Scroll-Driven Animations: Smooth viewport entry transitions powered by AOS (Animate On Scroll).
- Frictionless Scroll-to-Top: Floating back-to-top trigger reducing vertical scrolling friction.

### 6. Interactive Campus Virtual Assistant
- Quick-response chat widget positioned persistently in the lower-right viewport, answering frequently asked inquiries regarding admissions, tuition structures, and faculties.

## Technology Stack

- Front-End Markup: Semantic HTML5
- Styling & Layout: CSS3 (Custom Variables, Flexbox, CSS Grid)
- Animation & Motion: AOS (Animate On Scroll), CSS3 Keyframe Animations
- Typography: Google Fonts (Inter, Playfair Display)
- Iconography: Font Awesome & Bootstrap Icons

## Project Structure

```
Website-Stikom-UAS/
├── css/                     # Compiled and modular stylesheets
├── html/                    # Sub-pages (profile, news, academic programs, contact)
├── script/                  # Client-side scripts (text resizer, timeline, modal logic)
├── src/                     # Media assets (campus imagery, badges, videos)
├── index.html               # Main landing portal
├── readme.txt               # Developer design notes and color rationale
└── README.md                # Comprehensive technical documentation
```

## Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/ANTARTICA1/Website-Stikom-UAS.git
   cd Website-Stikom-UAS
   ```

2. Open `index.html` in your web browser, or serve locally:
   ```bash
   python -m http.server 8000
   ```

3. Navigate to `http://localhost:8000`.

## Author

Anak Agung Ngurah Krisna Artha Wibawa (NIM: 240040075)  
Department of Information Systems  
Institut Teknologi dan Bisnis (ITB) STIKOM Bali  
GitHub: [ANTARTICA1](https://github.com/ANTARTICA1)

## License

This project is licensed under the MIT License.