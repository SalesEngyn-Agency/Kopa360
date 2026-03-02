import { Link } from 'react-router-dom'
import { Instagram, Mail, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--green-950)', borderTop: '1px solid rgba(232,184,0,0.15)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <img
                src="/images_1772210729292.jpeg"
                alt="Kopa360 Logo"
                style={{ height: '56px', width: 'auto', objectFit: 'contain', borderRadius: '6px' }}
              />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Reigniting the future — one corps member at a time. Building a generation of impactful, skilled, and connected Nigerians.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="https://www.instagram.com/kopa360network" target="_blank" rel="noopener noreferrer"
                style={{
                  width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)',
                  transition: 'background 0.2s, color 0.2s', textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-500)'; e.currentTarget.style.color = 'var(--green-950)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
              >
                <Instagram size={16} />
              </a>
              <a href="mailto:sundaydigitals@gmail.com"
                style={{
                  width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)',
                  transition: 'background 0.2s, color 0.2s', textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-500)'; e.currentTarget.style.color = 'var(--green-950)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 style={{ color: 'var(--gold-500)', fontFamily: 'DM Sans, sans-serif', fontWeight: '700', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Programs
            </h4>
            {[
              { path: '/tutorlink', label: 'TutorLink' },
              { path: '/skillzbridge', label: 'SkillzBridge' },
              { path: '/the-network', label: 'The Network' },
            ].map(item => (
              <Link key={item.path} to={item.path} style={{
                display: 'flex', alignItems: 'center', gap: '0.25rem',
                color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.9rem',
                marginBottom: '0.75rem', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
              >
                {item.label} <ArrowUpRight size={12} />
              </Link>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--gold-500)', fontFamily: 'DM Sans, sans-serif', fontWeight: '700', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Quick Links
            </h4>
            {[
              { path: '/', label: 'Home' },
              { path: '/parents', label: 'For Parents & Pupils' },
              { path: '/contact', label: 'Contact Us' },
              { path: '/tutorlink#apply', label: 'Apply as Tutor' },
            ].map(item => (
              <Link key={item.path} to={item.path} style={{
                display: 'flex', alignItems: 'center', gap: '0.25rem',
                color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.9rem',
                marginBottom: '0.75rem', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
              >
                {item.label} <ArrowUpRight size={12} />
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'var(--gold-500)', fontFamily: 'DM Sans, sans-serif', fontWeight: '700', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Get in Touch
            </h4>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Email:</p>
            <a href="mailto:sundaydigitals@gmail.com" style={{ color: 'white', fontSize: '0.875rem', textDecoration: 'none' }}>
              sundaydigitals@gmail.com
            </a>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', marginTop: '1rem', marginBottom: '0.5rem' }}>Instagram:</p>
            <a href="https://www.instagram.com/kopa360network" target="_blank" rel="noopener noreferrer"
              style={{ color: 'white', fontSize: '0.875rem', textDecoration: 'none' }}>
              @kopa360network
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Kopa360 Network. All rights reserved.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
            Built with ❤️ by <a href="https://salesengyn.online" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-500)', textDecoration: 'none' }}>SalesEngyn</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
