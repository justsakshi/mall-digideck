import { useInView } from 'react-intersection-observer'

const HOUSES = [
  { name: 'Chanel', origin: 'Paris, 1910' },
  { name: 'Louis Vuitton', origin: 'Paris, 1854' },
  { name: 'Hermès', origin: 'Paris, 1837' },
  { name: 'Rolex', origin: 'Geneva, 1905' },
  { name: 'Cartier', origin: 'Paris, 1847' },
  { name: 'Gucci', origin: 'Florence, 1921' },
  { name: 'Dior', origin: 'Paris, 1946' },
  { name: 'Prada', origin: 'Milan, 1913' },
  { name: 'Valentino', origin: 'Rome, 1960' },
  { name: 'Bottega Veneta', origin: 'Vicenza, 1966' },
  { name: 'Bulgari', origin: 'Rome, 1884' },
  { name: 'Van Cleef & Arpels', origin: 'Paris, 1906' },
]

export default function Luxury() {
  const { ref: mainRef, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      id="luxury"
      className="section-full relative overflow-hidden"
      style={{ background: '#080808' }}
      ref={mainRef}
    >
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)',
      }} />

      {/* Vertical text (decorative) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 opacity-20 pointer-events-none">
        <div style={{ width: 1, height: 80, background: 'var(--color-gold)' }} />
        <span style={{
          writingMode: 'vertical-rl',
          fontFamily: 'var(--font-display)',
          fontSize: '0.7rem',
          letterSpacing: '0.3em',
          color: 'var(--color-gold)',
          transform: 'rotate(180deg)',
        }}>
          FASHION AVENUE
        </span>
        <div style={{ width: 1, height: 80, background: 'var(--color-gold)' }} />
      </div>

      <div className="min-h-screen flex flex-col justify-center px-10 md:px-16 lg:px-20 py-24">

        {/* Section label */}
        <span
          className="label-text block mb-8"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease' }}
        >
          04 / Luxury
        </span>

        {/* Central positioning line */}
        <div
          className="mb-16 max-w-3xl"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.9s ease 0.2s',
          }}
        >
          <h2 className="headline-lg mb-6">
            The only address<br />
            that matters in<br />
            <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>the Middle East.</em>
          </h2>
          <span className="gold-line-short block mb-6" />
          <p className="body-text" style={{ maxWidth: 420 }}>
            <b>FASHION AVENUE</b>, Dubai Mall's luxury destination, houses the world's most coveted 
            maisons within a single, immaculate corridor. 
            More than retail. A statement.
          </p>
        </div>

        {/* Houses grid — elegant list style */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            borderLeft: '1px solid rgba(255,255,255,0.06)',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.8s ease 0.5s',
          }}
        >
          {HOUSES.map((house, i) => (
            <div
              key={house.name}
              className="flex flex-col justify-between p-6 group"
              style={{
                borderRight: '1px solid rgba(255,255,255,0.06)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                transition: 'background 0.4s ease',
                animationDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
            >
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 400,
                letterSpacing: '0.06em',
                color: 'white',
                marginBottom: 8,
                transition: 'color 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-gold)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'white' }}
              >
                {house.name}
              </p>
              <span className="label-text" style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.55rem' }}>{house.origin}</span>
            </div>
          ))}

          {/* Closing teaser cell */}
          <div
            className="flex items-center justify-center p-6"
            style={{
              borderRight: '1px solid rgba(255,255,255,0.06)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(201,168,76,0.03)',
            }}
          >
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.9rem',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(201,168,76,0.5)',
              textAlign: 'center',
              lineHeight: 1.4,
            }}>
              + 100 more<br />luxury houses
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-12 gap-6"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.8s ease 0.8s',
          }}
        >
          <div>
            <p className="body-text text-sm">
              Fashion Avenue spans 2 floors · Dedicated valet · Private lounges · Personal shopping
            </p>
          </div>
          <button
            className="btn-gold"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Enquire About Luxury Leasing
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />
    </section>
  )
}
