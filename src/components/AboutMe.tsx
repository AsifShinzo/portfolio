import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export default function AboutMe({ isDarkMode }: { isDarkMode: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: { duration: 0.5, delay: 0.5 }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, delay: 0.7 }
    }
  }

  return (
    <div ref={ref} className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      <motion.div
        className="max-w-2xl z-10"
        initial="hidden"
        animate={controls}
      >
        <motion.h2 
          className={`text-4xl font-bold mb-8 relative inline-block ${isDarkMode ? 'text-white' : 'text-black'}`}
          variants={titleVariants}
        >
          About Me
          <motion.span
            className={`absolute bottom-0 left-0 w-full h-0.5 ${isDarkMode ? 'bg-white' : 'bg-black'}`}
            variants={underlineVariants}
          />
        </motion.h2>
        <motion.div 
          className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
          variants={contentVariants}
        >
          <p className="text-sm">
            Hi, I'm a Data Science student with a passion for web development and tech exploration. I've built projects like an Amazon clone and a calculator using HTML, CSS, and JavaScript, and I'm currently honing my skills in data analytics and freelance web development.
          </p>
          <p className="text-sm">
            In my spare time, I stay active at the gym, play guitar, and occasionally dive into competitive programming. My long-term goal is to become an entrepreneur, settle abroad, and build a billion-dollar business. Along the way, I enjoy a mix of music, from calming to energetic, while focusing on achieving my aesthetic and career aspirations.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}