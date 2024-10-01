import { LucideIcon } from 'lucide-react'

export interface Project {
  name: string
  description: string
  link: string
  color: string
  icon: LucideIcon
}

export interface ThemeProps {
  isDarkMode: boolean
}

export interface ScrollProps {
  scrollToSection: (index: number) => void
}