'use client'

import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedBackground'
import SideNavigation from '@/components/SideNavigation'
import ThemeToggle from '@/components/ThemeToggle'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import AboutMe from '@/components/AboutMe'
import Footer from '@/components/Footer'
import { getRandomJapanese } from '@/lib/utils'

const roles = ["Developer", "Student", "Guitarist"]

export default function Home() {
  const [decodedName, setDecodedName] = useState("")
  const [currentRole, setCurrentRole] = useState(0)
  const [decodedRole, setDecodedRole] = useState("")
  const [currentSection, setCurrentSection] = useState(0)
  const [showTopSlideIndicator, setShowTopSlideIndicator] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const projectsRef = useRef<HTMLDivElement>(null)
  const aboutMeRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const name = "Asif Shaikh"
    let decoded = ""
    let i = 0

    const interval = setInterval(() => {
      if (i < name.length) {
        decoded += name[i]
        setDecodedName(decoded + getRandomJapanese(name.length - i - 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const role = roles[currentRole]
    let decoded = ""
    let i = 0

    const interval = setInterval(() => {
      if (i < role.length) {
        decoded += role[i]
        setDecodedRole(decoded + getRandomJapanese(role.length - i - 1))
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 1000)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [currentRole])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTopSlideIndicator(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (index: number) => {
    setCurrentSection(index)
    setShowTopSlideIndicator(false)
    if (index === 1 && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (index === 2 && aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowTopSlideIndicator(false)
      } else {
        setShowTopSlideIndicator(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`relative flex flex-col min-h-screen overflow-hidden ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} font-sans`}>
      <AnimatedBackground isDarkMode={isDarkMode} />
      <SideNavigation isDarkMode={isDarkMode} scrollToSection={scrollToSection} />
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="relative flex-1 ml-16 z-10">
        <Header 
          decodedName={decodedName} 
          decodedRole={decodedRole} 
          currentRole={currentRole} 
          isDarkMode={isDarkMode} 
          showTopSlideIndicator={showTopSlideIndicator}
          scrollToSection={scrollToSection}
        />
        <div ref={projectsRef}>
          <Projects isDarkMode={isDarkMode} />
        </div>
        <div ref={aboutMeRef}>
          <AboutMe isDarkMode={isDarkMode} />
        </div>
        <div ref={footerRef}>
          <Footer isDarkMode={isDarkMode} />
        </div>
      </main>
    </div>
  )
}