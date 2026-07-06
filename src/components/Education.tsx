import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { DATA } from '../data/resume'
import { useTheme } from '../context/ThemeContext'
import { useReducedMotion } from '../hooks/useReducedMotion'

const Education: React.FC = () => {
  const { isDark } = useTheme()
  const reduced = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const textColor = isDark ? '#EDEEF0' : '#17181C'
  const subColor = isDark ? '#9198A3' : '#565B66'

  return (
    <section id="education" ref={ref} style={{ padding: '6rem 0' }}>
      <div className="container-custom">

        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem' }}
        >
          <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-block' }}>education</span>
          <h2 className="section-title" style={{ color: textColor }}>Academic background</h2>
          <p className="section-subtitle">A strong academic foundation complemented by hands-on project experience.</p>
        </motion.div>

        <div style={{ maxWidth: 760 }}>
          {DATA.education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={reduced ? undefined : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="ledger-row"
              style={{ flexDirection: 'column', alignItems: 'stretch', gap: '0.75rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }} className="edu-header">
                <div>
                  <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, fontSize: '1.15rem', color: textColor, marginBottom: '0.25rem' }}>
                    {edu.degree}
                  </h3>
                  <p style={{ color: i === 0 ? 'var(--color-accent)' : subColor, fontWeight: 600, fontSize: '0.86rem' }}>
                    {edu.institution}
                  </p>
                  <p style={{ color: subColor, fontSize: '0.8rem' }}>{edu.location}</p>
                </div>
                <div style={{ textAlign: 'right' }} className="edu-meta">
                  <div style={{ color: subColor, fontSize: '0.8rem', marginBottom: '0.4rem', fontFamily: 'IBM Plex Mono, monospace' }}>
                    {edu.duration}
                  </div>
                  <span className="verdict">{edu.score}</span>
                </div>
              </div>

              {i === 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.25rem' }}>
                  {['Data Structures & Algorithms', 'OOP', 'Web Technologies', 'Database Management', 'Cloud Computing', 'Operating Systems'].map(c => (
                    <span key={c} className="tag">{c}</span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .edu-header { flex-direction: column !important; align-items: flex-start !important; gap: 1rem !important; }
          .edu-meta { text-align: left !important; }
        }
      `}</style>
    </section>
  )
}

export default Education
