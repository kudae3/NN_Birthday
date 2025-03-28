import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'
import useWindowSize from './hooks/useWindowSize'
import MysteryBox from './components/MysteryBox'
import BirthdayContent from './components/BirthdayContent'
import { AudioProvider, useAudio } from './contexts/AudioContext'
import AudioController from './components/AudioController'

// Main component wrapper with AudioProvider
function App() {
  return (
    <AudioProvider>
      <AppContent />
    </AudioProvider>
  )
}

// App content that uses audio context
function AppContent() {
  const [showMysteryBox, setShowMysteryBox] = useState(true)
  const [showConfetti, setShowConfetti] = useState(false)
  const { width, height } = useWindowSize()
  const { playMusic, pauseMusic, playSound } = useAudio()

  const handleBoxClick = () => { 
    setShowConfetti(true)
    
    setTimeout(() => {
      setShowMysteryBox(false)
      // Start background music when the birthday content is shown
      playMusic()
      
      // Play scream sound when the main content is about to be shown
      // Small delay to ensure the main content is being mounted
      setTimeout(() => {
        playSound('/music/scream.mp3', 0.7)
      }, 300)
    }, 500)
  }

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false)
      }, 6000)
      return () => clearTimeout(timer)
    }
  }, [showConfetti])

  // Clean up audio when component unmounts
  useEffect(() => {
    return () => {
      pauseMusic()
    }
  }, [pauseMusic])

  return (
    <div className="relative">
      <AnimatePresence>
        {showMysteryBox && (
          <motion.div 
            className="mystery-background"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <MysteryBox onClick={handleBoxClick} />
          </motion.div>
        )}
      </AnimatePresence>

      {!showMysteryBox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <BirthdayContent />
        </motion.div>
      )}

      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-20">
          <Confetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={500}
            colors={['#ff9cd4', '#ff69c0', '#ff3aac', '#ff0096', '#ffcce8']}
          />
        </div>
      )}
      
      {/* Audio controller button */}
      <AudioController />
    </div>
  )
}

export default App
