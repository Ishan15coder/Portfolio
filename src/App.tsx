import React, { useState } from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CompetitiveProgramming from './components/CompetitiveProgramming'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import CommandPalette from './components/CommandPalette'

const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const { isDark, toggleTheme } = useTheme()

  if (loading) {
    return <LoadingScreen onDone={() => setLoading(false)} />
  }

  return (
    <>
      <ScrollProgress />
      <CommandPalette onThemeToggle={toggleTheme} isDark={isDark} />
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CompetitiveProgramming />
        <Achievements />
        <Education />
        <Contact />
      </main>

      <Footer />
      <BackToTop />

      {/* Ctrl+K hint */}
      <div
        aria-hidden="true"
        className="no-print hidden-mobile"
        style={{
          position: 'fixed', bottom: '1.5rem', left: '1.5rem',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.09)' : 'rgba(23,24,28,0.1)'}`,
          borderRadius: 4, padding: '5px 10px',
          display: 'flex', alignItems: 'center', gap: 6,
          fontSize: '0.7rem', fontFamily: 'IBM Plex Mono, monospace',
          color: isDark ? '#656B76' : '#8A8F99',
          pointerEvents: 'none',
          zIndex: 99,
        }}
      >
        <kbd style={{ padding: '1px 6px', borderRadius: 3, border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(23,24,28,0.15)'}`, fontSize: '0.68rem' }}>Ctrl K</kbd> command palette
      </div>
    </>
  )
}

const App: React.FC = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
)

export default App
