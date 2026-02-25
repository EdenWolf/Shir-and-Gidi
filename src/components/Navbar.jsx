import { useState, useEffect } from 'react'
import './Navbar.css'

const navItems = [
  { id: 'hero', label: 'בית' },
  { id: 'countdown', label: 'ספירה לאחור' },
  { id: 'timeline', label: 'ציר הזמן' },
  { id: 'invitations', label: 'הזמנות' },
  { id: 'honeymoon', label: 'ירח דבש' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="navbar-logo" onClick={() => scrollTo('hero')}>
          שיר & גדעון
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <button onClick={() => scrollTo(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
