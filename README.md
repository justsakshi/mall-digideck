# Dubai Mall — Digital Deck

A luxury-grade interactive digital pitch deck for Dubai Mall, built as a single-page React application. Non-linear navigation, video-first storytelling, and a clean UI inspired by the world's top luxury brands.

**Live Demo: [dubai-mall-eight.vercel.app](https://dubai-mall-eight.vercel.app)**

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS + inline styles |
| Animations | CSS transitions, react-intersection-observer |
| Fonts | Cormorant Garamond (display), system sans (body) |
| Video | Native HTML5 `<video>` with autoplay |
| Deployment | Vercel |

---

## Setup

```bash
# Clone the repo
git clone https://github.com/justsakshi/mall-digideck.git
cd mall-digideck

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

### Asset Setup

Place the following files in the `/public` folder before running:

- `mall.mp4` — hero video (autoplays on load)
- `mall.webp` — property section image

These are not included in the repository due to file size.

---

## Structure

```
src/
  components/
    layout/
      Nav.jsx           # Fixed navigation with active section tracking
    sections/
      Hero.jsx          # Video + headline, two-column layout
      Property.jsx      # Stats, zone list, property image
      Retail.jsx        # Filterable brand grid
      Luxury.jsx        # Luxury tier showcase
      Dining.jsx        # Dining concepts
      Entertainment.jsx # Attraction cards + marquee strip
      Events.jsx        # Events and venue section
      Contact.jsx       # Enquiry form with track selector
    shared/
      StatCounter.jsx   # Animated number counter
```

---

## AI Tools Used

- **Claude (Anthropic)** — component architecture, copy refinement, and code generation
- **Unsplash** — placeholder photography for entertainment attraction cards
- **Midjourney** *(recommended for production)* — generative renderings for property and luxury sections where real assets are unavailable

---

## Design Inspiration

The visual language draws from three references:

- **Apple** — restraint, whitespace, typographic precision
- **Hermes** — quiet luxury, gold as accent not decoration
- **Tesla** — dark UI, video-first, data presented with confidence

Typography anchors the identity. Cormorant Garamond at large display sizes creates an editorial, couture-adjacent feel that positions Dubai Mall as a destination brand rather than a retail directory.

---

## Features

- Non-linear navigation, jump to any section instantly
- Scroll-triggered animations via Intersection Observer
- Autoplay background video (muted, looped)
- Filterable retail brand grid
- Clickable entertainment cards linking to live attraction pages
- Animated stat counters
- Contact form with interest track selector
- Fully responsive on desktop, tablet, and mobile

---

## Deployment

Deployed on Vercel. To deploy your own instance:

```bash
npm run build
# Drag the /dist folder to vercel.com, or connect your GitHub repo directly
```

Or via Vercel CLI:

```bash
npm i -g vercel
vercel
```

---

*Built for the Emaar / Dubai Mall digital pitch brief.*
