import { motion } from 'framer-motion'

export default function AnimatedBackground({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className="absolute inset-0 z-0">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: isDarkMode
            ? [
                "linear-gradient(45deg, #000000, #4B0082)",
                "linear-gradient(45deg, #4B0082, #000000)",
                "linear-gradient(45deg, #000000, #4B0082)",
              ]
            : [
                "linear-gradient(45deg, #FFFFFF, #E6E6FA)",
                "linear-gradient(45deg, #E6E6FA, #FFFFFF)",
                "linear-gradient(45deg, #FFFFFF, #E6E6FA)",
              ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <motion.circle
          cx="50%"
          cy="50%"
          r="30%"
          fill="none"
          stroke={isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
          strokeWidth="2"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.circle
          cx="70%"
          cy="30%"
          r="20%"
          fill="none"
          stroke={isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}
          strokeWidth="2"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M0,50 Q25,0 50,50 T100,50"
          fill="none"
          stroke={isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
          strokeWidth="2"
          animate={{
            d: [
              "M0,50 Q25,0 50,50 T100,50",
              "M0,50 Q25,100 50,50 T100,50",
              "M0,50 Q25,0 50,50 T100,50",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  )
}