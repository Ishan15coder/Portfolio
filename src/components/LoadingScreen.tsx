import React, { useEffect } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

const LoadingScreen: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  const reduced = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(onDone, reduced ? 300 : 1200)
    return () => clearTimeout(timer)
  }, [onDone, reduced])

  return (
    <div className="loading-screen" aria-label="Loading portfolio" role="status">
      <div className="loading-mark" aria-hidden="true">IG<span className="dot">.</span></div>
      <div className="loading-bar" aria-hidden="true">
        <div className="loading-bar-fill" />
      </div>
    </div>
  )
}

export default LoadingScreen
