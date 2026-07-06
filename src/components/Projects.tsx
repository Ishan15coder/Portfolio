import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { DATA } from '../data/resume'
import { useTheme } from '../context/ThemeContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { ExternalLink, ChevronDown, ChevronUp, Search } from 'lucide-react'

const GHIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const Projects: React.FC = () => {
  const { isDark } = useTheme()
  const reduced = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [expanded, setExpanded] = useState<string | null>(null)

  const textColor = isDark ? '#EDEEF0' : '#17181C'
  const subColor = isDark ? '#9198A3' : '#565B66'
  const borderColor = isDark ? 'rgba(255,255,255,0.09)' : 'rgba(23,24,28,0.1)'

  const allTags = Array.from(new Set(DATA.projects.flatMap(p => p.tags)))

  const filtered = DATA.projects.filter(p => {
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase())
    const matchTag = !activeTag || p.tags.includes(activeTag)
    return matchSearch && matchTag
  })

  return (
    <section id="projects" ref={ref} style={{ padding: '6rem 0' }}>
      <div className="container-custom">

        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-block' }}>projects</span>
          <h2 className="section-title" style={{ color: textColor }}>Featured work</h2>
          <p className="section-subtitle" style={{ marginBottom: '1.75rem' }}>Production applications, not tutorials.</p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ position: 'relative', maxWidth: 280 }}>
              <Search size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: subColor }} />
              <input
                id="project-search"
                type="search"
                placeholder="Search projects…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Search projects"
                style={{
                  width: '100%', padding: '9px 14px 9px 34px',
                  borderRadius: 4, border: `1px solid ${borderColor}`,
                  background: 'transparent',
                  color: textColor, fontSize: '0.85rem',
                  outline: 'none', fontFamily: 'Inter',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                onBlur={e => (e.currentTarget.style.borderColor = borderColor)}
              />
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setActiveTag(null)}
                style={{
                  padding: '5px 14px', borderRadius: 4, fontSize: '0.76rem', fontFamily: 'IBM Plex Mono, monospace',
                  border: `1px solid ${activeTag === null ? 'var(--color-accent)' : borderColor}`,
                  background: activeTag === null ? 'rgba(6, 182, 212, 0.1)' : 'transparent',
                  color: activeTag === null ? 'var(--color-accent)' : subColor,
                  cursor: 'pointer', transition: 'all 0.2s ease',
                }}
              >
                all
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(prev => prev === tag ? null : tag)}
                  style={{
                    padding: '5px 14px', borderRadius: 4, fontSize: '0.76rem', fontFamily: 'IBM Plex Mono, monospace',
                    border: `1px solid ${activeTag === tag ? 'var(--color-accent)' : borderColor}`,
                    background: activeTag === tag ? 'rgba(6, 182, 212, 0.1)' : 'transparent',
                    color: activeTag === tag ? 'var(--color-accent)' : subColor,
                    cursor: 'pointer', transition: 'all 0.2s ease',
                  }}
                >
                  {tag.toLowerCase()}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={reduced ? undefined : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="surface"
                style={{ padding: '2rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                  <div>
                    <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, fontSize: '1.4rem', color: textColor, marginBottom: '0.3rem' }}>
                      {project.title}
                    </h3>
                    <p style={{ color: subColor, fontSize: '0.9rem' }}>{project.subtitle}</p>
                  </div>
                  <span className="verdict">shipped</span>
                </div>

                <p style={{ color: subColor, fontSize: '0.92rem', lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: 680 }}>
                  {project.description}
                </p>

                {/* Spec rows */}
                <div style={{ borderTop: `1px solid ${borderColor}`, marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', padding: '0.9rem 0', borderBottom: `1px solid ${borderColor}` }}>
                    <span style={{ width: 90, flexShrink: 0, fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.72rem', color: subColor, textTransform: 'uppercase', letterSpacing: '0.05em' }}>stack</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {project.technologies.map(tech => <span key={tech} className="tag">{tech}</span>)}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', padding: '0.9rem 0' }}>
                    <span style={{ width: 90, flexShrink: 0, fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.72rem', color: subColor, textTransform: 'uppercase', letterSpacing: '0.05em' }}>problem</span>
                    <p style={{ color: subColor, fontSize: '0.85rem', lineHeight: 1.7 }}>{project.problem}</p>
                  </div>
                </div>

                <button
                  onClick={() => setExpanded(prev => prev === project.id ? null : project.id)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'var(--color-accent)', padding: 0,
                    fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: 6,
                    marginBottom: '1.25rem', fontFamily: 'IBM Plex Mono, monospace',
                  }}
                  aria-expanded={expanded === project.id}
                >
                  {expanded === project.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  {expanded === project.id ? 'hide' : 'show'} feature notes
                </button>

                <AnimatePresence>
                  {expanded === project.id && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{ overflow: 'hidden', marginBottom: '1.25rem', paddingLeft: '1.1rem' }}
                    >
                      {project.features.map((f, fi) => (
                        <li key={fi} style={{ color: subColor, fontSize: '0.84rem', lineHeight: 1.75, marginBottom: '0.3rem' }}>
                          {f}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{ padding: '8px 18px', fontSize: '0.8rem' }}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GHIcon /> Code
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: '8px 18px', fontSize: '0.8rem' }}
                    aria-label={`Live demo of ${project.title}`}
                  >
                    <ExternalLink size={14} /> Live demo
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: subColor, fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.85rem' }}>
            no projects match that search
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
