import { motion } from 'framer-motion'

const memoriesData = [
  {
    title: "Our first hiking trip",
    date: "May 2022",
    description: "Remember when we got lost and found that amazing waterfall?"
  },
  {
    title: "Birthday surprise last year",
    date: "Your birthday 2023",
    description: "Your reaction when we all jumped out was priceless!"
  },
  {
    title: "Road trip adventures",
    date: "Summer 2023",
    description: "Three cities, countless laughs, and too many photos to count."
  },
  {
    title: "Late night conversations",
    date: "Always",
    description: "The deep talks that strengthen our friendship every time."
  }
]

const Memories = () => {
  return (
    <div className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-birthday-pink-500 mb-6 sm:mb-8 text-center">Our Beautiful Memories</h2>
      
      <div className="relative">
        {/* Timeline line - hidden on small mobile */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-birthday-pink-300 hidden sm:block"></div>
        
        {/* Memory items */}
        <div className="space-y-8 sm:space-y-12">
          {memoriesData.map((memory, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col md:flex-row gap-4 sm:gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2 flex justify-center md:justify-end items-center">
                <div className="w-full max-w-[180px] sm:w-48 md:w-56 lg:w-64 h-48 md:h-56 lg:h-64 bg-gray-200 rounded-xl overflow-hidden relative shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-5xl sm:text-6xl bg-birthday-pink-400 bg-opacity-40">
                    📷
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 sm:p-4">
                    <p className="text-white text-sm sm:text-base font-medium">{memory.date}</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 flex flex-col justify-center relative">
                {/* Timeline dot - hidden on mobile */}
                <div className="absolute left-0 md:left-0 top-0 md:top-1/2 transform md:-translate-y-1/2 md:-translate-x-1/2 w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-birthday-pink-500 shadow-lg z-10 hidden sm:block"></div>
                
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg sm:ml-8 md:ml-0 mt-3 sm:mt-0">
                  <h3 className="text-lg sm:text-xl font-bold text-birthday-pink-500 mb-2">{memory.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{memory.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 sm:mt-16 text-center"
      >
        <p className="text-base sm:text-lg text-birthday-pink-400 font-medium mb-4">Here's to making many more memories together!</p>
        <button className="bg-birthday-pink-400 hover:bg-birthday-pink-500 text-white font-bold py-2 px-4 sm:py-2 sm:px-6 rounded-full shadow-md transition-colors">
          Share a Memory
        </button>
      </motion.div>
    </div>
  )
}

export default Memories
