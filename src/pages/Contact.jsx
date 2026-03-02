import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Instagram, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ fullName: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    const subject = `Kopa360 Contact — ${formData.subject}`
    const body = `CONTACT FORM SUBMISSION\n==========================\nName: ${formData.fullName}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}\n==========================\nSubmitted via Kopa360 Website`
    window.location.href = `mailto:sundaydigitals@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setTimeout(() => { setSubmitted(true); setSubmitting(false) }, 1000)
  }

  return (
    <div>
      {/* HERO */}
      <section style={{ background: 'var(--green-950)', padding: '9rem 1.5rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(232,184,0,0.8) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <p className="section-tag" style={{ marginBottom: '1rem' }}>Get in Touch</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: '900', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1.25rem', lineHeight: '1.1' }}>
            We'd Love to<br /><span style={{ color: 'var(--gold-500)' }}>Hear from You.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            Whether you have a question, feedback, or just want to learn more about Kopa360 — we typically respond within 24–48 hours.
          </p>
        </div>
      </section>

      {/* AUDIENCE DIRECTION */}
      <section style={{ background: 'var(--off-white)', padding: '4rem 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Not sure where to go? We can direct you:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {[
              { title: 'Want to become a tutor?', sub: 'Apply through TutorLink', path: '/tutorlink#apply', icon: '🎓' },
              { title: 'Looking for a tutor for your child?', sub: 'Submit a request for Parents', path: '/parents#request', icon: '👨‍👩‍👧' },
              { title: 'Want to partner or collaborate?', sub: 'Connect via The Network', path: '/the-network#partner', icon: '🤝' },
            ].map(item => (
              <Link key={item.path} to={item.path} style={{
                background: 'white', borderRadius: '14px', padding: '1.5rem',
                border: '1px solid #ede9de', textDecoration: 'none', display: 'block',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(26,66,35,0.3)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#ede9de'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <div style={{ fontWeight: '600', color: 'var(--green-950)', fontSize: '0.925rem', marginBottom: '0.25rem' }}>{item.title}</div>
                <div style={{ color: 'var(--green-800)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  {item.sub} <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section style={{ background: 'var(--gray-light)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

            {/* Form */}
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: 'var(--green-950)', marginBottom: '2rem' }}>Send Us a Message</h2>
              {submitted ? (
                <div style={{ background: 'white', borderRadius: '20px', padding: '3rem', textAlign: 'center', border: '1px solid rgba(26,66,35,0.2)' }}>
                  <CheckCircle size={48} color="var(--green-700)" style={{ marginBottom: '1rem' }} />
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.75' }}>We'll get back to you within 24–48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ background: 'white', borderRadius: '20px', padding: '2rem', border: '1px solid #ede9de' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Full Name *</label>
                      <input required className="form-input" type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Email Address *</label>
                      <input required className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Subject *</label>
                      <input required className="form-input" type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="What is your message about?" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Message *</label>
                      <textarea required className="form-input" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us what's on your mind..." style={{ resize: 'vertical' }} />
                    </div>
                  </div>
                  <button type="submit" disabled={submitting} className="btn-primary" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '1rem' }}>
                    {submitting ? 'Sending...' : 'Send Message'} {!submitting && <ArrowRight size={18} />}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: 'var(--green-950)', marginBottom: '2rem' }}>Contact Details</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ background: 'white', borderRadius: '14px', padding: '1.5rem', border: '1px solid #ede9de', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--green-950)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={20} color="var(--gold-500)" />
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: 'var(--green-950)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Email</div>
                    <a href="mailto:sundaydigitals@gmail.com" style={{ color: '#6b7280', fontSize: '0.875rem', textDecoration: 'none' }}>sundaydigitals@gmail.com</a>
                    <div style={{ color: '#9ca3af', fontSize: '0.75rem', marginTop: '0.25rem' }}>We respond within 24–48 hours</div>
                  </div>
                </div>

                <div style={{ background: 'white', borderRadius: '14px', padding: '1.5rem', border: '1px solid #ede9de', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--green-950)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Instagram size={20} color="var(--gold-500)" />
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: 'var(--green-950)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Instagram</div>
                    <a href="https://www.instagram.com/kopa360network" target="_blank" rel="noopener noreferrer" style={{ color: '#6b7280', fontSize: '0.875rem', textDecoration: 'none' }}>@kopa360network</a>
                    <div style={{ color: '#9ca3af', fontSize: '0.75rem', marginTop: '0.25rem' }}>Follow us for updates</div>
                  </div>
                </div>

                <div style={{ background: 'rgba(232,184,0,0.08)', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(232,184,0,0.2)' }}>
                  <div style={{ fontWeight: '700', color: 'var(--green-950)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>💡 Quick Tip</div>
                  <p style={{ color: '#6b7280', fontSize: '0.8rem', lineHeight: '1.7' }}>
                    For tutor applications, parent requests, or partnership enquiries — use the dedicated forms on each program page for faster response times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
