import { useEffect, useState } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const scrollDown = () => {
    document.getElementById('property')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ background: '#0A0A0A', minHeight: '100vh' }}
    >
      {/* Grain */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        opacity: 0.5,
      }} />

      {/* Two-column layout */}
      <div
        className="relative z-20 flex flex-col md:flex-row items-stretch"
        style={{ minHeight: '100vh' }}
      >
        {/* LEFT — Content */}
        <div
          className="flex flex-col justify-center w-full md:w-1/2 px-10 md:px-16 lg:px-24"
          style={{ paddingTop: '100px', paddingBottom: '80px' }}
        >
          {/* Eyebrow */}
          <div
            className="flex items-center gap-4 mb-6"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease 0.2s',
            }}
          >
            <span className="gold-line-short" />
            <span className="label-text">Downtown Dubai · Est. 2008</span>
          </div>

          {/* Main Headline */}
          <h1
            className="headline-xl mb-5"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.9s ease 0.4s',
              fontSize: 'clamp(2.8rem, 5vw, 5rem)',
              lineHeight: 1.1,
            }}
          >
            The World's Most
            <br />
            <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>Visited</em>
            <br />
            Destination.
          </h1>

          {/* Subtext */}
          <p
            className="body-text mb-10"
            style={{
              fontSize: '1rem',
              maxWidth: '380px',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease 0.65s',
              letterSpacing: '0.02em',
            }}
          >
            1.2 Billion Square Feet. 100 Million Visitors. One Address.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 mb-12"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease 0.85s',
            }}
          >
            <button className="btn-gold" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
            </button>
            <button
              className="btn-gold"
              onClick={() => document.getElementById('property')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}
            >
              Explore the Property
            </button>
          </div>

          {/* Stats row */}
          <div
            className="flex gap-10 pt-8"
            style={{
              borderTop: '1px solid rgba(201,168,76,0.15)',
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.8s ease 1.1s',
            }}
          >
            {[
              { value: '100M+', label: 'Annual Visitors' },
              { value: '1,200+', label: 'Retail Stores' },
              { value: '#1', label: 'Most Visited Mall' },
            ].map(stat => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 300, color: 'var(--color-gold)' }}>
                  {stat.value}
                </span>
                <span className="label-text" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.58rem' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Video, full height column */}
        <div
          className="hidden md:flex w-1/2 items-center justify-center"
          style={{
            padding: '100px 60px 80px 20px',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 1s ease 0.6s',
          }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '560px',
            borderRadius: '4px',
            overflow: 'hidden',
            border: '1px solid rgba(201,168,76,0.2)',
            boxShadow: '0 0 80px rgba(0,0,0,0.6)',
            aspectRatio: '16/9',
          }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            >
              <source src="/mall.mp4" type="video/mp4" />
            </video>
            {/* Gold corner accents */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: 36, height: 36, borderTop: '1px solid rgba(201,168,76,0.6)', borderLeft: '1px solid rgba(201,168,76,0.6)', zIndex: 2 }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 36, height: 36, borderBottom: '1px solid rgba(201,168,76,0.6)', borderRight: '1px solid rgba(201,168,76,0.6)', zIndex: 2 }} />
          </div>
        </div>

        {/* Mobile — video below content */}
        <div
          className="flex md:hidden w-full px-6 pb-16"
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 1s ease 0.6s',
          }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            borderRadius: '4px',
            overflow: 'hidden',
            border: '1px solid rgba(201,168,76,0.2)',
            aspectRatio: '16/9',
          }}>
            <video
              autoPlay muted loop playsInline
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            >
              <source src="/mall.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 z-30 flex flex-col items-center gap-2"
        style={{ transform: 'translateX(-50%)' }}
        aria-label="Scroll down"
      >
        <span className="label-text" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.55rem' }}>Scroll</span>
        <svg width="1" height="40" viewBox="0 0 1 40" fill="none">
          <line x1="0.5" y1="0" x2="0.5" y2="40" stroke="var(--color-gold)" strokeOpacity="0.4"/>
        </svg>
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--color-gold)', opacity: 0.6 }} />
      </button>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 z-20" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />
    </section>
  )
}