import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const TRACKS = [
  {
    id: 'lease',
    title: 'Lease a Space',
    desc: 'Secure your brand\'s place in the world\'s most visited retail destination.',
    details: 'Fashion Avenue · Ground Floor · Pop-Up · F&B',
    icon: '◻',
  },
  {
    id: 'partner',
    title: 'Partner With Us',
    desc: 'Reach 100 million visitors through sponsorship, activations, and digital integration.',
    details: 'Sponsorship · Media · Events · Co-Branding',
    icon: '◇',
  },
  {
    id: 'venue',
    title: 'Book a Venue',
    desc: 'Access 10,000+ sqm of world-class event space with full production support.',
    details: 'Grand Atrium · Waterfront · Ice Rink · Outdoor',
    icon: '◈',
  },
]

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: 'white',
  padding: '12px 16px',
  fontSize: '0.85rem',
  outline: 'none',
  appearance: 'none',
  WebkitAppearance: 'none',
  fontFamily: 'inherit',
}

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  const [activeTrack, setActiveTrack] = useState('lease')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', interest: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-full relative overflow-hidden" style={{ background: '#080808' }} ref={ref}>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.05) 0%, transparent 60%)',
      }} />

      <div className="min-h-screen flex flex-col px-10 md:px-16 lg:px-20 pt-24 pb-16">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="label-text block mb-4" style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease' }}>
            08 / Contact
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
            Your next move<br />
            <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>starts here.</em>
          </h2>
        </div>

        {/* Three tracks */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.8s ease 0.3s' }}
        >
          {TRACKS.map(track => (
            <button
              key={track.id}
              className="flex flex-col gap-4 p-8 text-left"
              style={{
                background: activeTrack === track.id ? 'rgba(201,168,76,0.08)' : 'rgba(255,255,255,0.02)',
                border: `1px solid ${activeTrack === track.id ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.06)'}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onClick={() => {
                setActiveTrack(track.id)
                setForm(prev => ({ ...prev, interest: track.title }))
              }}
            >
              <div className="flex items-center justify-between">
                <span style={{ fontSize: '1.2rem', color: activeTrack === track.id ? 'var(--color-gold)' : 'rgba(255,255,255,0.3)' }}>
                  {track.icon}
                </span>
                {activeTrack === track.id && (
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-gold)', display: 'inline-block' }} />
                )}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 400,
                color: activeTrack === track.id ? 'white' : 'rgba(255,255,255,0.6)',
                transition: 'color 0.3s ease',
              }}>
                {track.title}
              </h3>
              <p className="body-text" style={{ fontSize: '0.78rem' }}>{track.desc}</p>
              <span className="label-text" style={{ color: 'rgba(201,168,76,0.5)', fontSize: '0.55rem' }}>{track.details}</span>
            </button>
          ))}
        </div>

        {/* Contact form */}
        <div
          className="max-w-2xl mx-auto w-full"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.8s ease 0.5s' }}
        >
          {submitted ? (
            <div
              className="flex flex-col items-center gap-6 py-16"
              style={{ border: '1px solid rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.04)' }}
            >
              <span style={{ fontSize: '2rem', color: 'var(--color-gold)' }}>✓</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 300, color: 'white' }}>
                Enquiry Received
              </h3>
              <p className="body-text text-center" style={{ maxWidth: 360 }}>
                Our team will be in touch within 48 hours. We look forward to building something remarkable together.
              </p>
              <span className="gold-line-short" />
              <span className="label-text" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.6rem' }}>
                The Dubai Mall Partnerships Team
              </span>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="label-text" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.58rem' }}>Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="label-text" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.58rem' }}>Company</label>
                  <input
                    type="text"
                    placeholder="Your company"
                    value={form.company}
                    onChange={e => setForm(prev => ({ ...prev, company: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="label-text" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.58rem' }}>Email Address</label>
                <input
                  type="email"
                  placeholder="your@company.com"
                  value={form.email}
                  onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="label-text" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.58rem' }}>Area of Interest</label>
                <select
                  value={form.interest}
                  onChange={e => setForm(prev => ({ ...prev, interest: e.target.value }))}
                  style={{
                    ...inputStyle,
                    color: form.interest ? 'white' : 'rgba(255,255,255,0.25)',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(201,168,76,0.6)' strokeWidth='1.5' fill='none'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                    paddingRight: '40px',
                    cursor: 'pointer',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                >
                  <option value="" disabled style={{ background: '#111', color: 'rgba(255,255,255,0.4)' }}>Select your interest</option>
                  <option value="Lease a Space" style={{ background: '#111', color: 'white' }}>Lease a Space</option>
                  <option value="Partner With Us" style={{ background: '#111', color: 'white' }}>Partner With Us</option>
                  <option value="Book a Venue" style={{ background: '#111', color: 'white' }}>Book a Venue</option>
                  <option value="Press & Media" style={{ background: '#111', color: 'white' }}>Press & Media</option>
                  <option value="Other" style={{ background: '#111', color: 'white' }}>Other</option>
                </select>
              </div>

              <button
                onClick={handleSubmit}
                className="btn-gold mt-4 justify-center"
                style={{ padding: '16px 32px', fontSize: '0.7rem' }}
              >
                Submit Enquiry
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
              </button>

              <p className="body-text text-center" style={{ fontSize: '0.7rem', marginTop: 8, opacity: 0.5 }}>
                Response within 48 hours · Confidential enquiry
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className="flex flex-col md:flex-row items-center justify-between mt-16 pt-8 gap-4"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.8s ease 0.7s',
          }}
        >
          <div className="flex flex-col gap-1">
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 300, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em' }}>
              DUBAI MALL
            </span>
            <span className="body-text" style={{ fontSize: '0.72rem' }}>Downtown Dubai · UAE · Est. 2008</span>
          </div>
          <div className="flex gap-8">
            {['Retail Leasing', 'Events', 'Partnerships', 'Press'].map(link => (
              <span key={link} className="label-text underline-gold" style={{ color: 'rgba(255,255,255,0.3)', cursor: 'pointer', fontSize: '0.6rem' }}>
                {link}
              </span>
            ))}
          </div>
          <span className="label-text" style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.58rem' }}>
            © 2024 Emaar Malls PJSC
          </span>
        </div>
      </div>
    </section>
  )
}