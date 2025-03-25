import { motion } from 'framer-motion'

const wishesData = [
  {
    message: "Happy birthday to my amazing friend! May your day be as wonderful as you are.",
    from: "Sarah",
    emoji: "🎁"
  },
  {
    message: "Wishing you a day filled with happiness and a year filled with joy!",
    from: "Michael",
    emoji: "🎈"
  },
  {
    message: "Happy Birthday! You deserve all the cake, happiness, and love today.",
    from: "Jessica",
    emoji: "🍰"
  },
  {
    message: "Another adventure-filled year awaits you. Happy Birthday!",
    from: "David",
    emoji: "✨"
  },
  {
    message: "Happy Birthday to my favorite person! Thank you for always being there.",
    from: "Emma",
    emoji: "💖"
  }
]

const Wishes = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show" 
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-birthday-pink-500 mb-8 text-center">Birthday Wishes For You</h2>
      
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {wishesData.map((wish, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-birthday-pink-400"
          >
            <div className="flex items-start">
              <div className="text-4xl mr-4">{wish.emoji}</div>
              <div>
                <p className="text-gray-700 italic">"{wish.message}"</p>
                <p className="mt-3 text-birthday-pink-500 font-medium">- {wish.from}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        variants={item}
        className="mt-12 bg-birthday-pink-100 p-8 rounded-xl text-center"
      >
        <h3 className="text-xl font-bold text-birthday-pink-500 mb-4">Add Your Wish</h3>
        <textarea 
          className="w-full p-4 rounded-lg border border-birthday-pink-200 focus:outline-none focus:ring-2 focus:ring-birthday-pink-400 mb-4" 
          rows="3"
          placeholder="Write your birthday wish here..."
        ></textarea>
        <button className="bg-birthday-pink-400 hover:bg-birthday-pink-500 text-white font-bold py-2 px-6 rounded-full shadow-md transition-colors">
          Send Wish
        </button>
      </motion.div>
    </motion.div>
  )
}

export default Wishes
