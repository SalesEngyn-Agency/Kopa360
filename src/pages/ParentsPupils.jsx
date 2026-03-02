import { useState } from 'react'
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  { q: 'How are Kopa360 tutors vetted?', a: 'Every tutor goes through a multi-step vetting process including application review, credential verification, and a mandatory physical accreditation session before being listed on the platform.' },
  { q: 'What qualifications do your tutors have?', a: 'All Kopa360 tutors are currently serving NYSC corps members with a minimum of Second Class Upper (2:1) degree. They are university graduates passionate about education and student success.' },
  { q: 'How long does the matching process take?', a: 'After submitting your request, the Kopa360 team will contact you within 24–48 hours to discuss your needs and match you with the most suitable available tutor in your area.' },
  { q: 'What subjects can tutors cover?', a: 'Kopa360 tutors cover a wide range of subjects across primary and secondary school levels — from Mathematics and Sciences to Languages, Social Studies, and more. Subject availability depends on tutor applications in your area.' },
  { q: 'Are sessions held at home or online?', a: 'Sessions are primarily held in-person at your home or a mutually agreed location. The exact arrangement is confirmed during the matching process.' },
  { q: 'What if the assigned tutor is not a good fit?', a: 'Your satisfaction matters. If a tutor is not the right fit for your child, contact the Kopa360 team and we will work to find a better match at no additional hassle.' },
]

