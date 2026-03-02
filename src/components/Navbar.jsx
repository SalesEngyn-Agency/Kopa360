import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setProgramsOpen(false)
  }, [location])

  const isActive = (path) => location.pathname === path

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(10, 31, 14, 0.97)'
          : 'rgba(10, 31, 14, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(232,184,0,0.2)' : '1px solid transparent',
        padding: scrolled ? '0.75rem 0' : '1.1rem 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              background: 'var(--gold-500)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Playfair Display, serif',
              fontWeight: '900',
              fontSize: '1rem',
              color: 'var(--green-950)',
            }}>K</div>
            <div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700', fontSize: '1.15rem', color: 'white', lineHeight: 1 }}>
                KOPA<span style={{ color: 'var(--gold-500)' }}>360</span>
              </div>
              <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Reigniting the Future
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            <Link to="/" style={{ color: isActive('/') ? 'var(--gold-500)' : 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', transition: 'color 0.2s' }}>
              Home
            </Link>

            {/* Programs Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setProgramsOpen(!programsOpen)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: ['/tutorlink', '/skillzbridge', '/the-network'].includes(location.pathname) ? 'var(--gold-500)' : 'rgba(255,255,255,0.85)',
                  fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.3rem',
                  transition: 'color 0.2s',
                }}
              >
                Programs <ChevronDown size={14} style={{ transform: programsOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
              </button>
              {programsOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 0.75rem)', left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--green-900)', border: '1px solid rgba(232,184,0,0.2)',
                  borderRadius: '12px', padding: '0.5rem', minWidth: '200px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                }}>
                  {[
                    { path: '/tutorlink', label: 'TutorLink', desc: 'Become a Tutor' },
                    { path: '/skillzbridge', label: 'SkillzBridge', desc: 'Digital Skills Training' },
                    { path: '/the-network', label: 'The Network', desc: 'Connect & Grow' },
                  ].map(item => (
                    <Link key={item.path} to={item.path} style={{
                      display: 'block', padding: '0.75rem 1rem', borderRadius: '8px', textDecoration: 'none',
                      transition: 'background 0.2s',
                      background: isActive(item.path) ? 'rgba(232,184,0,0.1)' : 'transparent',
                    }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(232,184,0,0.1)'}
                      onMouseLeave={e => e.currentTarget.style.background = isActive(item.path) ? 'rgba(232,184,0,0.1)' : 'transparent'}
                    >
                      <div style={{ color: 'var(--gold-500)', fontWeight: '600', fontSize: '0.9rem' }}>{item.label}</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>{item.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/parents" style={{ color: isActive('/parents') ? 'var(--gold-500)' : 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
              For Parents
            </Link>
            <Link to="/contact" style={{ color: isActive('/contact') ? 'var(--gold-500)' : 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
              Contact
            </Link>

            <Link to="/tutorlink#apply" className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.875rem' }}>
              Join Kopa360
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', display: 'none' }}
            className="mobile-menu-btn"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{
            marginTop: '1rem', paddingTop: '1rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}>
            {[
              { path: '/', label: 'Home' },
              { path: '/tutorlink', label: 'TutorLink' },
              { path: '/skillzbridge', label: 'SkillzBridge' },
              { path: '/the-network', label: 'The Network' },
              { path: '/parents', label: 'For Parents' },
              { path: '/contact', label: 'Contact' },
            ].map(item => (
              <Link key={item.path} to={item.path} style={{
                display: 'block', padding: '0.75rem 0',
                color: isActive(item.path) ? 'var(--gold-500)' : 'rgba(255,255,255,0.85)',
                textDecoration: 'none', fontSize: '1rem', fontWeight: '500',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}>
                {item.label}
              </Link>
            ))}
            <div style={{ paddingTop: '1rem', paddingBottom: '0.5rem' }}>
              <Link to="/tutorlink#apply" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Join Kopa360
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
