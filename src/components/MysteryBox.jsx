import { motion } from 'framer-motion'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'

const MysteryBox = ({ onClick }) => {
  
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const handleClick = () => {
    onClick()
  }

  const boxVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
      boxShadow: "0px 10px 25px rgba(255, 105, 192, 0.6)",
      transition: {
        duration: 0.5
      }
    },
    tap: {
      scale: 0.9
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
      
      <motion.div
        className="gift-box z-10"
        variants={boxVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={handleClick}
      >
        <motion.div
          className="bg-gradient-to-br from-birthday-pink-300 to-birthday-pink-500 rounded-xl p-4 shadow-2xl relative overflow-hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.5
          }}
        >
          {/* Glowing effect around box */}
          <motion.div
            className="absolute inset-0 bg-birthday-pink-300 rounded-xl opacity-50"
            animate={{
              boxShadow: ["0px 0px 5px 2px rgba(255,105,192,0.3)", "0px 0px 20px 10px rgba(255,105,192,0.7)", "0px 0px 5px 2px rgba(255,105,192,0.3)"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <div className="w-40 h-40 sm:w-60 sm:h-60 flex justify-center items-center flex-col space-y-4 p-6 relative z-10">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                times: [0, 0.2, 0.5, 0.8, 1]
              }}
              className="text-white text-5xl sm:text-6xl font-bold"
              style={{ textShadow: "0px 3px 5px rgba(0,0,0,0.2)" }}
            >
              ?
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-white text-center text-sm sm:text-base font-semibold"
              style={{ textShadow: "0px 2px 3px rgba(0,0,0,0.2)" }}
            >
              Click to reveal a surprise!
            </motion.div>
          </div>
          
          {/* Ribbon effect */}
          <div className="absolute inset-x-0 top-1/2 h-5 bg-birthday-pink-300 transform -translate-y-1/2 shadow-inner"></div>
          <div className="absolute inset-y-0 left-1/2 w-5 bg-birthday-pink-300 transform -translate-x-1/2 shadow-inner"></div>
          
          {/* Animated border */}
          <motion.div 
            className="absolute -top-5 -left-5 -right-5 -bottom-5 border-4 border-dashed border-birthday-pink-200 rounded-xl"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* 3D effect elements */}
          <div className="absolute top-0 left-0 w-full h-1/4 bg-white opacity-10 transform skew-x-45"></div>
          <div className="absolute bottom-0 right-0 w-full h-1/4 bg-black opacity-10 transform -skew-x-45"></div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default MysteryBox