export default function ParentsPupils() {
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({ parentName: '', email: '', phone: '', location: '', childLevel: '', subjects: '', schedule: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    const subject = `Tutor Request — ${formData.parentName} (${formData.location})`
    const body = `TUTOR REQUEST\n==========================\nParent/Guardian Name: ${formData.parentName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nChild's Class/Level: ${formData.childLevel}\nSubject(s) Needed: ${formData.subjects}\nPreferred Schedule: ${formData.schedule}\nAdditional Notes: ${formData.notes || 'N/A'}\n==========================\nSubmitted via Kopa360 Website`
    window.location.href = `mailto:sundaydigitals@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setTimeout(() => { setSubmitted(true); setSubmitting(false) }, 1000)
  }

  return (
    <div>
      {/* HERO */}
      <section style={{
        minHeight: '65vh', background: 'var(--off-white)',
        display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden',
        borderBottom: '1px solid #ede9de',
      }}>
        <div style={{ position: 'absolute', right: '-5%', top: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(26,66,35,0.04) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '9rem 1.5rem 5rem', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '660px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(26,66,35,0.08)', border: '1px solid rgba(26,66,35,0.15)', borderRadius: '100px', padding: '0.4rem 1rem', marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--green-800)', fontSize: '0.8rem', fontWeight: '600' }}>👨‍👩‍👧 For Parents & Pupils</span>
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: '900', fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', color: 'var(--green-950)', marginBottom: '1.25rem' }}>
              Find a Qualified, Vetted<br /><span style={{ color: 'var(--green-800)' }}>Tutor for Your Child.</span>
            </h1>
            <p style={{ color: '#6b7280', fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '540px', marginBottom: '2.5rem' }}>
              Kopa360 connects your family with accredited, university-educated corps members who are passionate about education and committed to your child's academic growth.
            </p>
            <a href="#request" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem', background: 'var(--green-800)', color: 'white' }}>
              Request a Tutor <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>Simple Process</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: 'var(--green-950)' }}>
              How It Works for Parents
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { num: '1', icon: '📝', title: 'Submit Request', desc: 'Fill out the form below with your child\'s details, subjects needed, and your preferred schedule.' },
              { num: '2', icon: '🤝', title: 'Get Matched', desc: 'The Kopa360 team reviews your request and matches you with the most suitable accredited tutor in your area.' },
              { num: '3', icon: '📚', title: 'Sessions Begin', desc: 'Your matched tutor reaches out, you confirm the arrangement, and tutoring sessions begin.' },
            ].map(step => (
              <div key={step.num} style={{ textAlign: 'center', padding: '2rem 1.5rem', background: 'var(--off-white)', borderRadius: '16px', border: '1px solid #ede9de' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{step.icon}</div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: 'var(--green-900)', fontWeight: '700', marginBottom: '0.5rem' }}>Step {step.num}</div>
                <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: 'var(--green-950)', marginBottom: '0.6rem' }}>{step.title}</h4>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.7' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KOPA360 TUTOR */}
      <section style={{ background: 'var(--green-950)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>Our Standards</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: 'white' }}>
              Why Choose a Kopa360 Tutor?
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '✅', title: 'Vetted & Accredited', desc: 'Every tutor passes a rigorous application, credential check, and physical accreditation before being listed.' },
              { icon: '🎓', title: 'Minimum 2:1 Degree', desc: 'All tutors are university graduates with at least a Second Class Upper degree — ensuring subject mastery.' },
              { icon: '❤️', title: 'Passionate Educators', desc: 'Our tutors choose to teach because they care — not just for the income, but for the impact they create.' },
              { icon: '🔍', title: 'Monitored Quality', desc: 'The Kopa360 team monitors tutor performance and is available to address any concerns promptly.' },
            ].map(item => (
              <div key={item.title} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h4 style={{ fontFamily: 'Playfair Display, serif', color: 'white', marginBottom: '0.6rem', fontSize: '1.1rem' }}>{item.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUEST FORM */}
      <section style={{ background: 'var(--off-white)', padding: '5rem 0' }} id="request">
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>Get Started</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: 'var(--green-950)', marginBottom: '0.75rem' }}>
              Request a Tutor
            </h2>
            <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Fill in the details below and we'll match you with the right tutor within 24–48 hours.</p>
          </div>

          {submitted ? (
            <div style={{ background: 'white', borderRadius: '20px', padding: '3rem', textAlign: 'center', border: '1px solid rgba(26,66,35,0.2)' }}>
              <CheckCircle size={52} color="var(--green-700)" style={{ marginBottom: '1.25rem' }} />
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', color: 'var(--green-950)', marginBottom: '0.75rem' }}>Request Received!</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.75', maxWidth: '420px', margin: '0 auto' }}>
                Thank you! The Kopa360 team will review your request and reach out within 24–48 hours with a tutor match.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', border: '1px solid #ede9de' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Parent/Guardian Full Name *</label>
                  <input required className="form-input" type="text" name="parentName" value={formData.parentName} onChange={handleChange} placeholder="Your full name" />
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
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Location (State / City) *</label>
                  <input required className="form-input" type="text" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Ikeja, Lagos State" />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Child's Class / Level *</label>
                  <input required className="form-input" type="text" name="childLevel" value={formData.childLevel} onChange={handleChange} placeholder="e.g. JSS2, SS3, Primary 5" />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Subject(s) Needed *</label>
                  <input required className="form-input" type="text" name="subjects" value={formData.subjects} onChange={handleChange} placeholder="e.g. Mathematics, English, Chemistry" />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Preferred Schedule *</label>
                  <input required className="form-input" type="text" name="schedule" value={formData.schedule} onChange={handleChange} placeholder="e.g. Monday & Wednesday evenings, Saturday mornings" />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Additional Notes (Optional)</label>
                  <textarea className="form-input" name="notes" value={formData.notes} onChange={handleChange} rows={3} placeholder="Any specific requirements, concerns, or information that would help us find the best tutor match..." style={{ resize: 'vertical' }} />
                </div>
              </div>
              <button type="submit" disabled={submitting} className="btn-primary" style={{ marginTop: '1.75rem', width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '1rem', background: 'var(--green-800)' }}>
                {submitting ? 'Submitting...' : 'Request a Tutor'} {!submitting && <ArrowRight size={18} />}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>FAQs</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: 'var(--green-950)' }}>
              Questions from Parents
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: 'var(--off-white)', borderRadius: '12px', border: '1px solid #ede9de', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', padding: '1.25rem 1.5rem', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}
                >
                  <span style={{ fontWeight: '600', fontSize: '0.95rem', color: 'var(--green-950)', lineHeight: '1.4' }}>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} color="var(--green-800)" style={{ flexShrink: 0 }} /> : <ChevronDown size={18} color="#9ca3af" style={{ flexShrink: 0 }} />}
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 1.5rem 1.25rem' }}>
                    <p style={{ color: '#6b7280', lineHeight: '1.75', fontSize: '0.9rem' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
