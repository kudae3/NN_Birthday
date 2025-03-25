import { motion } from 'framer-motion'

const BirthdayCard = () => {
  return (
    <motion.div 
      className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl card-3d relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ 
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.5s ease, box-shadow 0.5s ease'
      }}
    >
      
      {/* Container for the girl.gif image with proper positioning */}
      <div className="flex items-center justify-center bg-pink-100 py-4 relative overflow-hidden">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative z-10"
        >
          <img 
            className="h-36 sm:h-44 object-contain" 
            src="/girl.gif" 
            alt="Birthday Girl" 
          />
        </motion.div>
        
        {/* Decorative elements behind the image */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-48 h-48 rounded-full bg-pink-300"></div>
        </div>
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
          
          <motion.p 
            className="text-xl font-bold mt-6"
            animate={{ 
              color: ['#ff7eb6', '#ff3aac', '#ff0096', '#ff3aac', '#ff7eb6'],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              color: { duration: 3, repeat: Infinity },
              scale: { duration: 2, repeat: Infinity }
            }}
          >
            Happy Birthday! 🎉
          </motion.p>
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
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-birthday-pink-300 to-transparent"></div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default BirthdayCard
