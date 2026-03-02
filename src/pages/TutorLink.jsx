import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react'

const faqs = [
  { q: 'Who can apply to become a Kopa360 tutor?', a: 'Any currently serving NYSC corps member with a minimum of Second Class Upper (2:1) division is eligible to apply. You must also be passionate about teaching and able to commit at least 2-3 sessions per week.' },
  { q: 'How does the vetting and accreditation process work?', a: 'After submitting your application, the Kopa360 team reviews your details. Shortlisted applicants are contacted for a physical accreditation session where credentials are verified. Once accredited, you are officially listed on the platform.' },
  { q: 'How much can I earn as a Kopa360 tutor?', a: 'Earnings vary based on the number of sessions, subjects, and location. The Kopa360 team will provide detailed earning information upon accreditation.' },
  { q: 'Do I need prior teaching experience?', a: 'No prior teaching experience is required. However, you must be knowledgeable in the subject(s) you wish to teach and passionate about mentoring young students.' },
  { q: 'Can I tutor subjects outside my area of study?', a: 'Yes, as long as you can demonstrate competence in those subjects during the vetting process.' },
  { q: 'What happens after my NYSC service year?', a: 'Ex-corps members who tutored through TutorLink are eligible to progress into the SkillzBridge and eventually The Network — continuing their journey within the Kopa360 ecosystem.' },
]

const steps = [
  { num: '1', title: 'Apply', desc: 'Fill out the registration form below with your details and qualifications.' },
  { num: '2', title: 'Vetted', desc: 'The Kopa360 team reviews your application and credentials.' },
  { num: '3', title: 'Accredited', desc: 'Shortlisted applicants are invited for a physical accreditation session.' },
  { num: '4', title: 'Listed', desc: 'Once accredited, your profile is added to the TutorLink directory.' },
  { num: '5', title: 'Matched', desc: 'You are matched with families based on location, subjects, and availability.' },
  { num: '6', title: 'Earn', desc: 'Begin tutoring sessions and earn extra income throughout your service year.' },
]

