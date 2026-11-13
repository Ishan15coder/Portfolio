import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { DATA } from '../data/resume'
import { useTheme } from '../context/ThemeContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { Trophy, Award } from 'lucide-react'

const Achievements: React.FC = () => {
  const { isDark } = useTheme()
  const reduced = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const textColor = isDark ? '#EDEEF0' : '#17181C'
  const subColor = isDark ? '#9198A3' : '#565B66'
  const borderColor = isDark ? 'rgba(255,255,255,0.09)' : 'rgba(23,24,28,0.1)'

  const icpc = DATA.achievements[0]

  return (
    <section id="achievements" ref={ref} className="section-padding">
      <div className="container-custom">

        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem' }}
        >
          <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-block' }}>recognition</span>
          <h2 className="section-title" style={{ color: textColor }}>Achievements & certifications</h2>
          <p className="section-subtitle">Competitive programming milestones and industry-recognized credentials.</p>
        </motion.div>

        {/* Featured Collegiate Achievement: ICPC 2026 */}
        {icpc && (
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginBottom: '3.5rem' }}
          >
            <h3 style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: subColor, marginBottom: '0.75rem' }}>
              Collegiate contest achievement
            </h3>

            <div className="surface" style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 6,
                    background: 'rgba(6, 182, 212, 0.1)',
                    border: '1px solid rgba(6, 182, 212, 0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--color-accent)', flexShrink: 0,
                  }}>
                    <Trophy size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)', color: textColor, marginBottom: '0.25rem' }}>
                      {icpc.title}
                    </h4>
                    <p style={{ color: subColor, fontSize: '0.86rem' }}>
                      Team: <strong style={{ color: textColor }}>{icpc.team}</strong> · {icpc.event}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span className="verdict">{icpc.collegeRank}</span>
                  <span className="tag">{icpc.year}</span>
                </div>
              </div>

              <p style={{ color: subColor, fontSize: '0.9rem', lineHeight: 1.75, maxWidth: 740, marginBottom: '1.75rem' }}>
                {icpc.summary}
              </p>

              {/* ICPC Stat Ledger */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                borderTop: `1px solid ${borderColor}`,
                background: isDark ? 'rgba(255,255,255,0.015)' : 'rgba(0,0,0,0.015)',
              }} className="icpc-stats-grid">
                <div style={{ padding: '1.1rem 1.25rem', borderRight: `1px solid ${borderColor}` }}>
                  <span style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'IBM Plex Mono, monospace', color: subColor, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                    National Rank
                  </span>
                  <span className="ledger-figure" style={{ fontSize: '1.4rem', color: textColor }}>
                    #{icpc.overallRank}
                  </span>
                </div>
                <div style={{ padding: '1.1rem 1.25rem', borderRight: `1px solid ${borderColor}` }}>
                  <span style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'IBM Plex Mono, monospace', color: subColor, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                    KIET Standing
                  </span>
                  <span className="ledger-figure" style={{ fontSize: '1.4rem', color: 'var(--color-accent)' }}>
                    3rd Place
                  </span>
                </div>
                <div style={{ padding: '1.1rem 1.25rem' }}>
                  <span style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'IBM Plex Mono, monospace', color: subColor, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                    Problems Solved
                  </span>
                  <span className="ledger-figure" style={{ fontSize: '1.4rem', color: textColor }}>
                    {icpc.problemsSolved}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* AWS Certifications ledger */}
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.75rem' }}>
            <Award size={15} color="var(--color-accent)" />
            <h3 style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: subColor }}>
              AWS certifications
            </h3>
          </div>

          <div className="ledger">
            {DATA.certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={reduced ? undefined : { opacity: 0, x: -14 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
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

      </div>

      <style>{`
        @media (max-width: 640px) {
          .icpc-stats-grid { grid-template-columns: 1fr !important; }
          .icpc-stats-grid > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.09); }
          .icpc-stats-grid > div:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  )
}

export default Achievements
