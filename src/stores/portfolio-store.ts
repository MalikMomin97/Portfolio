import { useState } from 'react'

// Portfolio Store
interface PortfolioState {
  activeSection: string
  isSidebarOpen: boolean
  setActiveSection: (section: string) => void
  toggleSidebar: () => void
  closeSidebar: () => void
}

// Simple state management without external libraries
export const usePortfolioStore = (): PortfolioState => {
  const [activeSection, setActiveSection] = useState('home')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return {
    activeSection,
    isSidebarOpen,
    setActiveSection,
    toggleSidebar: () => setIsSidebarOpen(!isSidebarOpen),
    closeSidebar: () => setIsSidebarOpen(false),
  }
}
