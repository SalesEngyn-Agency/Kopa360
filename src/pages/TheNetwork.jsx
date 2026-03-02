import { useState } from 'react'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'

const mentors = [
  { name: 'Adebayo Olatunji', role: 'Tech Entrepreneur, Lagos', year: '2015', excerpt: 'From khaki to boardroom — my NYSC year planted seeds I am still harvesting today. Kopa360 is building the structure I wish existed when I served.' },
  { name: 'Dr. Ngozi Eze', role: 'Medical Consultant & Educator', year: '2012', excerpt: 'The discipline and service mindset from NYSC shaped my career. I am proud to mentor the next generation through The Network.' },
  { name: 'Seun Adeleke', role: 'Digital Marketing Director', year: '2018', excerpt: 'I discovered my passion for digital marketing after my service year. Now I give back by mentoring corps members finding their own path.' },
]

const partnershipTypes = [
  { icon: '🧭', title: 'Mentor', desc: 'Share your knowledge, journey, and experience with current corps members navigating their path.' },
  { icon: '🤝', title: 'Partner', desc: 'Build strategic partnerships that create mutual value and advance the Kopa360 mission.' },
  { icon: '💼', title: 'Sponsor', desc: 'Fund programs, scholarships, or initiatives that directly impact the lives of corps members.' },
  { icon: '🔗', title: 'Collaborator', desc: 'Work with Kopa360 on projects, content, events, or initiatives that align with your goals.' },
]

