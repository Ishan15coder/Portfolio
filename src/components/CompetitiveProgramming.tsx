import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { DATA } from '../data/resume'
import { useTheme } from '../context/ThemeContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { ExternalLink } from 'lucide-react'

const CompetitiveProgramming: React.FC = () => {
  const { isDark } = useTheme()
  const reduced = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  const textColor = isDark ? '#EDEEF0' : '#17181C'
  const subColor = isDark ? '#9198A3' : '#565B66'
  const borderColor = isDark ? 'rgba(255,255,255,0.09)' : 'rgba(23,24,28,0.1)'

  const stats = [
    { label: 'DSA problems solved', value: '500+' },
    { label: 'Codeforces problems', value: '200+' },
    { label: 'CodeChef max rating', value: '1439' },
    { label: 'CodeChef rank', value: '2★' },
  ]

  return (
    <section id="cp" ref={ref} style={{ padding: '6rem 0' }}>
      <div className="container-custom">

        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-block' }}>competitive programming</span>
          <h2 className="section-title" style={{ color: textColor }}>Problem solving</h2>
          <p className="section-subtitle">{DATA.competitiveProgramming.highlight}</p>
        </motion.div>

        {/* Stat ledger */}
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '2.5rem' }}
          className="cp-stats surface"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} style={{
              padding: '1.5rem',
              borderRight: i < stats.length - 1 ? `1px solid ${borderColor}` : 'none',
            }}>
              <div className="ledger-figure" style={{ fontSize: '1.9rem', color: textColor, lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ color: subColor, fontSize: '0.78rem', marginTop: '0.5rem' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Platform rows */}
        <div className="ledger">
          {DATA.competitiveProgramming.platforms.map((platform, i) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={reduced ? undefined : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="ledger-row"
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.25rem' }}>
                <span style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, fontSize: '1.15rem', color: textColor }}>
                  {platform.name}
                </span>
                <span className="verdict">{platform.badge.toLowerCase()}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                <span style={{ color: subColor, fontSize: '0.82rem', maxWidth: 340, textAlign: 'right', display: 'none' }} className="cp-detail">{platform.detail}</span>
                {platform.rating !== platform.badge && (
                  <span className="ledger-figure" style={{ fontSize: '1.2rem', color: 'var(--color-accent)' }}>{platform.rating}</span>
                )}
                <ExternalLink size={13} color={subColor} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .cp-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .cp-stats > div:nth-child(2) { border-right: none !important; }
        }
        @media (min-width: 640px) {
          .cp-detail { display: block !important; }
        }
      `}</style>
    </section>
  )
}

export default CompetitiveProgramming
