import React from 'react'
import { DATA } from '../data/resume'
import { useTheme } from '../context/ThemeContext'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'

const Footer: React.FC = () => {
  const { isDark } = useTheme()

  const textColor = isDark ? '#EDEEF0' : '#17181C'
  const subColor = isDark ? '#656B76' : '#8A8F99'
  const borderColor = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(23,24,28,0.08)'

  return (
    <footer style={{ borderTop: `1px solid ${borderColor}`, padding: '3rem 0 2rem' }}>
      <div className="container-custom">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>

          <span style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, fontSize: '1.1rem', color: textColor }}>
            IG<span style={{ color: 'var(--color-accent)', fontFamily: 'IBM Plex Mono, monospace' }}>.</span>
          </span>

          <div style={{ display: 'flex', gap: '0.6rem' }}>
            {[
              { href: DATA.personal.github, Icon: GithubIcon, label: 'GitHub' },
              { href: DATA.personal.linkedin, Icon: LinkedinIcon, label: 'LinkedIn' },
              { href: `mailto:${DATA.personal.email}`, Icon: Mail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: 38, height: 38, borderRadius: 4,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: `1px solid ${borderColor}`,
                  color: subColor, textDecoration: 'none',
                  transition: 'border-color 0.2s ease, color 0.2s ease',
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
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div style={{ height: 1, background: borderColor, marginBottom: '1.5rem' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ color: subColor, fontSize: '0.78rem', fontFamily: 'IBM Plex Mono, monospace' }}>
            built with react, typescript & tailwind
          </p>
          <p style={{ color: subColor, fontSize: '0.78rem', fontFamily: 'IBM Plex Mono, monospace' }}>
            © {new Date().getFullYear()} {DATA.personal.name}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
