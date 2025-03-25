import { motion } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import BirthdayCard from './BirthdayCard'
import Memories from './Memories'
import { useAudio } from '../contexts/AudioContext'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

const BirthdayContent = () => {
  const [activeTab, setActiveTab] = useState('card')
  const { playSound, changeMusic } = useAudio()
  
  // Initialize particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])
  
  // Update music when component mounts - play background music only
  useEffect(() => {
    // Always use background music
    changeMusic('/music/background.mp3')
    // The dependency array is empty so this only runs once when component mounts
  }, [changeMusic])
  
  const handleTabChange = (tab) => {
    // Play tab change sound
    playSound('/music/click.mp3', 0.5)
    setActiveTab(tab)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-birthday-pink-100 to-white relative overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Particles
          id="tsparticles-birthday"
          init={particlesInit}
          options={{
            particles: {
              number: {
                value: 40, // Reduced count for better performance
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: ["#ff69c0", "#ffb6c1", "#ffd700", "#9370db"]
              },
              shape: {
                type: ["circle", "star"],
              },
              opacity: {
                value: 0.6,
                random: true
              },
              size: {
                value: 6,
                random: true
              },
              move: {
                enable: true,
                speed: 2, 
                direction: "none",
                random: true,
                out_mode: "out"
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble"
                }
              },
              modes: {
                bubble: {
                  distance: 100,
                  size: 6,
                  duration: 0.3
                }
              }
            },
            retina_detect: true,
            background: {
              color: "transparent", // Important - transparent background
              opacity: 0
            }
          }}
        />
      </div>

      {/* Content (with higher z-index to appear above particles) */}
      <div className="relative z-10">
        {/* Header */}
        <header className="py-6 px-4 text-center">
          <motion.h1 
            className="text-3xl md:text-5xl font-bold text-birthday-pink-500"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Happy Birthday, Noh Noh!
          </motion.h1>
          
          <motion.div
            className="mt-4 text-lg text-gray-600"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Today is all about celebrating the amazing person you are!
          </motion.div>
        </header>
        
        {/* Navigation Tabs - Only card and memories */}
        <div className="flex justify-center mt-6 mb-12">
          <div className="flex space-x-4 bg-white rounded-full p-2 shadow-md">
            {['card', 'memories'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === tab 
                    ? 'bg-birthday-pink-400 text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-birthday-pink-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pb-20">
          {activeTab === 'card' && <BirthdayCard />}
          {activeTab === 'memories' && <Memories />}
        </div>

        {/* Footer */}
        <footer className="py-6 text-center text-birthday-pink-400 border-t border-birthday-pink-200">
          <p>Made with ❤️ just for you by 
          <a href="https://www.facebook.com/emilnowak99/" target="_blank" rel="noopener noreferrer"> <span className='underline hover:text-birthday-pink-600 duration-300'>Kudae</span></a>
          !
          </p>
        </footer>
      </div>
    </div>
  )
}

export default BirthdayContent
