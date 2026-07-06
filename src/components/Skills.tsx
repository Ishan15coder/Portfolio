import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { DATA } from '../data/resume'
import { useTheme } from '../context/ThemeContext'
import { useReducedMotion } from '../hooks/useReducedMotion'

const Skills: React.FC = () => {
  const { isDark } = useTheme()
  const reduced = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const textColor = isDark ? '#EDEEF0' : '#17181C'
  const subColor = isDark ? '#9198A3' : '#565B66'
  const borderColor = isDark ? 'rgba(255,255,255,0.09)' : 'rgba(23,24,28,0.1)'

  const filtered = activeFilter
    ? DATA.skills.filter(s => s.category === activeFilter)
    : DATA.skills

  return (
    <section id="skills" ref={ref} style={{ padding: '6rem 0' }}>
      <div className="container-custom">

        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-block' }}>skills</span>
          <h2 className="section-title" style={{ color: textColor }}>Toolkit</h2>
          <p className="section-subtitle" style={{ marginBottom: '1.75rem' }}>
            Technologies I've shipped production work with — no inflated proficiency bars.
          </p>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveFilter(null)}
              style={{
                padding: '6px 16px', fontSize: '0.78rem', borderRadius: 4,
                fontFamily: 'IBM Plex Mono, monospace',
                border: `1px solid ${activeFilter === null ? 'var(--color-accent)' : borderColor}`,
                background: activeFilter === null ? 'rgba(6, 182, 212, 0.1)' : 'transparent',
                color: activeFilter === null ? 'var(--color-accent)' : subColor,
                cursor: 'pointer', transition: 'all 0.2s ease',
              }}
            >
              all
            </button>
            {DATA.skills.map(s => (
              <button
                key={s.category}
                onClick={() => setActiveFilter(prev => prev === s.category ? null : s.category)}
                style={{
                  padding: '6px 16px', fontSize: '0.78rem', borderRadius: 4,
                  fontFamily: 'IBM Plex Mono, monospace',
                  border: `1px solid ${activeFilter === s.category ? 'var(--color-accent)' : borderColor}`,
                  background: activeFilter === s.category ? 'rgba(6, 182, 212, 0.1)' : 'transparent',
                  color: activeFilter === s.category ? 'var(--color-accent)' : subColor,
                  cursor: 'pointer', transition: 'all 0.2s ease',
                }}
              >
                {s.category.toLowerCase()}
              </button>
            ))}
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px' }} className="skills-grid surface">
          {filtered.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={reduced ? undefined : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: gi * 0.06 }}
              style={{
                padding: '1.75rem',
                borderRight: gi % 2 === 0 ? `1px solid ${borderColor}` : 'none',
                borderBottom: `1px solid ${borderColor}`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.1rem' }}>
                <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, fontSize: '1.05rem', color: textColor }}>
                  {group.category}
                </h3>
                <span className="ledger-figure" style={{ fontSize: '0.75rem', color: subColor }}>{String(group.items.length).padStart(2, '0')}</span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.items.map(item => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          .skills-grid > div { border-right: none !important; }
        }
      `}</style>
    </section>
  )
}

export default Skills
