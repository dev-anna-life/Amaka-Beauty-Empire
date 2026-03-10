import { useState, useEffect } from 'react'

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const NAV_LINKS = ['services', 'gallery', 'about', 'testimonials', 'contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      padding: '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#080510',
      borderBottom: scrolled ? '1px solid rgba(92,125,45,0.4)' : '1px solid transparent',
      boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
      transition: 'all 0.3s ease',
    }}>

      <div
        onClick={() => scrollTo('hero')}
        style={{
          cursor: 'pointer',
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#ffff',
          letterSpacing: '0.05em',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <img
            src="/images/Logo.png"
            alt="logo"
            style={{ width: '45px', height: '45px', objectFit: 'contain' }}
          />
          AmakaBeautyEmpire
        </div>
      </div>

      <ul className="nav-links" style={{
        display: 'flex', gap: '2rem',
        listStyle: 'none', margin: 0, padding: 0,
      }}>
        {NAV_LINKS.map((section) => (
          <li key={section}>
            <button
              onClick={() => scrollTo(section)}
              style={{
                background: 'none', border: 'none',
                color: '#f0e6d3', fontSize: '0.9rem',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                cursor: 'pointer', fontFamily: 'inherit',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#c9a84c')}
              onMouseLeave={(e) => (e.target.style.color = '#f0e6d3')}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => scrollTo('contact')}
        className="nav-links"
        style={{
          background: '#5C7D2D',
          color: '#fff', border: 'none',
          padding: '0.6rem 1.5rem',
          borderRadius: '30px', fontFamily: 'inherit',
          fontSize: '0.85rem', fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          cursor: 'pointer', transition: 'all 0.2s',
          boxShadow: '0 4px 15px rgba(92,125,45,0.4)',
        }}
        onMouseEnter={(e) => (e.target.style.background = '#333333')}
        onMouseLeave={(e) => (e.target.style.background = '#5C7D2D')}
      >
        Book Now
      </button>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'none', border: 'none',
          color: '#c9a84c', fontSize: '1.8rem',
          cursor: 'pointer', display: 'none',
          marginLeft: '1rem',
        }}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: '#5C7D2D',
          padding: '1rem', display: 'flex',
          flexDirection: 'column', gap: '1rem',
          borderBottom: '1px solid rgba(92,125,45,0.3)',
        }}>
          {NAV_LINKS.map((section) => (
            <button
              key={section}
              onClick={() => { scrollTo(section); setMenuOpen(false) }}
              style={{
                background: 'none', border: 'none',
                color: '#f0e6d3', fontSize: '1rem',
                textTransform: 'uppercase', letterSpacing: '0.1em',
                cursor: 'pointer', padding: '0.5rem',
                fontFamily: 'inherit', textAlign: 'left',
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}