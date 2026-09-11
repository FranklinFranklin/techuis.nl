# 🚀 Techuis ICT — IT Support, Computer Repair & Web Design

<div align="center">

  <p>
    <a href="./README.md">🇳🇱 Nederlands</a> •
    <strong>🇬🇧 English</strong>
  </p>

  <img src="logotechuis.png" alt="Techuis ICT Logo" width="160" height="auto" />

  <p align="center">
    <strong>Professional on-site computer support, home network optimization, and modern web design for consumers and businesses in South Holland, Netherlands.</strong>
  </p>

  <p align="center">
    <a href="https://techuis.nl"><img src="https://img.shields.io/badge/Website-techuis.nl-4f46e5?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website" /></a>
    <a href="https://wa.me/31686427359"><img src="https://img.shields.io/badge/WhatsApp-06--86_42_73_59-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" /></a>
    <a href="tel:+31686427359"><img src="https://img.shields.io/badge/Phone-Call_Direct-10b981?style=for-the-badge&logo=phone&logoColor=white" alt="Phone" /></a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/HTML5-Semantic-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/Server-Apache_2.4-D22128?style=flat-square&logo=apache&logoColor=white" alt="Apache" />
    <img src="https://img.shields.io/badge/WCAG-2.1_AA-success?style=flat-square" alt="WCAG 2.1 AA" />
    <img src="https://img.shields.io/badge/SEO-100%25_Optimized-blue?style=flat-square" alt="SEO" />
    <img src="https://img.shields.io/badge/GDPR%2FAVG-Compliant-brightgreen?style=flat-square" alt="GDPR Compliant" />
    <img src="https://img.shields.io/badge/License-Proprietary-gray?style=flat-square" alt="License" />
  </p>

  <p align="center">
    <a href="#-about-techuis-ict">About</a> •
    <a href="#-core-services">Services</a> •
    <a href="#-architecture--tech-stack">Tech Stack</a> •
    <a href="#-local-seo-architecture">Local SEO</a> •
    <a href="#-security--privacy-audit">Security & Privacy</a> •
    <a href="#-quickstart--local-development">Quickstart</a> •
    <a href="#-project-structure">Structure</a> •
    <a href="#-contact--support">Contact</a>
  </p>

</div>

---

## 📖 About Techuis ICT

