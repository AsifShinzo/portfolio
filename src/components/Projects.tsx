import { useRef, useState, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ExternalLink, ShoppingCart, MessageCircle, Globe } from 'lucide-react'

const projects = [
  {
    name: "Amazon Clone",
    description: "A static front-end replica of the Amazon website, meticulously crafted using HTML and CSS. This project focuses on recreating the visual aesthetics of the original site, demonstrating proficiency in layout design and styling techniques.",
    link: "https://github.com/AsifShinzo/amazon-clone",
    color: "#ff9900",
    icon: ShoppingCart
  },
  {
    name: "WhatsApp Bot",
    description: "An efficient WhatsApp group chat bot built with Baileys, leveraging WebSocket connections for optimal performance. This lightweight utility automates tasks and enhances group interactions with minimal resource usage.",
    link: "https://github.com/AsifShinzo/WABot-Automate",
    color: "#25D366",
    icon: MessageCircle
  },
  {
    name: "Portfolio Website",
    description: "An interactive and visually striking portfolio showcasing my projects, skills, and professional journey through modern web technologies and animations.",
    link: "https://github.com/AsifShinzo/portfolio",
    color: "#8A2BE2",
    icon: Globe
  },
]

export default function Projects({ isDarkMode }: { isDarkMode: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const iconVariants = {
    initial: { rotate: 0 },
    animate: { rotate: 360 },
  }

  return (
    <div ref={ref} className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <motion.h2
        className={`text-5xl font-bold mb-16 relative ${isDarkMode ? 'text-white' : 'text-black'}`}
        variants={itemVariants}
        initial="hidden"
        animate={controls}
      >
        Projects
        <motion.span
          className="absolute -bottom-2 left-0 w-full h-1 bg-purple-500"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="relative"
            variants={itemVariants}
            onHoverStart={() => setHoveredProject(index)}
            onHoverEnd={() => setHoveredProject(null)}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredProject === index ? 0.2 : 0 }}
              style={{ backgroundColor: project.color }}
              transition={{ duration: 0.3 }}
            />
            <div className={`${isDarkMode ? 'bg-white bg-opacity-10' : 'bg-black bg-opacity-5'} p-6 rounded-lg shadow-lg h-full flex flex-col justify-between relative z-10`}>
              <div>
                <motion.div
                  className={`text-5xl mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <project.icon size={40} />
                </motion.div>
                <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>{project.name}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
              </div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${isDarkMode ? 'text-white bg-white' : 'text-black bg-black'} bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-30 transition-colors duration-300 mt-4`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project <ExternalLink className="ml-2 w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}