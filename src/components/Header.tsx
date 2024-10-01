import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface HeaderProps {
  decodedName: string
  decodedRole: string
  currentRole: number
  isDarkMode: boolean
  showTopSlideIndicator: boolean
  scrollToSection: (index: number) => void
}

export default function Header({ decodedName, decodedRole, currentRole, isDarkMode, showTopSlideIndicator, scrollToSection }: HeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex flex-col items-center justify-center flex-grow">
        <motion.h1
          className={`text-4xl md:text-6xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 700 }}
        >
          {decodedName}
        </motion.h1>
        <motion.h2
          className={`text-3xl md:text-5xl font-medium mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}
          key={currentRole}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500 }}
        >
          {decodedRole}
        </motion.h2>
      </div>
      <div className="h-16 flex items-center justify-center">
        <AnimatePresence>
          {showTopSlideIndicator && (
            <motion.div
              className="cursor-pointer"
              initial={{ opacity: 0, y: 0 }}
              animate={{ 
                opacity: 1, 
                y: [0, 10, 0],
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut",
                  },
                },
              }}
              exit={{ opacity: 0, y: 20 }}
              onClick={() => scrollToSection(1)}
            >
              <ChevronDown size={48} className={isDarkMode ? 'text-white' : 'text-black'} strokeWidth={1} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}