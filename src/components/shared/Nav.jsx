import { useState } from 'react'

const NAV_LABELS = {
  hero: 'Home',
  property: 'Property',
  retail: 'Retail',
  luxury: 'Luxury',
  dining: 'Dining',
  entertainment: 'Entertainment',
  events: 'Events',
  contact: 'Contact',
}

export default function Nav({ activeSection, sections }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      {/* Desktop Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-10 py-5"
        style={{
          background: '#0A0A0A',
          borderBottom: '1px solid rgba(201,168,76,0.1)',
        }}
      >
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} className="flex flex-col gap-0.5 group">
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 300, color: 'white', letterSpacing: '0.1em' }}>
            DUBAI MALL
          </span>
          <span className="gold-line-short" style={{ width: '100%', transition: 'opacity 0.3s' }} />
        </button>

        {/* Section links */}
        <ul className="flex items-center gap-8">
          {sections.filter(s => s !== 'hero').map(section => (
            <li key={section}>
              <button
                onClick={() => scrollTo(section)}
                className="label-text transition-all duration-300 relative group"
                style={{
                  color: activeSection === section ? 'var(--color-gold)' : 'rgba(255,255,255,0.45)',
                }}
              >
                {NAV_LABELS[section]}
                {activeSection === section && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-gold" style={{ background: 'var(--color-gold)' }} />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollTo('contact')}
          className="btn-gold text-xs"
          style={{ padding: '10px 24px' }}
        >
          Get in Touch
        </button>
      </nav>

      {/* Mobile Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 md:hidden flex items-center justify-between px-6 py-4"
        style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(201,168,76,0.1)' }}
      >
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 300, letterSpacing: '0.1em' }}>
          DUBAI MALL
        </span>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="flex flex-col gap-1.5 p-2" aria-label="Menu">
          <span className="block h-px w-6 transition-all duration-300"
            style={{ background: mobileOpen ? 'var(--color-gold)' : 'white', transform: mobileOpen ? 'rotate(45deg) translateY(6px)' : 'none' }} />
          <span className="block h-px w-4 transition-all duration-300"
            style={{ background: mobileOpen ? 'transparent' : 'white', opacity: mobileOpen ? 0 : 1 }} />
          <span className="block h-px w-6 transition-all duration-300"
            style={{ background: mobileOpen ? 'var(--color-gold)' : 'white', transform: mobileOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col justify-center items-center gap-8"
          style={{ background: 'rgba(10,10,10,0.98)' }}>
          {sections.map(section => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 300,
                color: activeSection === section ? 'var(--color-gold)' : 'rgba(255,255,255,0.7)',
                letterSpacing: '0.05em',
              }}
            >
              {NAV_LABELS[section]}
            </button>
          ))}
        </div>
      )}
    </>
  )
}