import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Zap, Network, Users, GraduationCap, Star, ChevronRight } from 'lucide-react'

const testimonials = [
  { name: 'Chioma Okafor', role: 'Ex-Corps Member, Lagos', quote: 'Kopa360 gave me purpose during my service year. I earned extra income while impacting the lives of young students.' },
  { name: 'Emeka Nwosu', role: 'Corps Member, Abuja', quote: 'The structure and support from TutorLink made tutoring feel professional. I am proud to be part of this network.' },
  { name: 'Fatima Aliyu', role: 'Parent, Kano', quote: 'Finding a qualified, vetted tutor for my daughter was seamless. The improvement in her grades speaks for itself.' },
]

const journeySteps = [
  { step: '01', title: 'Corps Member', sub: 'Your service year begins', color: '#e8b800' },
  { step: '02', title: 'Tutor', sub: 'TutorLink — Impact & Income', color: '#f5c842' },
  { step: '03', title: 'SkillzBridge Learner', sub: 'Digital skills training', color: '#e8b800' },
  { step: '04', title: 'Coach / Mentor', sub: 'Train the next generation', color: '#f5c842' },
  { step: '05', title: 'Advocate', sub: 'Champion the mission', color: '#e8b800' },
  { step: '06', title: 'The Network', sub: 'Legacy & Leadership', color: '#c9a000' },
]

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section style={{
        minHeight: '100vh', background: 'var(--green-950)', position: 'relative',
        display: 'flex', alignItems: 'center', overflow: 'hidden',
      }}>
        {/* Background pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.06,
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(232,184,0,0.8) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        {/* Glow */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(232,184,0,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', left: '-5%', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(26,66,35,0.6) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '8rem 1.5rem 5rem', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '760px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(232,184,0,0.1)', border: '1px solid rgba(232,184,0,0.3)', borderRadius: '100px', padding: '0.4rem 1rem', marginBottom: '2rem' }}>
              <span style={{ width: '6px', height: '6px', background: 'var(--gold-500)', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ color: 'var(--gold-500)', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.08em' }}>Est. 2019 — Reigniting the Future</span>
            </div>

            <h1 style={{
              fontFamily: 'Playfair Display, serif', fontWeight: '900',
              fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: '1.1',
              color: 'white', marginBottom: '1.5rem',
            }}>
              Your Service Year<br />
              <span style={{ color: 'var(--gold-500)' }}>Is Just the Beginning.</span>
            </h1>

            <p style={{
              color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              lineHeight: '1.8', maxWidth: '580px', marginBottom: '2.5rem',
            }}>
              Kopa360 is a growing ecosystem that turns corps members into tutors, digital professionals, and lifelong networkers — building the Nigeria of tomorrow, today.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to="/tutorlink#apply" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
                Become a Tutor <ArrowRight size={18} />
              </Link>
              <Link to="/#ecosystem" className="btn-outline" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
                Explore Kopa360
              </Link>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '3.5rem' }}>
              {[
                { num: '2019', label: 'Founded' },
                { num: '3', label: 'Programs' },
                { num: '30yr', label: 'Vision' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: '700', color: 'var(--gold-500)' }}>{stat.num}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', letterSpacing: '0.05em' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          animation: 'bounce 2s infinite',
        }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(232,184,0,0.5), transparent)' }} />
        </div>
        <style>{`@keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(6px)} }`}</style>
      </section>

      {/* WHAT IS KOPA360 */}
      <section style={{ background: 'var(--off-white)', padding: '6rem 0' }} id="about">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p className="section-tag" style={{ marginBottom: '1rem' }}>Our Story</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: '700', color: 'var(--green-950)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                Born from NYSC.<br />Built for the Future.
              </h2>
              <p style={{ color: '#4a5568', lineHeight: '1.85', marginBottom: '1.25rem', fontSize: '0.975rem' }}>
                Kopa360 was born in 2019 from an NYSC experience — a firsthand observation of the gap between the potential of corps members and the support systems available to them. What started as a simple tutoring connection platform has grown into a structured, multi-arm ecosystem.
              </p>
              <p style={{ color: '#4a5568', lineHeight: '1.85', marginBottom: '2rem', fontSize: '0.975rem' }}>
                Today, Kopa360 is building a 30-year vision: transforming every corps member into a skilled professional, a community builder, and ultimately, a legacy maker through TutorLink, SkillzBridge, and The Network.
              </p>
              <Link to="/tutorlink" className="btn-outline-gold">
                Learn about TutorLink <ArrowRight size={16} />
              </Link>
            </div>

            {/* Visual card */}
            <div style={{ position: 'relative' }}>
              <div style={{
                background: 'var(--green-950)', borderRadius: '20px', padding: '3rem 2.5rem',
                border: '1px solid rgba(232,184,0,0.2)',
              }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: 'white', marginBottom: '2rem', fontStyle: 'italic' }}>
                  "A platform that grows with you — from your first day in uniform to your greatest achievement."
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {['Impact lives positively', 'Earn income while serving', 'Build skills that last', 'Connect with a community'].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: '20px', height: '20px', background: 'rgba(232,184,0,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Star size={10} color="var(--gold-500)" fill="var(--gold-500)" />
                      </div>
                      <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative element */}
              <div style={{
                position: 'absolute', top: '-16px', right: '-16px', width: '80px', height: '80px',
                background: 'var(--gold-500)', borderRadius: '16px', zIndex: -1, opacity: 0.4,
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* THREE ARMS */}
      <section style={{ background: 'var(--gray-light)', padding: '6rem 0' }} id="ecosystem">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>The Ecosystem</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: '700', color: 'var(--green-950)' }}>
              Three Arms. One Mission.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {/* TutorLink */}
            <div className="card-hover" style={{
              background: 'var(--green-900)', borderRadius: '20px', padding: '2.5rem',
              border: '1px solid rgba(232,184,0,0.15)', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '120px', background: 'radial-gradient(circle, rgba(232,184,0,0.08) 0%, transparent 70%)' }} />
              <div style={{ width: '52px', height: '52px', background: 'rgba(232,184,0,0.15)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <BookOpen size={24} color="var(--gold-500)" />
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: 'white', marginBottom: '0.75rem' }}>TutorLink</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginBottom: '2rem', fontSize: '0.9rem' }}>
                Connecting qualified corps members with families who need tutors. Earn extra income, build experience, and create real educational impact during your service year.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', background: 'rgba(232,184,0,0.1)', borderRadius: '100px', padding: '0.25rem 0.75rem', marginBottom: '1.5rem' }}>
                <span style={{ color: 'var(--gold-500)', fontSize: '0.75rem', fontWeight: '600' }}>● Active — Apply Now</span>
              </div>
              <br />
              <Link to="/tutorlink" className="btn-primary" style={{ padding: '0.7rem 1.5rem', fontSize: '0.875rem' }}>
                Learn More <ChevronRight size={16} />
              </Link>
            </div>

            {/* SkillzBridge */}
            <div className="card-hover" style={{
              background: 'white', borderRadius: '20px', padding: '2.5rem',
              border: '1px solid #e8e5db', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '120px', background: 'radial-gradient(circle, rgba(26,66,35,0.05) 0%, transparent 70%)' }} />
              <div style={{ width: '52px', height: '52px', background: 'rgba(26,66,35,0.08)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Zap size={24} color="var(--green-800)" />
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: 'var(--green-950)', marginBottom: '0.75rem' }}>SkillzBridge</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.7', marginBottom: '2rem', fontSize: '0.9rem' }}>
                Equipping corps members with in-demand digital skills — from marketing to data analytics — to eliminate post-service unemployment and open new income streams.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', background: 'rgba(232,184,0,0.12)', borderRadius: '100px', padding: '0.25rem 0.75rem', marginBottom: '1.5rem' }}>
                <span style={{ color: '#c9a000', fontSize: '0.75rem', fontWeight: '600' }}>⏳ Launching 2027/28</span>
              </div>
              <br />
              <Link to="/skillzbridge" className="btn-outline-gold" style={{ padding: '0.7rem 1.5rem', fontSize: '0.875rem' }}>
                Join Waitlist <ChevronRight size={16} />
              </Link>
            </div>

            {/* The Network */}
            <div className="card-hover" style={{
              background: 'var(--green-950)', borderRadius: '20px', padding: '2.5rem',
              border: '1px solid rgba(232,184,0,0.3)', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(232,184,0,0.05) 0%, transparent 60%)' }} />
              <div style={{ width: '52px', height: '52px', background: 'rgba(232,184,0,0.12)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', position: 'relative' }}>
                <Network size={24} color="var(--gold-500)" />
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: 'white', marginBottom: '0.75rem', position: 'relative' }}>The Network</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginBottom: '2rem', fontSize: '0.9rem', position: 'relative' }}>
                The destination. An exclusive community of successful ex-corps members — mentors, partners, sponsors, and collaborators — united by purpose and legacy.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', background: 'rgba(232,184,0,0.1)', borderRadius: '100px', padding: '0.25rem 0.75rem', marginBottom: '1.5rem', position: 'relative' }}>
                <span style={{ color: 'var(--gold-500)', fontSize: '0.75rem', fontWeight: '600' }}>🔒 Invite Only</span>
              </div>
              <br style={{ position: 'relative' }} />
              <Link to="/the-network" className="btn-outline" style={{ padding: '0.7rem 1.5rem', fontSize: '0.875rem', position: 'relative' }}>
                Explore <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section style={{ background: 'var(--off-white)', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>Find Your Path</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: '700', color: 'var(--green-950)' }}>
              Who is Kopa360 For?
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: <GraduationCap size={28} />, title: 'Corps Members', desc: 'Become a tutor, earn income, and start your journey in the Kopa360 ecosystem.', cta: 'Become a Tutor', path: '/tutorlink' },
              { icon: <Users size={28} />, title: 'Parents & Pupils', desc: 'Find a qualified, vetted, and accredited tutor for your child — matched to your needs.', cta: 'Find a Tutor', path: '/parents' },
              { icon: <Zap size={28} />, title: 'Skills Learners', desc: 'Join the waitlist for SkillzBridge and be first to access digital skills training.', cta: 'Join Waitlist', path: '/skillzbridge' },
              { icon: <Network size={28} />, title: 'Ex-Corps Members', desc: 'Mentor, partner, sponsor, or collaborate. Your success can fuel the next generation.', cta: 'Join The Network', path: '/the-network' },
            ].map(item => (
              <div key={item.title} className="card-hover" style={{
                background: 'white', borderRadius: '16px', padding: '2rem',
                border: '1px solid #ede9de',
              }}>
                <div style={{ color: 'var(--green-800)', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: 'var(--green-950)', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>{item.desc}</p>
                <Link to={item.path} style={{ color: 'var(--green-800)', fontWeight: '700', fontSize: '0.875rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  {item.cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY LADDER */}
      <section style={{ background: 'var(--green-950)', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(232,184,0,0.8) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>The 30-Year Vision</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: '700', color: 'white' }}>
              Your Journey with Kopa360
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '500px', margin: '1rem auto 0', fontSize: '0.95rem', lineHeight: '1.7' }}>
              Every great journey begins with a single step. Yours starts with a khaki uniform and a desire to make a difference.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
            {journeySteps.map((step, i) => (
              <div key={step.step} style={{
                textAlign: 'center', padding: '1.75rem 1rem',
                background: i === journeySteps.length - 1 ? 'rgba(232,184,0,0.12)' : 'rgba(255,255,255,0.04)',
                borderRadius: '16px',
                border: i === journeySteps.length - 1 ? '1px solid rgba(232,184,0,0.4)' : '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--gold-500)',
                  letterSpacing: '0.1em', marginBottom: '1rem',
                }}>{step.step}</div>
                <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: 'white', marginBottom: '0.4rem' }}>{step.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', lineHeight: '1.5' }}>{step.sub}</p>
                {i < journeySteps.length - 1 && (
                  <div style={{ color: 'var(--gold-500)', marginTop: '1rem', fontSize: '1.2rem' }}>↓</div>
                )}
                {i === journeySteps.length - 1 && (
                  <div style={{ color: 'var(--gold-500)', marginTop: '1rem' }}>
                    <Star size={16} fill="var(--gold-500)" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KOPA360 */}
      <section style={{ background: 'var(--off-white)', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>Our Values</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: '700', color: 'var(--green-950)' }}>
              Why Choose Kopa360?
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🌟', title: 'Impact', desc: 'Change the life of a child while changing yours. Every tutoring session creates real educational impact in communities across Nigeria.' },
              { icon: '💰', title: 'Income', desc: 'Earn meaningful extra income during your service year. Teaching pays — both financially and in experience.' },
              { icon: '🤝', title: 'Community', desc: 'Join a growing ecosystem of like-minded corps members, educators, and professionals who support each other.' },
              { icon: '🚀', title: 'Growth', desc: 'The skills, credentials, and connections you build with Kopa360 follow you far beyond your service year.' },
            ].map(item => (
              <div key={item.title} style={{
                background: 'white', borderRadius: '16px', padding: '2rem',
                border: '1px solid #ede9de',
              }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: 'var(--green-950)', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.75' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: 'var(--gray-light)', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>Testimonials</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: '700', color: 'var(--green-950)' }}>
              What People Are Saying
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} className="card-hover" style={{
                background: 'white', borderRadius: '16px', padding: '2rem',
                border: '1px solid #ede9de',
              }}>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} color="var(--gold-500)" fill="var(--gold-500)" />)}
                </div>
                <p style={{ color: '#4a5568', lineHeight: '1.75', marginBottom: '1.5rem', fontSize: '0.9rem', fontStyle: 'italic' }}>"{t.quote}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: 'var(--green-800)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontWeight: '700', fontSize: '0.9rem', fontFamily: 'Playfair Display, serif',
                    flexShrink: 0,
                  }}>{t.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--green-950)' }}>{t.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: 'var(--green-900)', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(232,184,0,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', position: 'relative' }}>
          <p className="section-tag" style={{ marginBottom: '1rem' }}>Take the First Step</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: '700', color: 'white', marginBottom: '1.25rem', lineHeight: '1.2' }}>
            Ready to Reignite<br />Your Future?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '2.5rem', fontSize: '1rem' }}>
            Join hundreds of corps members who are already making an impact, earning income, and building a future through the Kopa360 ecosystem.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/tutorlink#apply" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
              Apply as a Tutor <ArrowRight size={18} />
            </Link>
            <Link to="/skillzbridge" className="btn-outline" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