**[Techuis ICT](https://techuis.nl)** is a premier computer repair, network engineering, and digital support provider headquartered in South Holland, Netherlands. Serving residential users, senior citizens, and small-to-medium businesses (SMB / ZZP), Techuis delivers rapid, certified diagnostics and solutions—both **on-site at your home/office** and via **secure remote support**.

### Core Commitments
- ⚡ **Rapid Response**: Personal and technical feedback within 2 hours during business days.
- 🤝 **Transparent & Honest**: No confusing technical jargon, hidden surcharges, or unnecessary hardware replacements.
- 🛡️ **Certified Engineers**: Decades of field experience in Microsoft Windows 11, Apple macOS/iOS, Mesh Wi-Fi architectures, and web standards.
- 📍 **Local Focus**: Active across the Rijnmond and Drechtsteden metro area: **Rotterdam, Dordrecht, Spijkenisse, and Hoogvliet**.

---

## 🛠️ Core Services

The platform provides dedicated service modules featuring interactive diagnostic problem solvers, clear rate calculators, and resilient contact funnels:

| Service | Overview & Capabilities | Page |
| :--- | :--- | :--- |
| 💻 **Laptop & PC Repair** | Resolving slow boot times, removing persistent malware/viruses, hardware upgrades (SSD/RAM), and clean Windows 11 installations. | [`computer-laptop.html`](./computer-laptop.html) |
| 📶 **Wi-Fi & Home Network** | Eliminating dead zones in attics/gardens, configuring Mesh networks, and setting up ISP modems/routers. | [`internet-email-thuisnetwerk-wifi.html`](./internet-email-thuisnetwerk-wifi.html) |
| 🖨️ **Printer & Scanner Support** | Wireless printer setup, resolving driver mismatches, network printer sharing, and scan-to-cloud workflows. | [`printer-scanner.html`](./printer-scanner.html) |
| 📱 **Smartphone & Tablet** | Apple iPhone, iPad, and Android migrations, iCloud/Google account syncing, and digital security for seniors. | [`tablet-ipad.html`](./tablet-ipad.html) / [`telefoon-mobile-apps.html`](./telefoon-mobile-apps.html) |
| 🌐 **Modern Web Design** | Lightweight, responsive, and SEO-optimized custom websites tailored for local businesses and contractors. | [`websitebouwen.html`](./websitebouwen.html) |
| 🎧 **Remote Assistance** | Instant, zero-call-out-fee remote diagnosis and troubleshooting over secure, encrypted screen-sharing sessions. | [`hulpopstand.html`](./hulpopstand.html) |
| 💶 **Transparent Pricing** | Clear service tier cards with zero surprise call-out fees or hidden hourly charges. | [`tarieven.html`](./tarieven.html) |

---

## 🧠 2026 Tech Knowledge Base & Guides

The website features an actively maintained, comprehensive knowledge base engineered for high search intent and practical problem solving:

- 🪟 **Windows 11 in 2026**: System settings optimization, Copilot AI features, background bloatware removal, and laptop battery management.
- 🍏 **Apple iPhone & iOS (2026 Edition)**: Battery health longevity, iCloud storage full resolution, and senior citizen security with national identity apps (DigiD).
- 🛡️ **Home Cybersecurity**: 3-2-1 backup strategy implementation, Windows Defender hardening, phishing awareness, and password manager best practices.
- 📄 **Free Downloads**: Downloadable computer maintenance checklists and diagnostic PDFs.

---

## 🏗️ Architecture & Tech Stack

Engineered according to the **zero-runtime overhead** philosophy. The codebase delivers sub-second page loads and near-perfect Google Lighthouse scores without bloated client-side JavaScript frameworks:

```
┌─────────────────────────────────────────────────────────────┐
│                       TECHUIS ICT                           │
├─────────────────┬─────────────────────────┬─────────────────┤
│   Presentation  │         Styling         │    Networking   │
│   Semantic HTML5│   Tailwind CSS (JIT)    │   Fetch / AJAX  │
│   W3C Valid     │   assets/css/tailwind   │   FormSubmit.co │
├─────────────────┼─────────────────────────┼─────────────────┤
│   Web Server    │      Optimizations      │   Compliance    │
│   Apache 2.4    │   HTTP/2, Gzip Deflate  │   WCAG 2.1 AA   │
│   .htaccess     │   Browser Caching 1Y    │   GDPR / AVG    │
└─────────────────┴─────────────────────────┴─────────────────┘
```

- **Frontend**: Clean, accessible, semantic **HTML5** spanning over 80 production pages.
- **Styling**: **Tailwind CSS v3.4** compiled with aggressive minification (`tailwind.min.css`).
- **Client Logic**: Lightweight, standard-compliant **Vanilla JavaScript (ES6+)** powering postcode validation, live opening hours status indicators, and resilient form submissions.
- **Icons**: Scalable vector icons (Ionicons & optimized SVGs) for instant rendering without webfont latency.
- **Hosting**: **Apache 2.4** backed by an enterprise-grade [`.htaccess`](./.htaccess) rule set enforcing HTTPS, canonical non-www routing, and Core Web Vitals caching.

---

## 📍 Local SEO Architecture

To achieve market leadership in Google local pack and organic rankings, the platform uses an intentional, localized content hierarchy:

- **Service × Region Combinations**: Targeted landing pages covering specific customer search queries across major regional cities:
  - Rotterdam: *Slow laptop repair*, *Home computer help*, *Wi-Fi issues*, *Printer installation*, *Virus removal*.
  - Dordrecht, Spijkenisse & Hoogvliet: Tailored service hubs with localized postal codes, addresses, and route indications.
- **Structured Data (Schema.org)**: Rich JSON-LD microdata across all pages (`LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`).
- **Social Graph Optimization**: Open Graph and Twitter Card tags providing high-CTR link previews on WhatsApp, Facebook, and LinkedIn.
- **Crawler Optimization**: Clean, valid [`sitemap.xml`](./sitemap.xml) and [`robots.txt`](./robots.txt) directives.

---

## 🔒 Security & Privacy Audit

Audited against contemporary IT Security and web development benchmarks:

> [!NOTE]
> **Audit Status**: Fully safe for public GitHub hosting. Zero confidential credentials, secrets, or unprotected personal data are present.

| Security Vector | Implementation & Safeguards | Status |
| :--- | :--- | :---: |
| 🔑 **Zero Hardcoded Secrets** | No API keys, database credentials, server passwords, or cryptographic tokens anywhere in the codebase or git log. | ✅ **Clean** |
| 🛡️ **HTTP Security Headers** | Strictly enforced via `.htaccess`: `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`. | ✅ **Active** |
| 🚫 **Spam Mitigation** | Invisible honeypot inputs (`_honey`), rate-limiting support, and resilient client-side error handling on [`contact.html`](./contact.html). | ✅ **Active** |
| 🇪🇺 **GDPR / AVG Compliance** | Compliant cookie consent system (`acceptCookies` / `declineCookies`), transparent privacy statement, and zero unauthorized third-party tracking scripts. | ✅ **Compliant** |
| 🧹 **Data Sanitization** | Obsolete registration and Chamber of Commerce (KvK) records have been thoroughly eradicated from the entire repository. | ✅ **Clean** |
| 📁 **Repository Hygiene** | Comprehensive [`.gitignore`](./.gitignore) excludes `node_modules/`, `.vscode/`, and OS system artifacts from git tracking. | ✅ **Active** |

---

## 🚀 Quickstart & Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/FranklinFranklin/techuis.nl.git
   cd techuis.nl
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build Tailwind CSS**:
   ```bash
   # One-off minified production build
   npm run build:css

   # Or watch mode for active development
   npm run dev:css
   ```

4. **Launch local web server**:
   Preview the site using VS Code Live Server or any static HTTP server:
   ```bash
   # With npx
   npx serve .

   # Or with Python 3
   python3 -m http.server 8080
   ```
   Open `http://localhost:8080` in your web browser.

---

## 📂 Project Structure

```text
techuis_ITSupport/
├── .htaccess                 # Apache server rules (HTTPS, Caching, Security Headers)
├── .gitignore                # Git exclusions (node_modules, .vscode, OS artifacts)
├── 404.html                  # Custom branded 404 error page
├── index.html                # Main landing page (Hero, services, diagnostics, reviews, FAQ)
├── contact.html              # Contact page with resilient form handling & WhatsApp fallback
├── tarieven.html             # Transparent price list and rate cards
├── overons.html              # Company history, mission, and engineer qualifications
├── werkwijze.html            # Service methodology (on-site & remote procedures)
├── hulpopstand.html          # Remote desktop assistance instructions
├── websitebouwen.html        # Custom web design & development services
├── privacybeleid.html        # GDPR / AVG privacy policy
├── algemenvoorwaarden.html   # Terms and conditions
├── sitemap.xml               # Search engine XML sitemap
├── robots.txt                # Search engine crawler directives
├── package.json              # Project scripts & devDependencies (Tailwind CSS)
│
├── assets/
│   ├── css/                  # Compiled stylesheets (tailwind.min.css, style.css)
│   ├── src/                  # Source files for Tailwind CSS (input.css)
│   ├── images/               # Image assets, banners, and service iconography
│   └── videos/               # UI video previews
│
├── blog/                     # 20+ Contemporary tech blogs (Windows 11, Apple iPhone, Security)
├── downloads/                # Downloadable guides and computer health check PDFs
└── [regional-pages]          # Local SEO hubs (Rotterdam, Dordrecht, Spijkenisse, Hoogvliet)
```

---

## 📞 Contact & Support

Looking for computer repair or network optimization in the South Holland area?

- 🌐 **Website**: [techuis.nl](https://techuis.nl)
- 📞 **Phone**: [+31 6 86 42 73 59](tel:+31686427359)
- 💬 **WhatsApp**: [Send direct WhatsApp message](https://wa.me/31686427359)
- ✉️ **Email**: [info@techuis.nl](mailto:info@techuis.nl)
- ⏱️ **Operating Hours**: Mon – Sat: 08:30 – 21:00 • Sun: 10:00 – 18:00

---

<div align="center">
  <small>© 2026 Techuis ICT. All rights reserved.</small>
</div>
