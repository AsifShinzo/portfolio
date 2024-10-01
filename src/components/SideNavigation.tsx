import { motion } from 'framer-motion'
import { Github, Twitter, Music, Home } from 'lucide-react'

export default function SideNavigation({ isDarkMode, scrollToSection }: { isDarkMode: boolean, scrollToSection: (index: number) => void }) {
  return (
    <nav className="fixed left-0 top-0 bottom-0 w-16 flex flex-col items-center justify-between py-8 z-10">
      <div className="flex flex-col items-center space-y-8">
        <motion.div 
          className={`w-12 h-12 ${isDarkMode ? 'bg-white bg-opacity-10' : 'bg-black bg-opacity-10'} rounded-full flex items-center justify-center cursor-pointer overflow-hidden`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection(0)}
        >
          <Home className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
        </motion.div>
        <div className="flex flex-col items-center space-y-16">
          <button 
            className={`font-medium transform -rotate-90 whitespace-nowrap ${isDarkMode ? 'text-white hover:text-purple-400' : 'text-black hover:text-purple-600'} transition-colors duration-300`}
            onClick={() => scrollToSection(1)}
          >
            Projects
          </button>
          <button 
            className={`font-medium transform -rotate-90 whitespace-nowrap ${isDarkMode ? 'text-white hover:text-purple-400' : 'text-black hover:text-purple-600'} transition-colors duration-300`}
            onClick={() => scrollToSection(2)}
          >
            About me
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <a href="https://github.com/AsifShinzo" target="_blank" rel="noopener noreferrer">
          <Github className={`w-6 h-6 ${isDarkMode ? 'text-white hover:text-purple-400' : 'text-black hover:text-purple-600'} transition-colors duration-300`} />
        </a>
        <a href="https://x.com/AsifShaikh_Art" target="_blank" rel="noopener noreferrer">
          <Twitter className={`w-6 h-6 ${isDarkMode ? 'text-white hover:text-purple-400' : 'text-black hover:text-purple-600'} transition-colors duration-300`} />
        </a>
        <a href="https://open.spotify.com/user/317qixiexnwkswbrcm6o7ce4di3u?si=42376ee7aaee4325" target="_blank" rel="noopener noreferrer">
          <Music className={`w-6 h-6 ${isDarkMode ? 'text-white hover:text-purple-400' : 'text-black hover:text-purple-600'} transition-colors duration-300`} />
        </a>
      </div>
    </nav>
  )
}