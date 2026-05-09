import { useInView } from 'react-intersection-observer'

const ATTRACTIONS = [
  {
    name: 'Dubai Aquarium & Underwater Zoo',
    stat: '10M+ Visitors',
    hook: "One of the world's largest indoor aquariums. 33,000 aquatic animals. A destination within a destination.",
    tag: 'Flagship',
    detail: '48m tunnel · Walk-through experience · 10M visitors',
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
    color: 'rgba(20, 80, 120, 0.6)',
    url: 'https://www.thedubaiaquarium.com/',
  },
  {
    name: 'Dubai Ice Rink',
    stat: '3,000 sqm',
    hook: 'Olympic-sized. Year-round. The only ice rink in Dubai open to public skaters daily.',
    tag: 'Family',
    detail: 'Olympic standard · 2,000 seats · Year-round operation',
    img: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80',
    color: 'rgba(20, 40, 80, 0.6)',
    url: 'https://www.dubaiicerink.com/',
  },
  {
    name: 'VR Park Dubai',
    stat: '30+ Experiences',
    hook: "The Middle East's most immersive virtual reality theme park — Burj Drop, Batman VR, and beyond.",
    tag: 'Technology',
    detail: '2,500 sqm · 30+ VR experiences · DC Comics attractions',
    img: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&q=80',
    color: 'rgba(60, 20, 80, 0.6)',
    url: 'https://thedubaimall.com/en/entertain-detail/vr-park',
  },
  {
    name: 'KidZania Dubai',
    stat: '5,700 sqm',
    hook: 'A child-sized city where kids experience 80+ role-playing activities. The No.1 edutainment destination in the UAE.',
    tag: 'Edutainment',
    detail: '80+ role-play activities · Ages 2-16 · 5,700 sqm',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    color: 'rgba(80, 40, 20, 0.6)',
    url: 'https://dubai.kidzania.com/en-ae',
  },
]

const MARQUEE_ITEMS = [
  { label: 'KidZania', url: 'https://thedubaimall.com/en/entertain-detail/kidzania-1' },
  { label: 'AT THE TOP, Burj Khalifa', url: 'https://thedubaimall.com/en/entertain-detail/at-the-top-burj-khalifa-1' },
  { label: 'Dubai Aquarium', url: 'https://thedubaimall.com/en/entertain-detail/dubai-aquarium-umderwatep-zoo-1' },
  { label: 'Dubai Ice Rink', url: 'https://thedubaimall.com/en/entertain-detail/dubai-ice-rink-1' },
  { label: 'Reel Cinemas', url: 'https://thedubaimall.com/en/entertain-detail/reel-cinemas-1' },
  { label: 'Trampo Extreme', url: 'https://thedubaimall.com/en/entertain-detail/trampoextreme' },
  { label: 'Hysteria', url: 'https://thedubaimall.com/en/entertain-detail/hysteria' },
  { label: 'PlayDXB', url: 'https://thedubaimall.com/en/entertain-detail/vr-park' },
  { label: 'Soft Play', url: 'https://thedubaimall.com/en/entertain-detail/njoi' },
  { label: 'Sky Views Observatory', url: 'https://thedubaimall.com/en/entertain-detail/sky-views-dubai' },
  { label: 'House of Hype', url: 'https://thedubaimall.com/en/entertain-detail/house-of-hype' },
  { label: 'Boo Boo Laand', url: 'https://thedubaimall.com/en/entertain-detail/boo-boo-laand' },
  { label: 'ARTE Museum Dubai', url: 'https://thedubaimall.com/en/entertain-detail/arte-museum-dubai' },
  { label: 'Dubai Fountain', url: 'https://thedubaimall.com/en/entertain-detail/dubai-fountain' },
]

export default function Entertainment() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="entertainment" className="section-full relative overflow-hidden" style={{ background: '#0A0A0A' }} ref={ref}>

      <div className="min-h-screen flex flex-col px-10 md:px-16 lg:px-20 pt-24 pb-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <span className="label-text block mb-4" style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease' }}>
              06 / Attractions & Entertainment
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
              More than shopping.<br />
              <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>A world unto itself.</em>
            </h2>
          </div>
          <p className="body-text" style={{ maxWidth: 300, opacity: inView ? 1 : 0, transition: 'opacity 0.8s ease 0.4s' }}>
            30+ entertainment attractions driving footfall, dwell time, and return visits
            beyond any retail competitor in the region.
          </p>
        </div>

        {/* Attraction cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.8s ease 0.3s' }}
        >
          {ATTRACTIONS.map((attr) => (
            <a
              key={attr.name}
              href={attr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden flex flex-col justify-end group"
              style={{
                minHeight: 280,
                border: '1px solid rgba(255,255,255,0.06)',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'flex',
              }}
            >
              <img
                src={attr.img}
                alt={attr.name}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  filter: 'grayscale(40%) brightness(0.5)',
                  transform: 'scale(1.05)',
                  transition: 'transform 0.6s ease, filter 0.6s ease',
                }}
                onError={e => { e.target.style.display = 'none' }}
              />

              <div className="absolute inset-0" style={{ background: attr.color, mixBlendMode: 'multiply' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 50%, transparent 100%)' }} />

              {/* Tag */}
              <div className="absolute top-5 left-5">
                <span style={{
                  fontSize: '0.55rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  fontWeight: 500,
                  padding: '3px 10px',
                  border: '1px solid rgba(201,168,76,0.4)',
                  background: 'rgba(10,10,10,0.5)',
                }}>
                  {attr.tag}
                </span>
              </div>

              {/* Stat + arrow */}
              <div className="absolute top-5 right-5 flex flex-col items-end gap-2">
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 300, color: 'rgba(255,255,255,0.7)' }}>
                  {attr.stat}
                </span>
                <svg
                  width="12" height="12" viewBox="0 0 12 12" fill="none"
                  className="opacity-0 group-hover:opacity-100"
                  style={{ transition: 'opacity 0.3s ease' }}
                >
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="rgba(201,168,76,0.7)" strokeWidth="1.2" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 400,
                  color: 'white',
                  marginBottom: 8,
                  lineHeight: 1.2,
                }}>
                  {attr.name}
                </h3>
                <p className="body-text" style={{ fontSize: '0.78rem', marginBottom: 12 }}>{attr.hook}</p>
                <span className="label-text" style={{ color: 'rgba(201,168,76,0.6)', fontSize: '0.58rem' }}>{attr.detail}</span>
              </div>

              {/* Hover line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{
                  background: 'var(--color-gold)',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.4s ease',
                }}
                ref={el => {
                  if (!el) return
                  const parent = el.parentElement
                  parent.addEventListener('mouseenter', () => { el.style.transform = 'scaleX(1)' })
                  parent.addEventListener('mouseleave', () => { el.style.transform = 'scaleX(0)' })
                }}
              />
            </a>
          ))}
        </div>

        {/* Marquee strip */}
        <div
          className="mt-10 overflow-hidden py-4"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.8s ease 0.7s',
          }}
        >
          <div className="marquee-track">
            {[...Array(3)].map((_, i) =>
              MARQUEE_ITEMS.map(item => (
                <a
                  key={`${item.label}-${i}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-text mx-8"
                  style={{
                    color: 'rgba(201,168,76,0.3)',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    cursor: 'pointer',
                    display: 'inline-block',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'rgba(201,168,76,0.8)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(201,168,76,0.3)'}
                >
                  {item.label} <span style={{ color: 'rgba(255,255,255,0.1)', margin: '0 8px' }}>·</span>
                </a>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />
    </section>
  )
}