export default function TutorLink() {
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', stateOfDeployment: '',
    institution: '', courseOfStudy: '', classOfDegree: '',
    subjects: '', availability: '', motivation: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    const subject = `New TutorLink Application — ${formData.fullName}`
    const body = `
NEW TUTORLINK APPLICATION
==========================
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
State of Deployment: ${formData.stateOfDeployment}
Institution Attended: ${formData.institution}
Course of Study: ${formData.courseOfStudy}
Class of Degree: ${formData.classOfDegree}
Subject Areas: ${formData.subjects}
Availability: ${formData.availability}
Motivation: ${formData.motivation}
==========================
Submitted via Kopa360 Website
    `.trim()

    try {
      // Using mailto as fallback until EmailJS is configured
      const mailtoLink = `mailto:sundaydigitals@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoLink
      setTimeout(() => {
        setSubmitted(true)
        setSubmitting(false)
      }, 1000)
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.')
      setSubmitting(false)
    }
  }

  return (
    <div>
      {/* HERO */}
      <section style={{
        minHeight: '70vh', background: 'var(--green-950)', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(232,184,0,0.8) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div style={{ position: 'absolute', right: '-10%', top: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(232,184,0,0.06) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '9rem 1.5rem 5rem', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '680px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(232,184,0,0.1)', border: '1px solid rgba(232,184,0,0.3)', borderRadius: '100px', padding: '0.4rem 1rem', marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--gold-500)', fontSize: '0.8rem', fontWeight: '600' }}>● TutorLink — Now Active</span>
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: '900', fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', color: 'white', marginBottom: '1.25rem' }}>
              Turn Your Service Year Into<br /><span style={{ color: 'var(--gold-500)' }}>Impact & Income.</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '560px', marginBottom: '2.5rem' }}>
              TutorLink connects qualified corps members with families who need tutors. Get vetted, get listed, and start earning — all while making a real difference in the lives of Nigerian students.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="#apply" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
                Apply as a Tutor <ArrowRight size={18} />
              </a>
              <Link to="/parents" className="btn-outline" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
                I'm a Parent
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS TUTORLINK */}
      <section style={{ background: 'var(--off-white)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p className="section-tag" style={{ marginBottom: '1rem' }}>What is TutorLink</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: 'var(--green-950)', marginBottom: '1.25rem' }}>
                Structured. Vetted. Impactful.
              </h2>
              <p style={{ color: '#4a5568', lineHeight: '1.85', marginBottom: '1rem', fontSize: '0.975rem' }}>
                TutorLink is Kopa360's flagship program — a structured platform that connects qualified corps members with Nigerian families seeking excellent private tutors for their children.
              </p>
              <p style={{ color: '#4a5568', lineHeight: '1.85', fontSize: '0.975rem' }}>
                Unlike informal tutoring arrangements, every TutorLink tutor goes through a rigorous vetting and physical accreditation process before being listed. This ensures quality, trust, and accountability for both tutors and families.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { num: '2:1+', label: 'Minimum Qualification' },
                { num: '100%', label: 'Physically Accredited' },
                { num: '2–3x', label: 'Sessions Per Week' },
                { num: '🇳🇬', label: 'Nationwide' },
              ].map(stat => (
                <div key={stat.label} style={{ background: 'var(--green-950)', borderRadius: '16px', padding: '1.75rem', textAlign: 'center', border: '1px solid rgba(232,184,0,0.15)' }}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: 'var(--gold-500)', marginBottom: '0.4rem' }}>{stat.num}</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: 'var(--gray-light)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>The Process</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: 'var(--green-950)' }}>
              How TutorLink Works
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{ textAlign: 'center', padding: '1.75rem 1rem' }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  background: 'var(--green-950)', border: '2px solid rgba(232,184,0,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1rem', fontFamily: 'Playfair Display, serif',
                  fontWeight: '700', fontSize: '1.1rem', color: 'var(--gold-500)',
                }}>{step.num}</div>
                {i < steps.length - 1 && (
                  <div style={{ display: 'none' }} />
                )}
                <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>{step.title}</h4>
                <p style={{ color: '#6b7280', fontSize: '0.8rem', lineHeight: '1.6' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section style={{ background: 'var(--off-white)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            <div>
              <p className="section-tag" style={{ marginBottom: '1rem' }}>Eligibility</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: 'var(--green-950)', marginBottom: '1.5rem' }}>
                Who Can Apply?
              </h2>
              <p style={{ color: '#4a5568', lineHeight: '1.85', fontSize: '0.975rem' }}>
                We set high standards because our tutors represent Kopa360 to families across Nigeria. Meeting these requirements ensures quality education and builds trust in the platform.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Must be a currently serving NYSC corps member',
                'Minimum Second Class Upper (2:1) degree — higher chances of acceptance',
                'Passionate about teaching and positively impacting students',
                'Available for at least 2–3 tutoring sessions per week',
                'Willing to undergo physical accreditation and credential verification',
                'Good communication skills and professional conduct',
              ].map((req, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} color="var(--green-700)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ color: '#4a5568', fontSize: '0.925rem', lineHeight: '1.65' }}>{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ background: 'var(--green-950)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>What You Gain</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: 'white' }}>
              Benefits of Being a Kopa360 Tutor
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '💰', title: 'Extra Income', desc: 'Earn meaningful extra income during your service year through structured tutoring sessions.' },
              { icon: '📚', title: 'Teaching Experience', desc: 'Build a track record of teaching excellence that strengthens your CV and career prospects.' },
              { icon: '🏅', title: 'Credibility', desc: "A Kopa360 accreditation badge signals quality and professionalism to families and future employers." },
              { icon: '🌐', title: 'Community Access', desc: 'Become part of a growing ecosystem — first step toward SkillzBridge and eventually The Network.' },
            ].map(item => (
              <div key={item.title} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h4 style={{ fontFamily: 'Playfair Display, serif', color: 'white', marginBottom: '0.6rem', fontSize: '1.1rem' }}>{item.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR PARENTS TEASER */}
      <section style={{ background: 'var(--off-white)', padding: '4rem 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '3rem', border: '1px solid #ede9de' }}>
            <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>👨‍👩‍👧</p>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: 'var(--green-950)', marginBottom: '0.75rem' }}>
              Are You a Parent?
            </h3>
            <p style={{ color: '#6b7280', lineHeight: '1.75', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
              Looking for a qualified, vetted tutor for your child? Kopa360 connects you with accredited corps members who are passionate educators.
            </p>
            <Link to="/parents" className="btn-primary">
              Request a Tutor <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section style={{ background: 'var(--gray-light)', padding: '5rem 0' }} id="apply">
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>Join TutorLink</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: 'var(--green-950)', marginBottom: '1rem' }}>
              Apply to Become a Tutor
            </h2>
            <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Fill out the form below and the Kopa360 team will be in touch.</p>
          </div>

          {submitted ? (
            <div style={{ background: 'white', borderRadius: '20px', padding: '3rem', textAlign: 'center', border: '1px solid rgba(26,66,35,0.2)' }}>
              <CheckCircle size={52} color="var(--green-700)" style={{ marginBottom: '1.25rem' }} />
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', color: 'var(--green-950)', marginBottom: '0.75rem' }}>Application Submitted!</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.75', maxWidth: '440px', margin: '0 auto' }}>
                Thank you for applying to TutorLink. Your application has been received and the Kopa360 team will review it and be in touch with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', border: '1px solid #ede9de' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Full Name *</label>
                  <input required className="form-input" type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="e.g. Chukwuemeka Obi" />
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
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>State of Deployment *</label>
                  <input required className="form-input" type="text" name="stateOfDeployment" value={formData.stateOfDeployment} onChange={handleChange} placeholder="e.g. Lagos State" />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Institution Attended *</label>
                  <input required className="form-input" type="text" name="institution" value={formData.institution} onChange={handleChange} placeholder="e.g. University of Lagos" />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Course of Study *</label>
                  <input required className="form-input" type="text" name="courseOfStudy" value={formData.courseOfStudy} onChange={handleChange} placeholder="e.g. Computer Science" />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Class of Degree *</label>
                  <select required className="form-input" name="classOfDegree" value={formData.classOfDegree} onChange={handleChange}>
                    <option value="">Select your class of degree</option>
                    <option value="First Class">First Class Honours</option>
                    <option value="Second Class Upper (2:1)">Second Class Upper (2:1)</option>
                    <option value="Second Class Lower (2:2)">Second Class Lower (2:2)</option>
                    <option value="Third Class">Third Class</option>
                    <option value="Pass">Pass</option>
                  </select>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginTop: '0.5rem', background: 'rgba(232,184,0,0.08)', borderRadius: '8px', padding: '0.625rem 0.875rem' }}>
                    <AlertCircle size={15} color="#c9a000" style={{ marginTop: '1px', flexShrink: 0 }} />
                    <p style={{ color: '#8a6e00', fontSize: '0.8rem', lineHeight: '1.5' }}>
                      Applicants with a minimum of <strong>Second Class Upper (2:1)</strong> have a significantly higher chance of being accepted into the TutorLink program.
                    </p>
                  </div>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Subject Areas *</label>
                  <input required className="form-input" type="text" name="subjects" value={formData.subjects} onChange={handleChange} placeholder="e.g. Mathematics, Physics, English Language" />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Availability *</label>
                  <input required className="form-input" type="text" name="availability" value={formData.availability} onChange={handleChange} placeholder="e.g. Weekdays after 4pm, Saturday mornings" />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.875rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>Why do you want to join Kopa360 TutorLink? *</label>
                  <textarea required className="form-input" name="motivation" value={formData.motivation} onChange={handleChange} rows={4} placeholder="Tell us about your motivation and what you hope to achieve as a Kopa360 tutor..." style={{ resize: 'vertical' }} />
                </div>
              </div>

              {error && (
                <div style={{ background: '#fee2e2', borderRadius: '8px', padding: '0.75rem 1rem', marginTop: '1.25rem', color: '#991b1b', fontSize: '0.875rem' }}>
                  {error}
                </div>
              )}

              <button type="submit" disabled={submitting} className="btn-primary" style={{ marginTop: '1.75rem', width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '1rem' }}>
                {submitting ? 'Submitting...' : 'Submit Application'}
                {!submitting && <ArrowRight size={18} />}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--off-white)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>FAQs</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: 'var(--green-950)' }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', border: '1px solid #ede9de', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', padding: '1.25rem 1.5rem', background: 'none', border: 'none',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    cursor: 'pointer', textAlign: 'left', gap: '1rem',
                  }}
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
