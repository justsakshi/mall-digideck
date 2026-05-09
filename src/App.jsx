import { useEffect, useRef, useState } from 'react'
import Nav from './components/shared/Nav'
import CustomCursor from './components/shared/CustomCursor'
import Hero from './components/sections/Hero'
import Property from './components/sections/Property'
import Retail from './components/sections/Retail'
import Luxury from './components/sections/Luxury'
import Dining from './components/sections/Dining'
import Entertainment from './components/sections/Entertainment'
import Events from './components/sections/Events'
import Contact from './components/sections/Contact'

const SECTIONS = ['hero', 'property', 'retail', 'luxury', 'dining', 'entertainment', 'events', 'contact']

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const observerRef = useRef(null)

  useEffect(() => {
    const options = { threshold: 0.4 }
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, options)

    SECTIONS.forEach(id => {
      const el = document.getElementById(id)
      if (el) observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <>
      <CustomCursor />
      <Nav activeSection={activeSection} sections={SECTIONS} />
      <main>
        <Hero />
        <Property />
        <Retail />
        <Luxury />
        <Dining />
        <Entertainment />
        <Events />
        <Contact />
      </main>
    </>
  )
}
