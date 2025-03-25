import { createContext, useContext, useState, useRef, useCallback } from 'react'

// Create the context
const AudioContext = createContext(null)

// Custom hook to use the audio context
export const useAudio = () => {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}

// Provider component
export const AudioProvider = ({ children }) => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const bgMusicRef = useRef(null)
  const [currentMusic, setCurrentMusic] = useState('/music/background.mp3')
  
  // Initialize background music
  const initBgMusic = (audioSrc = currentMusic) => {
    if (!bgMusicRef.current) {
      const audio = new Audio(audioSrc)
      audio.loop = true
      audio.volume = 0.4  // Default volume level
      bgMusicRef.current = audio
    }
    return bgMusicRef.current
  }
  
  // Toggle background music
  const toggleMusic = () => {
    const music = initBgMusic()
    
    if (isMusicPlaying) {
      music.pause()
    } else {
      // Try to play, handling browser autoplay restrictions
      music.play().catch(error => {
        console.error('Music playback prevented:', error)
      })
    }
    
    setIsMusicPlaying(!isMusicPlaying)
  }
  
  // Play background music
  const playMusic = () => {
    if (!isMusicPlaying) {
      const music = initBgMusic()
      music.play().catch(error => {
        console.error('Music playback prevented:', error)
      })
      setIsMusicPlaying(true)
    }
  }
  
  // Pause background music
  const pauseMusic = () => {
    if (isMusicPlaying && bgMusicRef.current) {
      bgMusicRef.current.pause()
      setIsMusicPlaying(false)
    }
  }

  // Change background music
  const changeMusic = useCallback((newMusicSrc) => {
    // If current music is different from the requested one
    if (currentMusic !== newMusicSrc) {
      const wasPlaying = isMusicPlaying
      
      // Pause current music if playing
      if (isMusicPlaying && bgMusicRef.current) {
        bgMusicRef.current.pause()
        setIsMusicPlaying(false) // Update state immediately to avoid race conditions
      }
      
      // Update current music source
      setCurrentMusic(newMusicSrc)
      
      // Use setTimeout to create a delay between pause and play
      setTimeout(() => {
        if (bgMusicRef.current) {
          // Clean up old audio element to avoid conflicts
          bgMusicRef.current.src = newMusicSrc
          bgMusicRef.current.load();
          
          // If music was playing before, start playing the new music
          if (wasPlaying) {
            const playPromise = bgMusicRef.current.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  setIsMusicPlaying(true);
                })
                .catch(error => {
                  console.error('Music playback prevented:', error);
                });
            }
          }
        } else {
          // Initialize with new source if not existing
          initBgMusic(newMusicSrc);
          
          if (wasPlaying) {
            const playPromise = bgMusicRef.current.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  setIsMusicPlaying(true);
                })
                .catch(error => {
                  console.error('Music playback prevented:', error);
                });
            }
          }
        }
      }, 150); // 150ms delay between pausing and playing
    }
  }, [currentMusic, isMusicPlaying, initBgMusic]);
  
  // Play a one-off sound effect
  const playSound = (soundSrc, volume = 0.7) => {
    const sound = new Audio(soundSrc)
    sound.volume = volume
    sound.play().catch(error => {
      console.error('Sound playback prevented:', error)
    })
  }
  
  const value = {
    isMusicPlaying,
    toggleMusic,
    playMusic,
    pauseMusic,
    playSound,
    changeMusic,
    currentMusic
  }
  
  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  )
}
