import { useInView } from 'react-intersection-observer'
import StatCounter from '../shared/StatCounter'

const STATS = [
  { end: 1200, suffix: '+', label: 'Retail Stores', sublabel: 'Across 5 distinct zones' },
  { end: 100, suffix: 'M+', label: 'Annual Visitors', sublabel: 'More than any mall on earth' },
  { end: 502000, suffix: ' sqm', label: 'Gross Leasable Area', sublabel: 'The world\'s largest' },
  { end: 200, suffix: '+', label: 'Dining Concepts', sublabel: 'From casual to Michelin-adjacent' },
  { end: 30, suffix: '+', label: 'Entertainment Venues', sublabel: 'Aquarium, Ice rink & beyond' },
]

const ZONES = [
  { name: 'Fashion Avenue', desc: 'The luxury corridor. Home to every major house.' },
  { name: 'Gold Souk Extension', desc: 'Heritage meets contemporary jewellery.' },
  { name: 'The Waterfront', desc: 'Dining overlooking the Dubai Fountain.' },
  { name: 'Galeries Lafayette', desc: 'Parisian department store flagship.' },
  { name: 'Grand Atrium', desc: 'Events, activations, and brand theatre.' },
]

export default function Property() {
  const { ref: headRef, inView: headInView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="property" className="section-full relative overflow-hidden" style={{ background: '#0D0D0D' }}>

      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none" style={{
        background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)',
        transform: 'translate(30%, -30%)',
      }} />

      <div className="flex flex-col lg:flex-row h-full min-h-screen">

        {/* Left — text column */}
        <div className="flex flex-col justify-center px-10 md:px-16 lg:px-20 pt-24 pb-12 lg:w-5/12 lg:pt-0">
          <div ref={headRef}>
            <span
              className="label-text block mb-6"
              style={{ opacity: headInView ? 1 : 0, transition: 'opacity 0.6s ease 0.1s' }}
            >
              02 / The Property
            </span>
            <span className="gold-line-short block mb-8" style={{ opacity: headInView ? 1 : 0, transition: 'opacity 0.6s ease 0.2s' }} />

            <h2
              className="headline-lg mb-8"
              style={{
                opacity: headInView ? 1 : 0,
                transform: headInView ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease 0.3s',
              }}
            >
              Beyond scale.<br />
              <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>Beyond category.</em>
            </h2>

            <p
              className="body-text mb-10"
              style={{
                maxWidth: '380px',
                opacity: headInView ? 1 : 0,
                transition: 'opacity 0.8s ease 0.5s',
              }}
            >
              Adjacent to the Burj Khalifa in the heart of Downtown Dubai -  
              the world's most connected, visited, and coveted retail address. 
              Dubai Mall isn't a shopping centre. It's a city within a city.
            </p>

            {/* Zone list */}
            <div className="flex flex-col gap-3">
              {ZONES.map((zone, i) => (
                <div
                  key={zone.name}
                  className="flex gap-4 items-start py-3"
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    opacity: headInView ? 1 : 0,
                    transform: headInView ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.6s ease ${0.5 + i * 0.1}s`,
                  }}
                >
                  <span style={{ color: 'var(--color-gold)', fontSize: '0.7rem', marginTop: 2, fontWeight: 500 }}>0{i + 1}</span>
                  <div>
                    <p style={{ fontSize: '0.8rem', fontWeight: 500, color: 'white', marginBottom: 2 }}>{zone.name}</p>
                    <p className="body-text" style={{ fontSize: '0.75rem' }}>{zone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — stats + visual */}
        <div className="flex flex-col justify-center lg:w-7/12 px-10 lg:px-16 pb-12 lg:pb-0 lg:pt-0 pt-4">

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12 p-8 glass-card">
            {STATS.map((stat, i) => (
              <StatCounter key={i} {...stat} />
            ))}
          </div>

          {/* Image + caption */}
          <div style={{ border: '1px solid var(--color-border)', background: 'rgba(255,255,255,0.02)' }}>
            <div className="p-8 pb-0">
              <p className="label-text mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Property Overview · Downtown Dubai</p>
              <img
                src="/mall.webp"
                alt="Dubai Mall Exterior"
                className="w-full object-cover"
                style={{ height: 280, filter: 'grayscale(30%) contrast(1.1)', display: 'block' }}
              />
            </div>
            <div className="p-8 pt-6">
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 300, color: 'rgba(255,255,255,0.8)' }}>
                At the base of the Burj Khalifa. At the centre of the world.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />
    </section>
  )
}