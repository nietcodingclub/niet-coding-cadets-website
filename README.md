# NIET Coding Cadets

<div align="center">

### **BUILD. COMPETE. CREATE.**

**The CSE technical community at Noida Institute of Engineering and Technology (NIET), Greater Noida.**

[![Live Website](https://img.shields.io/badge/Website-Live-E3262E?style=for-the-badge&logo=google-chrome&logoColor=white)](#)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](#)

</div>

---

## About

**NIET Coding Cadets** is the technical club of the **Computer Science & Engineering Department at Noida Institute of Engineering and Technology (NIET), Greater Noida**.

The club brings together students who are passionate about:

- 💻 Coding and software development
- 🧠 Problem solving and DSA
- 🏆 Competitions and challenges
- 🚀 Hackathons and innovation
- 🛠️ Technical workshops
- 🤝 Peer learning and collaboration
- 📈 Technical and professional growth

This repository contains the official club website — a digital home for the community, its events, achievements, leadership, gallery and student stories.

> **Where students learn technology, turn ideas into projects, challenge themselves through competitions, and grow together as a technical community.**

---

## ✨ What the Website Includes

### 🏠 Home

A high-impact introduction to NIET Coding Cadets with the club's mission, statistics, calls to action and featured content.

### 📖 About

An overview of the community and its journey:

**Learn → Build → Compete → Lead → Grow**

### 🎯 Events

Browse upcoming and completed club events with category filtering, event status, posters and dedicated event detail pages.

Current event categories include:

- Coding
- Hackathon
- Workshop
- Competition
- Seminar
- Community
- Other

### 🏅 Achievements

A dedicated space for verified club and student accomplishments, including major milestones and an achievement timeline.

### 👥 Team

Meet the people behind the community, including club leadership and core team members with professional profile links.

### 📸 Gallery

A visual collection of club moments across:

- Events
- Workshops
- Competitions
- Team activities

### ⭐ Cadets in Action

Student spotlights highlighting meaningful achievements, projects, competitions, certifications and contributions.

### 📚 Resources

A place for students to discover learning material and practice resources across areas such as DSA, Java, JavaScript, Web Development, SQL, Git/GitHub and interview preparation.

### 🚀 Join the Club

Clear calls to action for students who want to participate, learn, build and contribute.

---

## 🗓️ Featured Event

### Segue 3.0 — Sustainable Intelligence

**Segue 3.0** is a Global Design Thinking Challenge focused on solving real-world problems through innovation, collaboration and sustainable solutions.

The challenge follows a structured journey involving:

**Team Registration → Proposal Submission → Online Pitching → Grand Finale**

The event is presented by the **School of Future Skills** in collaboration with **NIET, Greater Noida**.

Learn more and register:

**https://schooloffutureskills.com/segue-3-0/**

---

## 🏆 Community Highlights

The website is designed to showcase real accomplishments rather than placeholder claims.

Examples currently represented in the project include:

- **Smart India Hackathon** — student achievement involving selection among the Top 30 teams
- **Cyber Sapiens** — cybersecurity-focused technical challenge
- **Battle of Bots** — gaming and technology competition
- **Algo Arena** — competitive coding event
- **Dominance** — technical competition
- **Escape Room** — problem-solving and teamwork challenge

> Event and achievement information is maintained through structured data files so confirmed information can be updated without rewriting UI components.

---

## 🎨 Design Philosophy

The website follows a **dark, technical and premium visual identity** inspired by the club's black/red branding.

### Visual direction

- Near-black and charcoal backgrounds
- Red accent color
- High-contrast typography
- Dark cards with subtle borders
- Carefully used glass effects
- Soft shadows and red highlights
- Technical grid/code-inspired details
- Responsive layouts
- Smooth micro-interactions

The goal is not to create another generic college website.

The goal is to make the site feel like a **modern developer community and technology platform** while retaining the credibility of an official college club.

---

## 🧱 Architecture

Club information is intentionally separated from UI components.

A simplified structure looks like:

```text
src/
├── assets/
│   ├── events/
│   ├── team/
│   └── ...
│
├── components/
│   ├── ...
│
├── data/
│   ├── site.ts
│   ├── events.ts
│   ├── achievements.ts
│   ├── team.ts
│   ├── gallery.ts
│   └── ...
│
├── routes/
│   ├── ...
│
└── server.ts
```

### Centralized data

Important club information is maintained through data/configuration files rather than being scattered throughout components.

This makes it easier to update:

- Events
- Posters
- Registration links
- Team members
- LinkedIn/GitHub profiles
- Achievements
- Gallery images
- Social links
- Club statistics

---

## 🛠️ Tech Stack

| Technology          | Purpose                                  |
| ------------------- | ---------------------------------------- |
| **React 19**        | UI development                           |
| **TypeScript**      | Type-safe application code               |
| **TanStack Start**  | Full-stack React application framework   |
| **TanStack Router** | Application routing                      |
| **Vite**            | Development and production build tooling |
| **Tailwind CSS 4**  | Styling and responsive UI                |
| **Lucide React**    | Interface icons                          |
| **Nitro**           | Production server/build layer            |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have:

- Node.js
- npm
- Git

### Clone the repository

```bash
git clone <repository-url>
cd niet-coding-cadets-website
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The local development server will provide the URL shown in your terminal.

---

## 📦 Production Build

Before deploying, verify that the production build succeeds:

```bash
npm run build
```

Preview the production build with:

```bash
npm run preview
```

---

## 🔧 Updating Club Content

Most content changes should be made in the corresponding files under:

```text
src/data/
```

For example:

```text
src/data/events.ts
src/data/team.ts
src/data/achievements.ts
src/data/gallery.ts
src/data/site.ts
```

### Add a new event

Add the event to `src/data/events.ts` and provide its:

- Name
- Date
- Venue
- Category
- Status
- Description
- Poster
- Registration URL
- Other confirmed details

### Add a team member

Update `src/data/team.ts` and add:

- Name
- Role
- Bio
- Photograph
- LinkedIn
- GitHub, when available

### Add photographs

Place the image inside the appropriate directory under:

```text
src/assets/
```

Then import it into the relevant data file.

---

## 🔗 Official Community Links

- **Instagram:** https://www.instagram.com/niet.coding.cadets/
- **LinkedIn:** https://www.linkedin.com/company/niet-coding-cadets/
- **GitHub:** https://github.com/nietcodingclub
- **WhatsApp Community:** https://chat.whatsapp.com/JXgxzkt91VzLogg9cn0TeP

---

## 📌 Content Integrity

This is an official college club website, so **accuracy matters**.

The project follows a simple rule:

> **Never invent club information.**

Do not add unverified:

- Achievements
- Awards
- Statistics
- Team members
- Event winners
- Sponsors
- Partnerships
- Dates
- Registration links
- Social accounts

When information is not confirmed, use a clear placeholder such as:

```text
[ADD DATE]
[ADD TEAM MEMBER]
[ADD REGISTRATION LINK]
```

This keeps the website credible while making future updates easy.

---

## 📱 Responsive & Accessible

The website is designed for:

- 🖥️ Desktop
- 💻 Laptop
- 📱 Mobile
- 📟 Tablet

The UI aims to provide:

- Semantic HTML
- Keyboard-friendly interaction
- Accessible controls
- Proper image alt text
- Responsive typography
- Touch-friendly buttons
- No intentional horizontal scrolling

---

## ⚡ Performance

Performance is treated as part of the product.

The project prioritizes:

- Optimized assets
- Efficient component rendering
- Responsive images
- Lazy loading where appropriate
- Lightweight interactions
- Production builds through Vite
- Minimal unnecessary client-side work

---

## 🗺️ Community Journey

The website represents the journey we want every Cadet to experience:

```text
        ┌─────────┐
        │  LEARN  │
        └────┬────┘
             ↓
        ┌─────────┐
        │  BUILD  │
        └────┬────┘
             ↓
       ┌───────────┐
       │  COMPETE  │
       └─────┬─────┘
             ↓
        ┌─────────┐
        │  LEAD   │
        └────┬────┘
             ↓
        ┌─────────┐
        │  GROW   │
        └─────────┘
```

---

## 🤝 Contributing

This website represents a student community, so contributions are welcome when they improve the experience or accurately represent the club.

Before contributing:

1. Create a branch for your change.
2. Keep club information factual and verified.
3. Follow the existing component/data structure.
4. Test the application locally.
5. Run the production build.
6. Open a pull request with a clear description.

Example:

```bash
git checkout -b feature/update-events

npm install
npm run dev
npm run build

git add .
git commit -m "Update club events"
git push origin feature/update-events
```

---

## 🧭 Roadmap

Potential future improvements include:

- [ ] More real event photography
- [ ] Complete leadership/team profiles
- [ ] More student spotlights
- [ ] Expanded technical resources
- [ ] Daily coding challenge dataset
- [ ] Interactive skill explorer
- [ ] Improved event discovery
- [ ] More achievement history
- [ ] Additional accessibility improvements
- [ ] Performance and SEO refinements

---

## 📜 License

This project is maintained for the **NIET Coding Cadets community**.

Unless explicitly stated otherwise, club branding, photographs and official content should not be reused without appropriate permission.

---

<div align="center">

### **NIET CODING CADETS**

**Ctrl + C(ode) | Ctrl + V(ictory)**

_Where the tech community at NIET happens._

</div>

---

## 👨‍💻 Developer

**Tanmay Awasthi**  
Developer & Maintainer — NIET Coding Cadets Website

Designed and developed the official website for **NIET Coding Cadets**, showcasing the club's events, competitions, workshops, achievements, community activities, and student opportunities.

<p>
  <a href="https://github.com/Tanmay0405">
    <img src="https://img.shields.io/badge/GitHub-Tanmay%20Awasthi-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
  <a href="https://www.linkedin.com/in/tanmay-awasthi-programmer4/">
    <img src="https://img.shields.io/badge/LinkedIn-Tanmay%20Awasthi-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn">
  </a>
</p>

> Built with passion for technology, clean design, and the NIET Coding Cadets community.

---
