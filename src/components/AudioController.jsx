import { useEffect } from 'react'
import { useAudio } from '../contexts/AudioContext'

const AudioController = () => {
  const { isMusicPlaying, toggleMusic } = useAudio()
  
  // Clean up on unmount
  useEffect(() => {
    return () => {
      // Any cleanup needed
    }
  }, [])
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        onClick={toggleMusic}
        className="bg-birthday-pink-400 hover:bg-birthday-pink-500 text-white rounded-full p-2 sm:p-3 shadow-lg"
        aria-label={isMusicPlaying ? 'Mute music' : 'Play music'}
      >
        {isMusicPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        )}
      </button>
    </div>
  )
}

export default AudioController
