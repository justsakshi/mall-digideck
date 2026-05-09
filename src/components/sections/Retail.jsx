import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const CATEGORIES = ['All', 'Luxury', 'Fashion', 'Electronics', 'Sports', 'Pop-Up']

const BRANDS = [
  { name: 'Apple', category: 'Electronics', tier: 'premium' },
  { name: 'Zara', category: 'Fashion', tier: 'mid' },
  { name: 'H&M', category: 'Fashion', tier: 'mid' },
  { name: 'Marks & Spencer', category: 'Fashion', tier: 'mid' },
  { name: 'Nike', category: 'Sports', tier: 'mid' },
  { name: 'Adidas', category: 'Sports', tier: 'mid' },
  { name: 'Samsung', category: 'Electronics', tier: 'premium' },
  { name: 'Chanel', category: 'Luxury', tier: 'luxury' },
  { name: 'Louis Vuitton', category: 'Luxury', tier: 'luxury' },
  { name: 'Gucci', category: 'Luxury', tier: 'luxury' },
  { name: 'Dior', category: 'Luxury', tier: 'luxury' },
  { name: 'Rolex', category: 'Luxury', tier: 'luxury' },
  { name: 'Cartier', category: 'Luxury', tier: 'luxury' },
  { name: 'Hermès', category: 'Luxury', tier: 'luxury' },
  { name: 'Prada', category: 'Luxury', tier: 'luxury' },
  { name: 'Burberry', category: 'Luxury', tier: 'luxury' },
  { name: 'Mango', category: 'Fashion', tier: 'mid' },
  { name: 'GAP', category: 'Fashion', tier: 'mid' },
  { name: 'Under Armour', category: 'Sports', tier: 'mid' },
  { name: 'Levi\'s', category: 'Fashion', tier: 'mid' },
  { name: 'Sephora', category: 'Luxury', tier: 'premium' },
  { name: 'IKEA', category: 'Pop-Up', tier: 'mid' },
  { name: 'Pottery Barn', category: 'Pop-Up', tier: 'premium' },
  { name: 'New Balance', category: 'Sports', tier: 'mid' },
]

const tierColor = {
  luxury: 'var(--color-gold)',
  premium: 'rgba(201,168,76,0.6)',
  mid: 'rgba(255,255,255,0.4)',
}

export default function Retail() {
  const [activeCategory, setActiveCategory] = useState('All')
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const filtered = activeCategory === 'All'
    ? BRANDS
    : BRANDS.filter(b => b.category === activeCategory)

  return (
    <section id="retail" className="section-full relative overflow-hidden" style={{ background: '#0A0A0A' }}>

      <div className="h-full min-h-screen flex flex-col px-10 md:px-16 lg:px-20 pt-24 pb-16" ref={ref}>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="label-text block mb-4" style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease' }}>
              03 / Retail
            </span>
            <span className="gold-line-short block mb-6" style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease 0.1s' }} />
            <h2
              className="headline-lg"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease 0.2s',
              }}
            >
              Every brand.<br />
              <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>Every category.</em>
            </h2>
          </div>
          <p
            className="body-text"
            style={{
              maxWidth: 320,
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.8s ease 0.4s',
            }}
          >
            Over 1,200 stores spanning every retail category; from the world's 
            most exclusive luxury houses to the fastest-growing global brands.
          </p>
        </div>

        {/* Category filter pills */}
        <div
          className="flex flex-wrap gap-3 mb-10"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease 0.5s' }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Brand grid */}
        <div
          className="grid gap-px flex-1"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.6s ease 0.6s',
          }}
        >
          {filtered.map((brand, i) => (
            <div
              key={brand.name}
              className="flex items-center justify-center"
              style={{
                padding: '20px 12px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.04)',
                transition: `all 0.25s ease ${i * 0.02}s`,
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(201,168,76,0.06)'
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
              }}
            >
              <span
                style={{
                  fontFamily: brand.tier === 'luxury' ? 'var(--font-display)' : 'var(--font-body)',
                  fontSize: brand.tier === 'luxury' ? '0.95rem' : '0.8rem',
                  fontWeight: brand.tier === 'luxury' ? 400 : 500,
                  letterSpacing: brand.tier === 'luxury' ? '0.1em' : '0.04em',
                  color: tierColor[brand.tier],
                  textAlign: 'center',
                }}
              >
                {brand.name}
              </span>
            </div>
          ))}
          
          {/* Leasing CTA cell */}
          <div
            className="flex items-center justify-center"
            style={{
              padding: '20px 12px',
              background: 'rgba(201,168,76,0.04)',
              border: '1px dashed rgba(201,168,76,0.3)',
              cursor: 'pointer',
              minHeight: 64,
            }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--color-gold)', textAlign: 'center', lineHeight: 1.5 }}>
              YOUR BRAND<br />HERE →
            </span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="flex items-center justify-between mt-10 pt-8"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.6s ease 0.8s',
          }}
        >
          <p className="body-text text-sm">
            Showing {filtered.length} of {BRANDS.length} featured tenants
          </p>
          <button
            className="btn-gold"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Leasing Opportunities
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />
    </section>
  )
}
