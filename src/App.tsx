import { Menu } from 'lucide-react'
import React, { useEffect } from 'react'
import About from './components/about'
import Contact from './components/contact'
import Education from './components/education'
import Experience from './components/experience'
import Header, { navigationItems } from './components/Header'
import Hero from './components/hero'
import Skills from './components/skills'
import { usePortfolioStore } from './stores/portfolio-store'

const App: React.FC = () => {
  const {
    activeSection,
    setActiveSection,
    isSidebarOpen,
    toggleSidebar,
    closeSidebar,
  } = usePortfolioStore()

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    closeSidebar()
  }

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Sidebar */}
      <Header
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Mobile Header */}
        <div className="lg:hidden sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Malik Momin Amin
            </div>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <Hero scrollToSection={scrollToSection} />
        {/* About Section */}
        <About />
        {/* Experience Section */}
        <Experience />
        {/* Skills Section */}
        <Skills />
        {/* Education Section */}
        <Education />
        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  )
}

export default App
