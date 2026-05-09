import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Drawer from '../modules/Drawer'

const EVENT_MODULES = [
  {
    id: 'events',
    title: 'Book a Venue',
    subtitle: 'Events & Activations',
    desc: 'From intimate brand launches to 5,000-person spectacles — Dubai Mall\'s event infrastructure is unmatched in the region.',
    icon: '◈',
  },
  {
    id: 'sponsorship',
    title: 'Become a Partner',
    subtitle: 'Sponsorship & Brand',
    desc: 'Sponsor the world\'s most visited mall. 100M impressions per year. Unrivalled physical and digital reach across every touchpoint.',
    icon: '◇',
  },
  {
    id: 'leasing',
    title: 'Lease a Space',
    subtitle: 'Retail & F&B Leasing',
    desc: 'Secure your position in the world\'s most coveted retail address. Fashion Avenue to pop-up kiosks — flexible formats available.',
    icon: '◻',
  },
]

const PAST_EVENTS = [
  'Mercedes-Benz Launch', 'Chanel Cruise', 'Dubai Fashion Week',
  'Louis Vuitton Activation', 'Apple iPhone Launch', 'Prada Pop-Up',
  'NYE Countdown', 'Global F1 Afterparty', 'Nike Air Max Day',
]

const SPECS = [
  { label: 'Max Capacity', value: '5,000' },
  { label: 'Event Sq Footage', value: '10,000+ sqm' },
  { label: 'Indoor Options', value: '12 Venues' },
  { label: 'Outdoor Spaces', value: '4 Terraces' },
]

export default function Events() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  const [activeDrawer, setActiveDrawer] = useState(null)

  return (
    <section id="events" className="section-full relative overflow-hidden" style={{ background: '#0D0C0A' }} ref={ref}>

      {activeDrawer && <Drawer type={activeDrawer} onClose={() => setActiveDrawer(null)} />}

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 60%)',
      }} />

      <div className="min-h-screen flex flex-col px-10 md:px-16 lg:px-20 pt-24 pb-16">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="label-text block mb-4" style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease' }}>
            07 / Events & Platform
          </span>
          <span className="gold-line block mb-8 mx-auto" style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.5s ease 0.1s', maxWidth: 120 }} />
          <h2
            className="headline-lg mb-6"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease 0.2s',
            }}
          >
            Not just a building.<br />
            <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>A global stage.</em>
          </h2>
          <p
            className="body-text mx-auto"
            style={{
              maxWidth: 480,
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.8s ease 0.4s',
            }}
          >
            Brands and partners choose Dubai Mall for the moment it creates. 
            Fashion weeks. Celebrity appearances. Product launches. Record-breaking activations.
          </p>
        </div>

        {/* Specs strip */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-12"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.06)',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.8s ease 0.4s',
          }}
        >
          {SPECS.map(spec => (
            <div key={spec.label} className="flex flex-col gap-2 p-6" style={{ background: '#0D0C0A' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 300, color: 'var(--color-gold)' }}>
                {spec.value}
              </span>
              <span className="label-text" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.58rem' }}>{spec.label}</span>
            </div>
          ))}
        </div>

        {/* Past events marquee */}
        <div
          className="overflow-hidden mb-12 py-4"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.04)',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.8s ease 0.5s',
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="gold-line-short" />
            <span className="label-text" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.58rem' }}>Selected Past Events</span>
          </div>
          <div className="marquee-track">
            {[...Array(4)].map((_, ri) =>
              PAST_EVENTS.map(ev => (
                <span key={`${ev}-${ri}`} style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 300, color: 'rgba(255,255,255,0.25)', whiteSpace: 'nowrap', margin: '0 28px' }}>
                  {ev}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Module cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.8s ease 0.6s',
          }}
        >
          {EVENT_MODULES.map((mod, i) => (
            <button
              key={mod.id}
              className="flex flex-col gap-5 p-8 text-left group"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(201,168,76,0.15)',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                animationDelay: `${i * 0.1}s`,
              }}
              onClick={() => setActiveDrawer(mod.id)}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(201,168,76,0.06)'
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'
              }}
            >
              <div className="flex items-start justify-between">
                <span style={{ fontSize: '1.4rem', color: 'var(--color-gold)', opacity: 0.7 }}>{mod.icon}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.3, transition: 'opacity 0.3s ease' }}
                  ref={el => {
                    if (!el) return
                    const parent = el.closest('button')
                    parent?.addEventListener('mouseenter', () => { el.style.opacity = '0.8' })
                    parent?.addEventListener('mouseleave', () => { el.style.opacity = '0.3' })
                  }}
                >
                  <path d="M1 8h14M8 1l7 7-7 7" stroke="var(--color-gold)" strokeWidth="1.2"/>
                </svg>
              </div>
              <span className="label-text" style={{ color: 'rgba(201,168,76,0.5)', fontSize: '0.58rem' }}>{mod.subtitle}</span>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 400,
                color: 'white',
                lineHeight: 1.1,
              }}>
                {mod.title}
              </h3>
              <p className="body-text" style={{ fontSize: '0.78rem', flex: 1 }}>{mod.desc}</p>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--color-gold)', textTransform: 'uppercase', fontWeight: 500 }}>
                Open Module →
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />
    </section>
  )
}
