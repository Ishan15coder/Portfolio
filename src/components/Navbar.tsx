import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { DATA } from '../data/resume'
import { Menu, X, Sun, Moon } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'CP', href: '#cp' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id) })
      },
      { threshold: 0.3 }
    )
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' as const }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        padding: '0 1.5rem',
        transition: 'background 0.3s ease, border-color 0.3s ease',
        background: scrolled
          ? isDark ? 'rgba(10,12,16,0.9)' : 'rgba(246,244,239,0.9)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${scrolled ? (isDark ? 'rgba(255,255,255,0.07)' : 'rgba(23,24,28,0.08)') : 'transparent'}`,
      }}
    >
      <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'baseline', gap: 2 }}
          aria-label="Back to top"
        >
          <span style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, fontSize: '1.3rem', color: isDark ? '#EDEEF0' : '#17181C' }}>
            IG
          </span>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.95rem', color: 'var(--color-accent)' }}>.</span>
        </button>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="hidden-mobile">
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={`nav-link ${active === item.href ? 'active' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            id="theme-toggle"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              width: 38, height: 38, borderRadius: 4, border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(23,24,28,0.12)'}`, cursor: 'pointer',
              background: 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: isDark ? '#9198A3' : '#565B66',
              transition: 'border-color 0.2s ease',
            }}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Hire me CTA */}
          <a
            href={`mailto:${DATA.personal.email}`}
            className="btn-primary hidden-mobile"
            style={{ padding: '8px 18px', fontSize: '0.8rem' }}
          >
            Hire me
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="show-mobile"
            aria-label="Toggle menu"
            style={{
              width: 38, height: 38, borderRadius: 4, border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(23,24,28,0.12)'}`, cursor: 'pointer',
              background: 'transparent',
              display: 'none', alignItems: 'center', justifyContent: 'center',
              color: isDark ? '#9198A3' : '#565B66',
            }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: isDark ? 'rgba(10,12,16,0.98)' : 'rgba(246,244,239,0.98)',
              borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(23,24,28,0.08)'}`,
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '1rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {navItems.map(item => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                    padding: '0.75rem 0', color: isDark ? '#9198A3' : '#565B66',
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '0.9rem', borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(23,24,28,0.06)'}`,
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </motion.nav>
  )
}

export default Navbar
