import { motion } from 'framer-motion'

const memoriesData = [
  {
    title: "Birthday Girl 🎉",
    date: "March 29th, 2025",
    description: "Another year, another level unlocked! Have the best year ever! 🎂✨",
    image: "/nn.jpeg"
  },
  {
    title: "Birthday Surprise from You 🎁",
    date: "My Birthday 2023",
    description: "Your gift? Perfect. My reaction? Over the moon! Loved it so much! 💖",
    image: "/kudae.jpg"
  },
  {
    title: "Real Friends or Reel Friends? 🎥",
    date: "Always",
    description: "Who needs words when reels say it all? Communication level: unlocked. ✌️😆",
    image: "/reels.jpg"
  },
  {
    title: "Late-Night Conversations 🌙",
    date: "Always",
    description: "The deep talks that strengthen our friendship every time. Deep talk? Yeah, deep talk. 🤫",
    image: "/talk.jpg"
  },
  {
    title: "Film Recommender 🎬",
    date: "Always",
    description: `This is me suggesting you watch "Game of Thrones", even though you never will. 😂 I won't stop anyway. 😎`,
    image: "/funny.gif"
  }
]


const Memories = () => {
  return (
    <div className="max-w-sm sm:max-w-md md:max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-birthday-pink-500 mb-6 sm:mb-8 text-center">Our Beautiful Memories</h2>
      
      <div className="relative">
        {/* Timeline line - hidden on small mobile */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-birthday-pink-300 hidden md:block"></div>
        
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
              <div className="md:w-1/2 flex justify-center items-center">
                <div className="w-full max-w-[180px] sm:w-48 md:w-56 lg:w-64 h-48 md:h-56 lg:h-64 bg-gray-200 rounded-xl overflow-hidden relative shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-5xl sm:text-6xl bg-birthday-pink-400 bg-opacity-40">
                    <img src={memory.image} alt="" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 sm:p-4">
                    <p className="text-white text-sm sm:text-base font-medium">{memory.date}</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 flex flex-col justify-center relative">
                
                {/* Timeline dot - hidden on mobile */}
                <div className="absolute left-0 md:left-0 top-0 md:top-1/2 transform md:-translate-y-1/2 md:-translate-x-1/2 w-4 sm:w-6 h-4 sm:h-6 rounded-full shadow-lg z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 font-bold text-pink-600 p-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                  </svg>

                </div>
                
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
        <p className="text-base sm:text-lg text-birthday-pink-400 font-medium">Let's make many more memories together!</p>
      </motion.div>
    </div>
  )
}

export default Memories
