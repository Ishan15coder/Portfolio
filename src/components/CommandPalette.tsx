import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Command, ArrowUp, User, Briefcase, Code, Trophy, GraduationCap, Mail, Download, Sun, Moon } from 'lucide-react'
import { DATA } from '../data/resume'

const commands = [
  { id: 'hero', label: 'Go to Top', icon: ArrowUp, action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
  { id: 'about', label: 'About Me', icon: User, action: () => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'skills', label: 'Skills', icon: Code, action: () => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'projects', label: 'Projects', icon: Briefcase, action: () => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'cp', label: 'Competitive Programming', icon: Trophy, action: () => document.querySelector('#cp')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'achievements', label: 'Achievements & Certifications', icon: Trophy, action: () => document.querySelector('#achievements')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'education', label: 'Education', icon: GraduationCap, action: () => document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'contact', label: 'Contact', icon: Mail, action: () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'github', label: 'Open GitHub', icon: Code, action: () => window.open(DATA.personal.github, '_blank') },
  { id: 'linkedin', label: 'Open LinkedIn', icon: User, action: () => window.open(DATA.personal.linkedin, '_blank') },
  { id: 'email', label: 'Send Email', icon: Mail, action: () => window.open(`mailto:${DATA.personal.email}`) },
  { id: 'resume', label: 'Download Resume', icon: Download, action: () => window.open(DATA.personal.resumeUrl) },
]

interface CommandPaletteProps { onThemeToggle: () => void; isDark: boolean }

const CommandPalette: React.FC<CommandPaletteProps> = ({ onThemeToggle, isDark }) => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const allCommands = [
    ...commands,
    { id: 'theme', label: isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode', icon: isDark ? Sun : Moon, action: onThemeToggle },
  ]

  const filtered = allCommands.filter(c =>
    !query || c.label.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(v => !v)
        setQuery('')
        setSelected(0)
      }
      if (e.key === 'Escape') setOpen(false)
      if (!open) return
      if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(v => Math.min(v + 1, filtered.length - 1)) }
      if (e.key === 'ArrowUp') { e.preventDefault(); setSelected(v => Math.max(v - 1, 0)) }
      if (e.key === 'Enter') {
        e.preventDefault()
        if (filtered[selected]) { filtered[selected].action(); setOpen(false) }
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, filtered, selected])

  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 50) }, [open])

  const textColor = isDark ? '#EDEEF0' : '#17181C'
  const subColor = isDark ? '#656B76' : '#8A8F99'
  const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="command-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <motion.div
            className="command-box"
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            onClick={e => e.stopPropagation()}
            style={{ background: isDark ? '#14171F' : '#ffffff' }}
          >
            {/* Search input */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              padding: '0 1.5rem',
              borderBottom: `1px solid ${borderColor}`,
            }}>
              <Command size={18} color="var(--color-accent)" />
              <input
                ref={inputRef}
                className="command-input"
                placeholder="Type a command or section..."
                value={query}
                onChange={e => { setQuery(e.target.value); setSelected(0) }}
                style={{ color: textColor, background: 'transparent' }}
                aria-label="Command search"
              />
              <kbd style={{
                fontSize: '0.7rem', padding: '2px 8px', borderRadius: 6,
                border: `1px solid ${borderColor}`,
                color: subColor, background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
              }}>ESC</kbd>
            </div>

            {/* Results */}
            <div style={{ maxHeight: 320, overflowY: 'auto', padding: '0.5rem' }}>
              {filtered.length === 0 ? (
                <p style={{ textAlign: 'center', color: subColor, padding: '1.5rem', fontSize: '0.88rem' }}>No results found.</p>
              ) : (
                filtered.map((cmd, i) => (
                  <button
                    key={cmd.id}
                    onClick={() => { cmd.action(); setOpen(false) }}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', gap: '0.75rem',
                      padding: '0.75rem 1rem', borderRadius: 10, border: 'none',
                      background: i === selected
                        ? 'rgba(6, 182, 212, 0.12)'
                        : 'transparent',
                      color: i === selected ? 'var(--color-accent)' : textColor,
                      cursor: 'pointer', textAlign: 'left', fontSize: '0.9rem',
                      transition: 'all 0.15s ease', fontFamily: 'IBM Plex Mono, monospace',
                    }}
                    onMouseEnter={() => setSelected(i)}
                  >
                    <cmd.icon size={16} style={{ flexShrink: 0, color: i === selected ? 'var(--color-accent)' : '#656B76' }} />
                    {cmd.label}
                    {i === selected && (
                      <kbd style={{
                        marginLeft: 'auto', fontSize: '0.7rem', padding: '2px 8px',
                        borderRadius: 6, border: `1px solid rgba(6, 182, 212, 0.35)`,
                        color: 'var(--color-accent)', background: 'rgba(6, 182, 212, 0.08)',
                      }}>↵</kbd>
                    )}
                  </button>
                ))
              )}
            </div>

            {/* Footer hint */}
            <div style={{
              padding: '0.75rem 1.5rem',
              borderTop: `1px solid ${borderColor}`,
              display: 'flex', gap: '1rem',
              color: subColor, fontSize: '0.72rem',
            }}>
              <span>↑↓ navigate</span>
              <span>↵ select</span>
              <span>esc close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CommandPalette
