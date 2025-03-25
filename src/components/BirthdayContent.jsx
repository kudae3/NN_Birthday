import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import BirthdayCard from './BirthdayCard'
import Memories from './Memories'
import { useAudio } from '../contexts/AudioContext'

const BirthdayContent = () => {
  const [activeTab, setActiveTab] = useState('card')
  const { playSound, changeMusic } = useAudio()
  
  // Update music when tab changes
  useEffect(() => {
    if (activeTab === 'memories') {
      changeMusic('/music/22.mp3')
    } else {
      changeMusic('/music/background.mp3')
    }
  }, [activeTab, changeMusic])
  
  const handleTabChange = (tab) => {
    // Play tab change sound
    playSound('/music/click.mp3', 0.5)
    setActiveTab(tab)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-birthday-pink-100 to-white">
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

      {/* Floating Balloons - Enhanced Design */}

      
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
        <p>Made with ❤️ just for you by Kudae!</p>
        <span className="text-xs block mt-2 text-gray-500">Music credits: All songs used belong to their respective artists and copyright holders.</span>
      </footer>
    </div>
  )
}

export default BirthdayContent