export default function TheNetwork() {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', yearOfService: '', profession: '', organization: '', involvement: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    const subject = `The Network Interest — ${formData.fullName} (${formData.involvement})`
    const body = `THE NETWORK APPLICATION\n==========================\nFull Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nYear of Service: ${formData.yearOfService}\nProfession/Role: ${formData.profession}\nOrganization: ${formData.organization || 'N/A'}\nInvolvement Type: ${formData.involvement}\nMessage: ${formData.message}\n==========================\nSubmitted via Kopa360 Website`
    window.location.href = `mailto:sundaydigitals@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setTimeout(() => { setSubmitted(true); setSubmitting(false) }, 1000)
  }

  return (
    <div>
      {/* HERO */}
      <section style={{
        minHeight: '80vh', background: 'var(--green-950)', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(232,184,0,0.04) 0%, transparent 50%, rgba(26,66,35,0.3) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(232,184,0,0.8) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div style={{ position: 'absolute', top: '20%', right: '5%', opacity: 0.08 }}>
          <div style={{ width: '300px', height: '300px', border: '2px solid var(--gold-500)', borderRadius: '50%' }} />
          <div style={{ width: '200px', height: '200px', border: '1px solid var(--gold-500)', borderRadius: '50%', position: 'absolute', top: '50px', left: '50px' }} />
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '9rem 1.5rem 5rem', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '700px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(232,184,0,0.1)', border: '1px solid rgba(232,184,0,0.4)', borderRadius: '100px', padding: '0.4rem 1rem', marginBottom: '1.5rem' }}>
              <Star size={12} color="var(--gold-500)" fill="var(--gold-500)" />
              <span style={{ color: 'var(--gold-500)', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.06em' }}>The Network — By Invitation & Application</span>
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: '900', fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', lineHeight: '1.1', color: 'white', marginBottom: '1.25rem' }}>
              Where Legacy<br /><span style={{ color: 'var(--gold-500)' }}>Meets Opportunity.</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '560px', marginBottom: '2.5rem' }}>
              The Network is the apex of the Kopa360 ecosystem — a curated community of successful ex-corps members united by impact, purpose, and a commitment to elevating the next generation.
            </p>
            <a href="#partner" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
              Partner With Us <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* WHAT IS THE NETWORK */}
      <section style={{ background: 'var(--off-white)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p className="section-tag" style={{ marginBottom: '1rem' }}>About The Network</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: 'var(--green-950)', marginBottom: '1.25rem' }}>
                The Destination at the End of the Journey.
              </h2>
              <p style={{ color: '#4a5568', lineHeight: '1.85', marginBottom: '1rem', fontSize: '0.975rem' }}>
                Every great ecosystem needs its pillars. The Network is Kopa360's community of impact — successful ex-corps members who have walked the path and are now extending a hand to those still on the journey.
              </p>
              <p style={{ color: '#4a5568', lineHeight: '1.85', fontSize: '0.975rem' }}>
                Whether you passed through Kopa360 or not, if you served this nation and built something meaningful, The Network is your platform to mentor, inspire, partner, and leave a legacy that outlasts your career.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Connect current corps members with successful ex-corps mentors',
                'Feature real mentor journey stories — The Diary of a Mentor',
                'Facilitate partnerships, sponsorships, and collaborations',
                'Create a pipeline from TutorLink and SkillzBridge to real career opportunities',
                'Build a Nigerian professional network rooted in shared national service',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={16} color="var(--green-700)" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ color: '#4a5568', fontSize: '0.9rem', lineHeight: '1.65' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIARY OF A MENTOR */}
      <section style={{ background: 'var(--gray-light)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>Featured Stories</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: 'var(--green-950)', marginBottom: '0.75rem' }}>
              The Diary of a Mentor
            </h2>
            <p style={{ color: '#6b7280', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto' }}>
              Real stories from ex-corps members who turned their service year into a launching pad for extraordinary careers.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {mentors.map((mentor, i) => (
              <div key={i} className="card-hover" style={{ background: 'white', borderRadius: '20px', padding: '2rem', border: '1px solid #ede9de', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--green-800), var(--gold-500))' }} />
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={12} color="var(--gold-500)" fill="var(--gold-500)" />)}
                </div>
                <p style={{ color: '#4a5568', lineHeight: '1.75', marginBottom: '1.5rem', fontSize: '0.875rem', fontStyle: 'italic' }}>"{mentor.excerpt}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--green-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-500)', fontWeight: '700', fontSize: '1rem', fontFamily: 'Playfair Display, serif', flexShrink: 0 }}>
                    {mentor.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--green-950)' }}>{mentor.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{mentor.role}</div>
                    <div style={{ fontSize: '0.7rem', color: '#c4b8a0' }}>NYSC {mentor.year}</div>
                  </div>
                </div>
                <button style={{ background: 'none', border: '1px solid #e0ddd5', borderRadius: '8px', padding: '0.5rem 1rem', fontSize: '0.8rem', color: 'var(--green-800)', fontWeight: '600', cursor: 'pointer' }}>
                  Read Full Story (Coming Soon)
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP TYPES */}
      <section style={{ background: 'var(--green-950)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>Get Involved</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: 'white', marginBottom: '0.75rem' }}>
              Partner, Sponsor, or Collaborate
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto' }}>
              There are many ways to be part of the Kopa360 mission. Choose how you want to show up.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {partnershipTypes.map(type => (
              <div key={type.title} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(232,184,0,0.12)', textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{type.icon}</div>
                <h4 style={{ fontFamily: 'Playfair Display, serif', color: 'var(--gold-500)', marginBottom: '0.6rem', fontSize: '1.15rem' }}>{type.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', lineHeight: '1.7' }}>{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE JOURNEY TO THE NETWORK */}
      <section style={{ background: 'var(--off-white)', padding: '4rem 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p className="section-tag" style={{ marginBottom: '1rem' }}>The Journey</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: '700', color: 'var(--green-950)', marginBottom: '1rem' }}>
            The Network is the Destination
          </h2>
          <p style={{ color: '#6b7280', lineHeight: '1.75', marginBottom: '2rem', fontSize: '0.95rem', maxWidth: '560px', margin: '0 auto 2rem' }}>
            Every step in the Kopa360 ecosystem leads here. From corps member to tutor to trained professional to advocate — The Network awaits those who commit to the journey.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            {['Corps Member', '→', 'Tutor', '→', 'SkillzBridge', '→', 'Coach', '→', 'Advocate', '→', '🏆 The Network'].map((item, i) => (
              item === '→' ? (
                <span key={i} style={{ color: '#d1c9b8', fontSize: '1.1rem' }}>→</span>
              ) : (
                <div key={i} style={{
                  background: item.includes('Network') ? 'var(--green-950)' : 'white',
                  border: item.includes('Network') ? '1px solid rgba(232,184,0,0.4)' : '1px solid #ede9de',
                  borderRadius: '10px', padding: '0.6rem 1rem',
                  color: item.includes('Network') ? 'var(--gold-500)' : 'var(--green-950)',
                  fontWeight: '600', fontSize: '0.8rem',
                }}>{item}</div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER FORM */}
      <section style={{ background: 'var(--gray-light)', padding: '5rem 0' }} id="partner">
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>Express Interest</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: 'var(--green-950)', marginBottom: '0.75rem' }}>
              Get Involved with The Network
            </h2>
            <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Tell us who you are and how you'd like to be part of the Kopa360 mission.</p>
          </div>

          {submitted ? (
            <div style={{ background: 'white', borderRadius: '20px', padding: '3rem', textAlign: 'center', border: '1px solid rgba(26,66,35,0.2)' }}>
              <CheckCircle size={52} color="var(--green-700)" style={{ marginBottom: '1.25rem' }} />
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', color: 'var(--green-950)', marginBottom: '0.75rem' }}>Interest Received!</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.75', maxWidth: '420px', margin: '0 auto' }}>
                Thank you for reaching out. The Kopa360 team will review your interest and get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', border: '1px solid #ede9de' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
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
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Year of NYSC Service *</label>
                  <input required className="form-input" type="text" name="yearOfService" value={formData.yearOfService} onChange={handleChange} placeholder="e.g. 2018/2019" />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Current Profession / Role *</label>
                  <input required className="form-input" type="text" name="profession" value={formData.profession} onChange={handleChange} placeholder="e.g. Software Engineer at Google" />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Organization (Optional)</label>
                  <input className="form-input" type="text" name="organization" value={formData.organization} onChange={handleChange} placeholder="e.g. Google, Self-Employed" />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>How do you want to be involved? *</label>
                  <select required className="form-input" name="involvement" value={formData.involvement} onChange={handleChange}>
                    <option value="">Select involvement type</option>
                    <option value="Mentor">Mentor — Guide current corps members</option>
                    <option value="Partner">Partner — Strategic collaboration</option>
                    <option value="Sponsor">Sponsor — Fund programs and initiatives</option>
                    <option value="Collaborator">Collaborator — Projects, events, content</option>
                    <option value="Be Featured">Be Featured — Share my journey story</option>
                  </select>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Brief Message (Optional)</label>
                  <textarea className="form-input" name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Tell us more about your background and why you want to be part of The Network..." style={{ resize: 'vertical' }} />
                </div>
              </div>
              <button type="submit" disabled={submitting} className="btn-primary" style={{ marginTop: '1.75rem', width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '1rem' }}>
                {submitting ? 'Submitting...' : 'Submit Interest'} {!submitting && <ArrowRight size={18} />}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
