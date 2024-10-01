import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ isDarkMode, toggleTheme }: { isDarkMode: boolean, toggleTheme: () => void }) {
  return (
    <motion.button
      className="fixed top-4 right-4 z-20 p-2 rounded-full bg-opacity-20 hover:bg-opacity-30 transition-colors duration-300"
      style={{ backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }}
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDarkMode ? <Sun className="text-white" /> : <Moon className="text-black" />}
    </motion.button>
  )
}