import React from 'react'
import { motion } from 'framer-motion'
import { DATA } from '../data/resume'
import { Mail, Phone, ArrowDown, ExternalLink } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useTheme } from '../context/ThemeContext'

const stats = [
  { label: 'DSA problems', value: '500+' },
  { label: 'CodeChef rating', value: '1439' },
  { label: 'AWS certifications', value: '03' },
  { label: 'CGPA', value: '8.29' },
]

const Hero: React.FC = () => {
  const reduced = useReducedMotion()
  const { isDark } = useTheme()

  const fadeUp = (delay = 0): Record<string, any> => reduced ? {} : {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  }

  const socialLinks = [
    { href: DATA.personal.github, label: 'GitHub', Icon: () => <GithubIcon size={17} /> },
    { href: DATA.personal.linkedin, label: 'LinkedIn', Icon: () => <LinkedinIcon size={17} /> },
    { href: `mailto:${DATA.personal.email}`, label: 'Email', Icon: () => <Mail size={17} /> },
    { href: `tel:${DATA.personal.phone}`, label: 'Phone', Icon: () => <Phone size={17} /> },
  ]

  const textColor = isDark ? '#EDEEF0' : '#17181C'
  const subColor = isDark ? '#9198A3' : '#565B66'
  const borderColor = isDark ? 'rgba(255,255,255,0.09)' : 'rgba(23,24,28,0.1)'

  return (
    <section
      id="hero"
      style={{ position: 'relative', paddingTop: 128, paddingBottom: 64 }}
    >
      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">

          {/* Text content */}
          <div>
            <motion.div {...fadeUp(0.05)} style={{ marginBottom: '1.5rem' }}>
              <span className="eyebrow">B.Tech IT · KIET Group of Institutions</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.12)}
              style={{
                fontFamily: 'Fraunces, serif',
                fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
                fontWeight: 500, lineHeight: 1.06, letterSpacing: '-0.01em', marginBottom: '1.1rem',
                color: textColor,
              }}
            >
              {DATA.personal.name}
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.3rem)', fontWeight: 500,
                color: subColor, marginBottom: '1.5rem',
              }}
            >
              {DATA.personal.title} <span style={{ color: 'var(--color-accent)' }}>·</span> building AI-backed products, then proving they hold up under load.
            </motion.p>

            <motion.p
              {...fadeUp(0.28)}
              style={{
                fontSize: '1.02rem',
                color: subColor,
                maxWidth: 520, lineHeight: 1.75, marginBottom: '2.25rem',
              }}
            >
              {DATA.personal.summary}
            </motion.p>

            <motion.div
              {...fadeUp(0.36)}
              style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
              className="hero-ctas"
            >
              <a
                href={DATA.personal.resumeUrl}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View resume"
              >
                Resume
              </a>
              <button
                className="btn-outline"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="View projects"
              >
                <ExternalLink size={15} /> Projects
              </button>
              <button
                className="btn-outline"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Contact me"
              >
                <Mail size={15} /> Contact
              </button>
            </motion.div>

            <motion.div
              {...fadeUp(0.44)}
              style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}
              className="hero-socials"
            >
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 40, height: 40, borderRadius: 4,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: `1px solid ${borderColor}`,
                    color: subColor,
                    transition: 'border-color 0.2s ease, color 0.2s ease', textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'var(--color-accent)'
                    el.style.color = 'var(--color-accent)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = borderColor
                    el.style.color = subColor
                  }}
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Stat ledger (signature element) */}
          <motion.div
            {...fadeUp(0.3)}
            className="surface"
            style={{ padding: '0.25rem 1.5rem' }}
          >
            <div style={{
              fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.1em',
              color: subColor, textTransform: 'uppercase',
              padding: '1.1rem 0 0.9rem', borderBottom: `1px solid ${borderColor}`,
            }}>
              track record
            </div>
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  padding: '1.15rem 0',
                  borderBottom: i === stats.length - 1 ? 'none' : `1px solid ${borderColor}`,
                }}
              >
                <span style={{ color: subColor, fontSize: '0.88rem' }}>{s.label}</span>
                <span className="ledger-figure" style={{ fontSize: '1.35rem', color: textColor }}>{s.value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        {!reduced && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              marginTop: '3.5rem', color: subColor,
              fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.1em',
            }}
          >
            <ArrowDown size={13} /> scroll
          </motion.div>
        )}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .hero-ctas, .hero-socials { justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  )
}

export default Hero
