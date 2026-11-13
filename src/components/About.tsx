import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { DATA } from '../data/resume'
import { useTheme } from '../context/ThemeContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { MapPin, Mail, Code, Cloud, Puzzle, Send } from 'lucide-react'

const strengths = [
  { Icon: Code, title: 'Full-stack development', desc: 'React · Next.js · Node.js · Express · PostgreSQL' },
  { Icon: Puzzle, title: 'Problem solving', desc: '700+ DSA · Codeforces Pupil · CodeChef 2★' },
  { Icon: Cloud, title: 'Cloud & DevOps', desc: '3× AWS certified · CI/CD · Vercel · Render' },
  { Icon: Send, title: 'Currently seeking', desc: 'SWE internships & full-time roles' },
]

const About: React.FC = () => {
  const { isDark } = useTheme()
  const reduced = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const fadeUp = (i: number) => reduced ? {} : {
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.5, delay: i * 0.08 },
  }

  const textColor = isDark ? '#EDEEF0' : '#17181C'
  const subColor = isDark ? '#9198A3' : '#565B66'
  const borderColor = isDark ? 'rgba(255,255,255,0.09)' : 'rgba(23,24,28,0.1)'

  return (
    <section id="about" ref={ref} className="section-padding">
      <div className="container-custom">

        <motion.div {...fadeUp(0)} style={{ marginBottom: '3.5rem' }}>
          <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-block' }}>about</span>
          <h2 className="section-title" style={{ color: textColor }}>Who I am</h2>
          <p className="section-subtitle">Third-year B.Tech IT student & full-stack developer dedicated to shipping robust production applications and solving complex algorithmic challenges.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="about-grid">

          {/* Left: strengths */}
          <div>
            <motion.p {...fadeUp(1)} style={{ color: subColor, lineHeight: 1.85, fontSize: '1rem', marginBottom: '2rem' }}>
              {DATA.personal.summary}
            </motion.p>

            <motion.div {...fadeUp(2)} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
              {[
                { Icon: MapPin, label: DATA.personal.location },
                { Icon: Mail, label: DATA.personal.email },
              ].map(({ Icon, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, color: subColor, fontSize: '0.88rem' }}>
                  <Icon size={15} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                  {label}
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(3)} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px' }} className="strengths-grid surface">
              {strengths.map(({ Icon, title, desc }, i) => (
                <div
                  key={title}
                  style={{
                    padding: '1.25rem',
                    borderRight: i % 2 === 0 ? `1px solid ${borderColor}` : 'none',
                    borderBottom: i < 2 ? `1px solid ${borderColor}` : 'none',
                  }}
                >
                  <Icon size={17} color="var(--color-accent)" style={{ marginBottom: '0.6rem' }} />
                  <p style={{ fontWeight: 600, fontSize: '0.88rem', color: textColor, marginBottom: '0.2rem' }}>{title}</p>
                  <p style={{ fontSize: '0.78rem', color: subColor }}>{desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: journey timeline */}
          <div>
            <motion.h3 {...fadeUp(1)} style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, fontSize: '1.3rem', color: textColor, marginBottom: '2rem' }}>
              Timeline
            </motion.h3>
            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
              <div className="timeline-line" />
              {DATA.milestones.map((m, i) => (
                <motion.div
                  key={m.year + m.title}
                  {...(reduced ? {} : {
                    initial: { opacity: 0, x: -14 },
                    animate: inView ? { opacity: 1, x: 0 } : {},
                    transition: { duration: 0.4, delay: 0.15 + i * 0.08 },
                  })}
                  style={{ display: 'flex', gap: '1rem', marginBottom: '1.75rem', position: 'relative' }}
                >
                  <div className="timeline-dot" style={{ position: 'absolute', left: -27, top: 5 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                      <p style={{ fontWeight: 600, color: textColor, fontSize: '0.92rem' }}>{m.title}</p>
                      <span className="ledger-figure" style={{ fontSize: '0.72rem', color: 'var(--color-accent)' }}>{m.year}</span>
                    </div>
                    <p style={{ color: subColor, fontSize: '0.82rem', lineHeight: 1.6 }}>{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 520px) {
          .strengths-grid { grid-template-columns: 1fr !important; }
          .strengths-grid > div { border-right: none !important; border-bottom: 1px solid ${borderColor} !important; }
          .strengths-grid > div:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  )
}

export default About
