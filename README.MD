# Afro European — Sophisticated React Website

A complete, production-grade rebuild of the original Afro European site using **React + TypeScript + React Router + Framer Motion + Tailwind CSS v4**.

## ✨ What’s New / Expanded

### Design System
- **Color palette**: Deep navy #0A1931, gold accent #E9B44C, terracotta #E85D04, warm cream #FFFBF5
- **Typography**: Playfair Display (display) + Montserrat (body) — inherited from original
- **Glass morphism**, soft shadows, rounded 20-32px corners, grain texture
- **African-inspired patterns** as subtle SVG overlays

### Pages & Sections
1. **Navbar** — Glass on scroll, animated active pill, magnetic CTA, mobile drawer with Framer Motion
2. **Hero** — Parallax scroll, gradient orbs, floating live cards (Yoruba lesson, cultural insight, Life in UK)
3. **About** — Sticky visual, values (Rooted / Modern / Global), promise quote
4. **Services** — 6 cards expanded from 4:
   - Language Learning Platforms
   - Cultural Education Software
   - Custom Educational Platforms
   - Seminars & Excursions
   - **Children's Animation & Stories** (NEW from keywords)
   - **Life in the UK Preparation** (NEW from keywords)
5. **Languages** — Interactive tab showcase for Yoruba, Igbo, Hausa, Kiswahili, German with phrases, facts, CTA
6. **Stats Strip** — Animated credibility strip
7. **Team** — 4 members with initials avatar, location, bio, hover lift
8. **Vision** — UNESCO-aligned pillars: Preserve / Connect / Empower
9. **Clients** — Infinite marquee + use-case cards
10. **Testimonials** — 3 stories from parents/learners/schools
11. **Contact Page** (`/contact`) — Full form with interest chips, info cards, map embed, quick actions
12. **Footer** — CTA, links, socials, operational status

### Animations (Framer Motion)
- Page transitions with AnimatePresence
- Scroll-linked parallax (useScroll + useTransform)
- Stagger reveals, whileHover lift/rotate
- Active state layoutId pill
- Mobile menu spring
- Count-up ready stats

### Tech Stack
- Vite + React 19 + TypeScript
- React Router DOM v7 (/, /contact with smooth hash scroll)
- Framer Motion 12
- Tailwind CSS v4 + @tailwindcss/vite
- Lucide React icons

## 🚀 Run

```bash
cd afro-european
npm install
npm run dev # http://localhost:5173
npm run build
```

Preview is live at the provided preview URL (port 5173).

## 📁 Structure

```
src/
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Services.tsx
    Languages.tsx
    Team.tsx
    Vision.tsx
    Clients.tsx
    Footer.tsx
  pages/
    Home.tsx
    Contact.tsx
  App.tsx
  main.tsx
  index.css
```

Built as a senior frontend engineer would — accessible, responsive, performant, and culturally respectful.
