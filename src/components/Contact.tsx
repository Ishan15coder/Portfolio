import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { DATA } from '../data/resume'
import { useTheme } from '../context/ThemeContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { Mail, Phone, Send, CheckCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'

const Contact: React.FC = () => {
  const { isDark } = useTheme()
  const reduced = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const textColor = isDark ? '#EDEEF0' : '#17181C'
  const subColor = isDark ? '#9198A3' : '#565B66'
  const borderColor = isDark ? 'rgba(255,255,255,0.09)' : 'rgba(23,24,28,0.1)'

  const inputStyle = {
    width: '100%', padding: '11px 14px',
    borderRadius: 4, border: `1px solid ${borderColor}`,
    background: 'transparent',
    color: textColor, fontSize: '0.88rem',
    outline: 'none', fontFamily: 'Inter',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box' as const,
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || 'Portfolio Contact')
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`mailto:${DATA.personal.email}?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const links = [
    { Icon: Mail, label: 'Email', value: DATA.personal.email, href: `mailto:${DATA.personal.email}` },
    { Icon: Phone, label: 'Phone', value: DATA.personal.phone, href: `tel:${DATA.personal.phone}` },
    { Icon: ({ size }: any) => <GithubIcon size={size} />, label: 'GitHub', value: 'Ishan15coder', href: DATA.personal.github },
    { Icon: ({ size }: any) => <LinkedinIcon size={size} />, label: 'LinkedIn', value: 'ishan1545', href: DATA.personal.linkedin },
  ]

  return (
    <section id="contact" ref={ref} style={{ padding: '6rem 0' }}>
      <div className="container-custom">

        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-block' }}>contact</span>
          <h2 className="section-title" style={{ color: textColor }}>Let's connect</h2>
          <p className="section-subtitle">Open to internship opportunities, collaborations, and interesting conversations.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem', alignItems: 'start' }} className="contact-grid">

          {/* Left: contact info */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p style={{ color: subColor, lineHeight: 1.85, marginBottom: '2rem', fontSize: '0.92rem' }}>
              Whether you have an opportunity, a project idea, or just want to say hi — my inbox is always open. I'll respond promptly.
            </p>

            <div className="ledger">
              {links.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="ledger-row"
                  style={{ textDecoration: 'none' }}
                >
                  <span style={{ color: subColor, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Icon size={15} />
                    {label}
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: textColor, fontFamily: 'IBM Plex Mono, monospace' }}>{value}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="surface"
            style={{ padding: '2rem' }}
          >
            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <CheckCircle size={40} color="var(--color-verdict)" style={{ margin: '0 auto 1rem' }} />
                <p style={{ fontWeight: 600, color: textColor, marginBottom: '0.5rem' }}>Email client opened</p>
                <p style={{ color: subColor, fontSize: '0.86rem' }}>Thanks for reaching out — I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-grid">
                  <div>
                    <label htmlFor="contact-name" style={{ fontSize: '0.76rem', color: subColor, display: 'block', marginBottom: '0.4rem', fontFamily: 'IBM Plex Mono, monospace' }}>name *</label>
                    <input
                      id="contact-name" type="text" required placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                      onBlur={e => (e.currentTarget.style.borderColor = borderColor)}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={{ fontSize: '0.76rem', color: subColor, display: 'block', marginBottom: '0.4rem', fontFamily: 'IBM Plex Mono, monospace' }}>email *</label>
                    <input
                      id="contact-email" type="email" required placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                      onBlur={e => (e.currentTarget.style.borderColor = borderColor)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" style={{ fontSize: '0.76rem', color: subColor, display: 'block', marginBottom: '0.4rem', fontFamily: 'IBM Plex Mono, monospace' }}>subject</label>
                  <input
                    id="contact-subject" type="text" placeholder="Internship opportunity / collaboration…"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                    onBlur={e => (e.currentTarget.style.borderColor = borderColor)}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" style={{ fontSize: '0.76rem', color: subColor, display: 'block', marginBottom: '0.4rem', fontFamily: 'IBM Plex Mono, monospace' }}>message *</label>
                  <textarea
                    id="contact-message" required rows={5} placeholder="Tell me about the opportunity or project…"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{ ...inputStyle, resize: 'vertical' as const }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                    onBlur={e => (e.currentTarget.style.borderColor = borderColor)}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', padding: '11px 26px' }}>
                  <Send size={15} /> Send message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 480px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default Contact
