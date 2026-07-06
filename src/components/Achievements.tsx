import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { DATA } from '../data/resume'
import { useTheme } from '../context/ThemeContext'
import { useReducedMotion } from '../hooks/useReducedMotion'

const cpHighlights = [
  { title: 'CodeChef 2-Star', desc: 'Rated competitive programmer with a maximum rating of 1439.' },
  { title: '500+ DSA problems', desc: 'Solved across LeetCode, CodeChef, and Codeforces.' },
  { title: '200+ Codeforces problems', desc: 'Consistent participation in rated contests.' },
]

const Achievements: React.FC = () => {
  const { isDark } = useTheme()
  const reduced = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const textColor = isDark ? '#EDEEF0' : '#17181C'
  const subColor = isDark ? '#9198A3' : '#565B66'
  const borderColor = isDark ? 'rgba(255,255,255,0.09)' : 'rgba(23,24,28,0.1)'

  return (
    <section id="achievements" ref={ref} style={{ padding: '6rem 0' }}>
      <div className="container-custom">

        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem' }}
        >
          <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-block' }}>recognition</span>
          <h2 className="section-title" style={{ color: textColor }}>Achievements & certifications</h2>
          <p className="section-subtitle">Credentials earned through dedication and continuous learning.</p>
        </motion.div>

        {/* Certifications ledger */}
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: '3rem' }}
        >
          <h3 style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: subColor, marginBottom: '0.75rem' }}>
            AWS certifications
          </h3>
          <div className="ledger">
            {DATA.certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={reduced ? undefined : { opacity: 0, x: -14 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                className="ledger-row"
              >
                <div>
                  <p style={{ fontWeight: 600, fontSize: '0.95rem', color: textColor, marginBottom: '0.2rem' }}>{cert.title}</p>
                  <p style={{ color: subColor, fontSize: '0.82rem' }}>{cert.issuer}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="verdict">verified</span>
                  <span className="ledger-figure" style={{ fontSize: '0.85rem', color: subColor }}>{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CP highlights */}
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <h3 style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: subColor, marginBottom: '0.75rem' }}>
            Competitive programming highlights
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }} className="cp-highlights surface">
            {cpHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={reduced ? undefined : { opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                style={{
                  padding: '1.5rem',
                  borderRight: i < cpHighlights.length - 1 ? `1px solid ${borderColor}` : 'none',
                }}
              >
                <h4 style={{ fontWeight: 600, fontSize: '0.92rem', color: textColor, marginBottom: '0.4rem' }}>
                  {item.title}
                </h4>
                <p style={{ color: subColor, fontSize: '0.8rem', lineHeight: 1.65 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .cp-highlights { grid-template-columns: 1fr !important; }
          .cp-highlights > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.09); }
          .cp-highlights > div:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  )
}

export default Achievements
