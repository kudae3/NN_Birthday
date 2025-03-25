import { motion } from 'framer-motion'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'

const MysteryBox = ({ onClick }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])
  
  const handleGiftClick = () => {
    // Go directly to main page
    onClick()
  }

  const boxVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  }
  
  // Sparkle animation for decoration
  const sparkleVariants = {
    animate: {
      scale: [0.8, 1.2, 0.8],
      opacity: [0.4, 1, 0.4],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="relative flex justify-center items-center min-h-[300px]">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 80,
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
              value: 4,
              random: true
            },
            move: {
              enable: true,
              speed: 3,
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
          }
        }}
      />
      
      {/* Decorative sparkles */}
      <div className="absolute z-10 w-full h-full pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-yellow-200 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(1px)"
            }}
            variants={sparkleVariants}
            animate="animate"
            transition={{
              delay: i * 0.3
            }}
          />
        ))}
      </div>
      
      {/* Gift box - directly opens main page on click */}
      <motion.div 
        className="gift-box z-10 cursor-pointer"
        variants={boxVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={handleGiftClick}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 0.5
        }}
      >
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex justify-center items-center">
          <motion.img 
            src="/carry-gift.gif" 
            alt="Gift Box" 
            className="w-full h-full object-contain rounded-xl shadow-lg"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-center rounded-b-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Click to see your birthday surprise!
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default MysteryBox
