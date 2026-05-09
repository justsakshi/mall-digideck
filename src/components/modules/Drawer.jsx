import { useEffect } from 'react'

const MODULE_CONTENT = {
  events: {
    title: 'Events Module',
    subtitle: 'Book a Venue',
    desc: 'Access Dubai Mall\'s full suite of event spaces — from the iconic Grand Atrium to intimate pop-up zones. Our events team will guide you through the process.',
    features: [
      'Grand Atrium — up to 5,000 capacity',
      'Fashion Avenue Walkway — brand activations',
      'Waterfront Terrace — outdoor events',
      'Dubai Ice Rink — private hire',
      'Custom build-out available',
    ],
    cta: 'Request a Venue Tour',
  },
  sponsorship: {
    title: 'Sponsorship Module',
    subtitle: 'Become a Partner',
    desc: 'Partner with Dubai Mall and reach 100M+ visitors annually. Our sponsorship packages span digital, physical, and experiential touchpoints across the entire property.',
    features: [
      'Digital screens across 5.9M sqm',
      'Fountain show sponsorship',
      'Seasonal campaign integration',
      'Exclusive pop-up zones',
      'Co-branded events & activations',
    ],
    cta: 'Request a Partnership Deck',
  },
  leasing: {
    title: 'Leasing Module',
    subtitle: 'Lease a Space',
    desc: 'From flagship units on Fashion Avenue to pop-up kiosks in high-footfall zones — explore leasing opportunities tailored to your brand\'s ambitions.',
    features: [
      'Fashion Avenue — luxury flagships',
      'Ground floor — high footfall units',
      'Pop-up kiosks — flexible terms',
      'F&B — Waterfront & Restaurant Village',
      'Anchor tenancy — negotiated terms',
    ],
    cta: 'Request a Leasing Pack',
  },
  venue: {
    title: 'Venue Module',
    subtitle: 'Book a Venue',
    desc: 'Dubai Mall hosts some of the world\'s most prestigious events. Our dedicated venue team can build a bespoke proposal within 48 hours.',
    features: [
      '10,000+ sqm of event space',
      'Indoor & outdoor options',
      'A/V and production support',
      'Catering partnerships available',
      'VIP and press access routes',
    ],
    cta: 'Start Your Venue Enquiry',
  },
}

export default function Drawer({ type, onClose }) {
  const content = MODULE_CONTENT[type]

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!content) return null

  return (
    <>
      {/* Overlay */}
      <div className="drawer-overlay" onClick={onClose} />

      {/* Panel */}
      <div className="drawer-panel" style={{ animation: 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
        <style>{`
          @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `}</style>

        {/* Header */}
        <div className="flex items-start justify-between p-8" style={{ borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
          <div>
            <span className="label-text block mb-2">{content.subtitle}</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 300, color: 'white' }}>
              {content.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center"
            style={{
              width: 36,
              height: 36,
              border: '1px solid rgba(201,168,76,0.3)',
              color: 'var(--color-gold)',
              fontSize: '1rem',
              background: 'transparent',
              cursor: 'pointer',
              flexShrink: 0,
            }}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col gap-8">
          {/* Coming soon badge */}
          <div style={{
            padding: '6px 14px',
            background: 'rgba(201,168,76,0.08)',
            border: '1px solid rgba(201,168,76,0.25)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            width: 'fit-content',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-gold)', display: 'inline-block' }} />
            <span className="label-text" style={{ fontSize: '0.58rem' }}>Module Preview — Full Launch Q3 2025</span>
          </div>

          <p className="body-text" style={{ lineHeight: 1.8 }}>{content.desc}</p>

          {/* Features list */}
          <div className="flex flex-col gap-0" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {content.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-4 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <span style={{ color: 'var(--color-gold)', fontSize: '0.6rem' }}>—</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 300, color: 'rgba(255,255,255,0.7)' }}>{feat}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            className="btn-gold w-full justify-center"
            onClick={() => {
              onClose()
              setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300)
            }}
          >
            {content.cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          </button>

          {/* Small print */}
          <p className="body-text" style={{ fontSize: '0.72rem', textAlign: 'center', opacity: 0.5 }}>
            Full interactive module available upon request. <br />Response within 48 hours.
          </p>
        </div>
      </div>
    </>
  )
}
