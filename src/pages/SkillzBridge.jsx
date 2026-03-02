import { useState } from 'react'
import { ArrowRight, CheckCircle, Clock } from 'lucide-react'

const skills = [
  { icon: '📱', title: 'Digital Marketing', desc: 'Social media, ads, content strategy, and brand building.' },
  { icon: '✍️', title: 'Copywriting & Sales', desc: 'Persuasive writing, email marketing, and conversion copy.' },
  { icon: '📊', title: 'Data Analytics', desc: 'Data interpretation, dashboards, and business insights.' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'User interface and experience design for digital products.' },
  { icon: '💻', title: 'Web Development', desc: 'Building functional and beautiful websites and web apps.' },
  { icon: '🎬', title: 'Content Creation', desc: 'Video production, editing, and multimedia storytelling.' },
]

export default function SkillzBridge() {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', status: '', skills: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    const subject = `SkillzBridge Waitlist — ${formData.fullName}`
    const body = `SKILLZBRIDGE WAITLIST ENTRY\n==========================\nFull Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nStatus: ${formData.status}\nSkills of Interest: ${formData.skills}\n==========================\nSubmitted via Kopa360 Website`
    window.location.href = `mailto:sundaydigitals@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setTimeout(() => { setSubmitted(true); setSubmitting(false) }, 1000)
  }

  return (
    <div>
      {/* HERO */}
      <section style={{ minHeight: '70vh', background: 'var(--green-950)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(232,184,0,0.8) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '9rem 1.5rem 5rem', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '680px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(232,184,0,0.1)', border: '1px solid rgba(232,184,0,0.3)', borderRadius: '100px', padding: '0.4rem 1rem', marginBottom: '1.5rem' }}>
              <Clock size={14} color="var(--gold-500)" />
              <span style={{ color: 'var(--gold-500)', fontSize: '0.8rem', fontWeight: '600' }}>Launching 2027/28 — Join the Waitlist</span>
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: '900', fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', color: 'white', marginBottom: '1.25rem' }}>
              Equip Yourself With Skills<br /><span style={{ color: 'var(--gold-500)' }}>That Pay Beyond Service.</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '560px', marginBottom: '2.5rem' }}>
              SkillzBridge trains corps members in high-demand digital skills — eliminating post-service unemployment and building a generation of skilled Nigerian professionals.
            </p>
            <a href="#waitlist" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
              Join the Waitlist <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* WHAT IS SKILLZBRIDGE */}
      <section style={{ background: 'var(--off-white)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p className="section-tag" style={{ marginBottom: '1rem' }}>About SkillzBridge</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: 'var(--green-950)', marginBottom: '1.25rem' }}>
                The Bridge Between Service and Success.
              </h2>
              <p style={{ color: '#4a5568', lineHeight: '1.85', marginBottom: '1rem', fontSize: '0.975rem' }}>
                Every year, thousands of corps members complete their service year without a clear career path — skilled in their academic discipline but unprepared for the demands of the modern digital economy.
              </p>
              <p style={{ color: '#4a5568', lineHeight: '1.85', fontSize: '0.975rem' }}>
                SkillzBridge changes that. It's a structured digital skills training program designed specifically for corps members and ex-corps members — providing practical, market-ready training that leads to real income opportunities and career acceleration.
              </p>
            </div>
            <div style={{ background: 'var(--green-950)', borderRadius: '20px', padding: '2.5rem', border: '1px solid rgba(232,184,0,0.2)' }}>
              <div style={{ background: 'rgba(232,184,0,0.1)', borderRadius: '12px', padding: '1.25rem', marginBottom: '1.5rem', border: '1px solid rgba(232,184,0,0.2)' }}>
                <div style={{ color: 'var(--gold-500)', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.25rem' }}>⏳ Coming in 2027/28</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>Pilot Phase starting with TutorLink graduates</div>
              </div>
              {['Practical, hands-on training', 'Industry-standard certification', 'Mentorship from working professionals', 'Job placement support', 'Path to becoming a trainer/educator'].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.875rem' }}>
                  <CheckCircle size={16} color="var(--gold-500)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS ROADMAP */}
      <section style={{ background: 'var(--gray-light)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>Curriculum</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: 'var(--green-950)', marginBottom: '0.75rem' }}>
              What You'll Learn
            </h2>
            <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Skill tracks are currently being developed. Full curriculum details will be released before launch.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {skills.map(skill => (
              <div key={skill.title} style={{ background: 'white', borderRadius: '16px', padding: '1.75rem', border: '1px solid #ede9de', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', background: 'rgba(232,184,0,0.1)', borderRadius: '100px', padding: '0.2rem 0.5rem', fontSize: '0.65rem', fontWeight: '700', color: '#c9a000', letterSpacing: '0.05em' }}>COMING SOON</div>
                <div style={{ fontSize: '2rem', marginBottom: '0.875rem' }}>{skill.icon}</div>
                <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: 'var(--green-950)', marginBottom: '0.4rem' }}>{skill.title}</h4>
                <p style={{ color: '#9ca3af', fontSize: '0.8rem', lineHeight: '1.6' }}>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRESSION PATH */}
      <section style={{ background: 'var(--green-950)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p className="section-tag" style={{ marginBottom: '1rem' }}>Your Growth Path</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: 'white', marginBottom: '3rem' }}>
            From Learner to Leader
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            {['Learner', '→', 'Certified', '→', 'Coach / Mentor', '→', 'Educator', '→', 'Advocate'].map((item, i) => (
              item === '→' ? (
                <span key={i} style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.2rem' }}>→</span>
              ) : (
                <div key={i} style={{
                  background: item === 'Advocate' ? 'rgba(232,184,0,0.15)' : 'rgba(255,255,255,0.06)',
                  border: item === 'Advocate' ? '1px solid rgba(232,184,0,0.4)' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px', padding: '0.75rem 1.25rem',
                  color: item === 'Advocate' ? 'var(--gold-500)' : 'rgba(255,255,255,0.8)',
                  fontWeight: '600', fontSize: '0.875rem',
                }}>{item}</div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON BANNER */}
      <section style={{ background: 'var(--gold-500)', padding: '3rem 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--green-950)', fontWeight: '700', marginBottom: '0.75rem' }}>
            SkillzBridge is Coming in 2027/28
          </h2>
          <p style={{ color: 'rgba(10,31,14,0.7)', fontSize: '0.975rem', lineHeight: '1.7' }}>
            We're building something powerful. Join the waitlist now and be the first to know when applications open — plus get early bird access and exclusive benefits.
          </p>
        </div>
      </section>

      {/* WAITLIST FORM */}
      <section style={{ background: 'var(--off-white)', padding: '5rem 0' }} id="waitlist">
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>Get Early Access</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: 'var(--green-950)', marginBottom: '0.75rem' }}>
              Be the First to Know
            </h2>
            <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Join the waitlist and we'll notify you the moment SkillzBridge opens for applications.</p>
          </div>

          {submitted ? (
            <div style={{ background: 'white', borderRadius: '20px', padding: '3rem', textAlign: 'center', border: '1px solid rgba(26,66,35,0.2)' }}>
              <CheckCircle size={52} color="var(--green-700)" style={{ marginBottom: '1.25rem' }} />
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', color: 'var(--green-950)', marginBottom: '0.75rem' }}>You're on the List!</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.75', maxWidth: '420px', margin: '0 auto' }}>We'll be in touch when SkillzBridge opens for applications. Stay tuned!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', border: '1px solid #ede9de' }}>
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
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Phone Number *</label>
                  <input required className="form-input" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+234 800 000 0000" />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Current Status *</label>
                  <select required className="form-input" name="status" value={formData.status} onChange={handleChange}>
                    <option value="">Select your status</option>
                    <option value="Current Corps Member">Current Corps Member</option>
                    <option value="Ex-Corps Member">Ex-Corps Member</option>
                    <option value="Civilian">Civilian</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Skills of Interest</label>
                  <input className="form-input" type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="e.g. Digital Marketing, Data Analytics, UI/UX Design" />
                </div>
              </div>
              <button type="submit" disabled={submitting} className="btn-primary" style={{ marginTop: '1.75rem', width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '1rem' }}>
                {submitting ? 'Joining...' : 'Join the Waitlist'} {!submitting && <ArrowRight size={18} />}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* WHY JOIN EARLY */}
      <section style={{ background: 'var(--gray-light)', padding: '4rem 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', color: 'var(--green-950)' }}>Why Join Early?</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '🚀', title: 'First Access', desc: 'Be among the first cohort when applications open in 2027/28.' },
              { icon: '🎁', title: 'Early Bird Benefits', desc: 'Early waitlist members will receive exclusive onboarding benefits and priority consideration.' },
              { icon: '🌐', title: 'Community Entry', desc: 'Gain immediate access to the Kopa360 community and network while waiting for the program launch.' },
            ].map(item => (
              <div key={item.title} style={{ background: 'white', borderRadius: '16px', padding: '2rem', border: '1px solid #ede9de', textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
