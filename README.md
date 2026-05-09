# Dubai Mall — Interactive Sales Deck

A cinematic, luxury-grade browser-based sales deck for Dubai Mall. Built as a Digideck-style single-page interactive pitch for prospective retail tenants, sponsors, and event partners.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 + Custom CSS (globals.css) |
| Animation | CSS transitions + Intersection Observer API |
| Fonts | Cormorant Garamond (serif/display) + DM Sans (body) |
| Deployment | Vercel |

> Note: Framer Motion was intentionally avoided in favour of native CSS transitions and the Intersection Observer API for performance and bundle size. The same visual quality is achieved without the overhead.

---

## Setup

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/dubai-mall-deck.git
cd dubai-mall-deck

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

---

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect repo to vercel.com dashboard for auto-deploys
```

No environment variables required. The project is entirely client-side.

---

## Project Structure

```
src/
├── components/
│   ├── sections/          # One component per section
│   │   ├── Hero.jsx
│   │   ├── Property.jsx
│   │   ├── Retail.jsx
│   │   ├── Luxury.jsx
│   │   ├── Dining.jsx
│   │   ├── Entertainment.jsx
│   │   ├── Events.jsx
│   │   └── Contact.jsx
│   ├── modules/           # Phase 2 sub-modules (drawer panels)
│   │   ├── Drawer.jsx          ← Currently active (preview drawer)
│   │   ├── EventsModule.jsx    ← Phase 2 placeholder
│   │   ├── SponsorshipModule.jsx
│   │   ├── LeasingModule.jsx
│   │   └── VenueModule.jsx
│   └── shared/            # Reusable components
│       ├── Nav.jsx
│       ├── CustomCursor.jsx
│       ├── StatCounter.jsx
│       ├── SectionWrapper.jsx
│       └── CTAButton.jsx
├── styles/
│   └── globals.css        # CSS variables, base styles, utilities
├── App.jsx
└── main.jsx
```

---

## Section Map

| # | Section | ID | Key Feature |
|---|---|---|---|
| 1 | Hero | `#hero` | YouTube video background, animated headline |
| 2 | Property | `#property` | Animated stat counters, zone layout |
| 3 | Retail | `#retail` | Brand grid, category filter pills |
| 4 | Luxury | `#luxury` | House roster, editorial typography |
| 5 | Dining | `#dining` | Zone cards, Waterfront feature |
| 6 | Entertainment | `#entertainment` | Attraction cards, marquee strip |
| 7 | Events | `#events` | Module cards + drawer pattern |
| 8 | Contact | `#contact` | Track selector + contact form |

---

## Design Decisions

### Aesthetic Direction
The moodboard reference (editorial luxury photography, dark editorial interiors, Burj Khalifa at night, Prada-branded elements) informed a **quiet luxury** approach:
- Near-black backgrounds (`#0A0A0A`, `#080808`) with warm tonal variation per section
- Gold accent (`#C9A84C`) used sparingly — never decorative, always purposeful
- `Cormorant Garamond` for display text: high contrast, old-world serif with modern weight
- No borders unless they mean something. No shadows unless they give depth.

### Navigation
- Fixed top nav on desktop, hamburger on mobile
- Active section detected via `IntersectionObserver` (threshold: 0.4)
- Non-linear: any section accessible at any time

### Performance
- Images load from Unsplash CDN with size params
- YouTube embed for hero video (iframe with autoplay/mute/loop params)
- No unnecessary dependencies — no Framer Motion, no icon libraries beyond inline SVG

### Phase 2 Architecture
The `modules/` folder establishes the drawer pattern. `Drawer.jsx` is the active shell — each `*Module.jsx` file is a stub ready to be developed into a full interactive sub-page. The pattern: card click → `setActiveDrawer(id)` → `Drawer` renders with that module's content.

---

## AI Tools Used

- **Claude (Anthropic)** — Full codebase generation, component architecture, copy writing
- **Aesthetic reference**: Client-provided moodboard (editorial luxury, dark interiors)
- **Images**: Unsplash CDN (production build should replace with licensed assets from thedubaimall.com)

---

## Next Steps (Phase 2)

- [ ] Replace Unsplash images with licensed Dubai Mall press assets
- [ ] Build out `EventsModule.jsx` with venue configurator
- [ ] Build out `LeasingModule.jsx` with interactive map
- [ ] Build out `SponsorshipModule.jsx` with tier calculator
- [ ] Connect contact form to a real backend (Resend, Formspree, or CRM webhook)
- [ ] Add analytics (Plausible or GA4)
- [ ] Add OG meta tags for social sharing
