import { useInView } from 'react-intersection-observer'

const DINING_ZONES = [
  { name: 'The Waterfront Promenade', desc: 'Al fresco dining with direct views of the Dubai Fountain. The most photographed dining address in the Middle East.', cuisine: 'International · Waterfront', tag: 'Signature Destination' },
  { name: 'Food Court', desc: 'A global street-food journey - Japanese, Indian, Levantine, American, and beyond - across 3 floors of curated casual dining.', cuisine: 'Global Street Food', tag: 'Volume & Footfall' },
  { name: 'Galeries Lafayette Food Hall', desc: 'Parisian-inspired gourmet grocery, fine dining, and artisan concepts under one vaulted roof.', cuisine: 'Gourmet · Artisan', tag: 'Premium Experience' },
  { name: 'Restaurant Village', desc: 'Dubai\'s most anticipated dining precinct - independent concepts, chef-driven restaurants, and lifestyle dining in an architecturally distinct setting.', cuisine: 'Chef-Driven · Lifestyle', tag: 'New Opening 2024' },
]

const DINING_STATS = [
  { value: '200+', label: 'Dining Concepts' },
  { value: '5', label: 'Distinct Zones' },
  { value: '40M+', label: 'F&B Covers/Year' },
]

export default function Dining() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="dining" className="section-full relative overflow-hidden" style={{ background: '#0C0B09' }} ref={ref}>

      {/* Warm tone background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.06) 0%, transparent 50%)',
      }} />

      <div className="min-h-screen flex flex-col px-10 md:px-16 lg:px-20 pt-24 pb-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
          <div>
            <span className="label-text block mb-4" style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease' }}>
              05 / Dining & Lifestyle
            </span>
            <span className="gold-line-short block mb-6" style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.5s ease 0.1s' }} />
            <h2
              className="headline-lg"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease 0.2s',
              }}
            >
              Where the meal<br />
              <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>becomes the memory.</em>
            </h2>
          </div>

          {/* Stats */}
          <div
            className="flex gap-8"
            style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.8s ease 0.4s' }}
          >
            {DINING_STATS.map(stat => (
              <div key={stat.label} className="text-right">
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 300, color: 'var(--color-gold)', lineHeight: 1 }}>
                  {stat.value}
                </p>
                <p className="label-text" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.58rem', marginTop: 4 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature image + text */}
        <div
          className="relative mb-12 overflow-hidden"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.8s ease 0.3s',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
            alt="Dubai Mall Dining"
            className="w-full object-cover"
            style={{ height: 280, filter: 'brightness(0.6) contrast(1.1)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(12,11,9,0.9) 0%, rgba(12,11,9,0.2) 50%, transparent 100%)' }} />
          <div className="absolute inset-0 flex flex-col justify-center px-10">
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', fontWeight: 300, maxWidth: 420, lineHeight: 1.3 }}>
              The Waterfront Promenade;       
              <em style={{ color: 'var(--color-gold)' }}> dining with the fountain as your backdrop.</em>
            </p>
          </div>
        </div>

        {/* Dining zone cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.04)',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.8s ease 0.5s',
          }}
        >
          {DINING_ZONES.map((zone, i) => (
            <div
              key={zone.name}
              className="flex flex-col gap-4 p-6"
              style={{
                background: '#0C0B09',
                transition: 'background 0.3s ease',
                animationDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#0C0B09' }}
            >
              <div className="flex items-start justify-between gap-2">
                <span style={{
                  fontSize: '0.55rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  fontWeight: 500,
                  padding: '3px 8px',
                  border: '1px solid rgba(201,168,76,0.3)',
                }}>
                  {zone.tag}
                </span>
                <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', fontWeight: 300 }}>0{i + 1}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 400, color: 'white', lineHeight: 1.2 }}>
                {zone.name}
              </h3>
              <p className="body-text" style={{ fontSize: '0.78rem', flex: 1 }}>{zone.desc}</p>
              <span className="label-text" style={{ color: 'rgba(201,168,76,0.5)', fontSize: '0.58rem' }}>{zone.cuisine}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="flex items-center justify-between mt-10 pt-8"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.8s ease 0.7s',
          }}
        >
          <p className="body-text text-sm">F&B leasing · pop-up opportunities · seasonal activations</p>
          <button
            className="btn-gold"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Enquire About F&B Leasing →
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />
    </section>
  )
}
