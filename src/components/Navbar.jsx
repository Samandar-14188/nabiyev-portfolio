import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['Bosh sahifa', 'Skilllar', 'Loyihalar', 'Bog\'lanish']
  const ids = ['home', 'skills', 'projects', 'contact']

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '1rem 2rem',
      background: scrolled ? 'rgba(10,10,15,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(127,119,221,0.2)' : 'none',
      transition: 'all 0.3s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>
      <span style={{ fontSize: '20px', fontWeight: '600', color: '#7F77DD' }}>
        SN
      </span>

      {/* Desktop */}
      <div style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
        {links.map((link, i) => (
          <button key={i} onClick={() => scrollTo(ids[i])} style={{
            background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)',
            fontSize: '15px', cursor: 'pointer', transition: 'color 0.2s'
          }}
            onMouseEnter={e => e.target.style.color = '#7F77DD'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
          >
            {link}
          </button>
        ))}
      </div>

      {/* CV tugmasi */}
      <a href="/cv.pdf" download style={{
        background: '#7F77DD', color: 'white', padding: '8px 20px',
        borderRadius: '50px', fontSize: '14px', textDecoration: 'none',
        transition: 'opacity 0.2s'
      }}
        onMouseEnter={e => e.target.style.opacity = '0.8'}
        onMouseLeave={e => e.target.style.opacity = '1'}
      >
        CV yuklab olish
      </a>
    </nav>
  )
}