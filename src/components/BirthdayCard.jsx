import { motion } from 'framer-motion'

const BirthdayCard = () => {
  return (
    <motion.div 
      className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl card-3d"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ 
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.5s ease, box-shadow 0.5s ease'
      }}
    >
      <div className="bg-birthday-pink-300 h-28 sm:h-40 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1
          }}
          className="bg-white rounded-full p-4 sm:p-6 shadow-lg"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="text-4xl sm:text-5xl"
          >
            🎂
          </motion.div>
        </motion.div>
      </div>
      
      <div className="p-4 sm:p-8 text-center">
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold text-birthday-pink-500 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Dearest Noh Noh,
        </motion.h2>
        
        <motion.div
          className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>
            On this special day, I want you to know how much your friendship means to me.
            You bring so much joy, laughter, and light into my life.
          </p>
          
          <p>
            May your birthday be filled with all the happiness and love you deserve.
            Here's to celebrating you today and always!
          </p>
          
          <p className="font-medium">
            Wishing you endless blessings and beautiful moments ahead.
          </p>
          
          <p className="text-birthday-pink-400 font-bold">
            Happy Birthday! 🎉
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-6 sm:mt-8 flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.7
          }}
        >
        </motion.div>
      </div>
    </motion.div>
  )
}

export default BirthdayCard
