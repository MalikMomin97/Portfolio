import {
  Briefcase,
  Code,
  GraduationCap,
  Home,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  User,
  X,
} from 'lucide-react'

// Navigation items
export const navigationItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'contact', label: 'Contact', icon: MessageSquare },
]
interface HeaderProps {
  isSidebarOpen: boolean
  closeSidebar: () => void
  scrollToSection: (sectionId: string) => void
  activeSection: string
}
export default function Header({
  isSidebarOpen,
  closeSidebar,
  scrollToSection,
  activeSection,
}: HeaderProps) {
  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white/60 backdrop-blur-xl border-r border-gray-200  transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Malik Momin
            </div>
            <button
              onClick={closeSidebar}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center px-4 py-3 text-left rounded-xl transition-all duration-200 group ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 mr-3 transition-transform group-hover:scale-110 ${
                          activeSection === item.id
                            ? 'text-white'
                            : 'text-gray-500'
                        }`}
                      />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="p-6 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2 text-blue-600" />
                <span className="truncate">malikmomin215@gmail.com</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2 text-green-600" />
                <span>9797882526</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                <span>Srinagar, J&K</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}
    </>
  )
}
