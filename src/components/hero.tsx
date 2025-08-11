import { Download, Mail, MapPin, MessageSquare, Phone } from 'lucide-react'
import { Button } from './ui/button'
interface HeroProps {
  scrollToSection: (sectionId: string) => void
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                Malik Momin Amin
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-20 blur-3xl -z-10"></div>
            </div>
            <p className="text-2xl md:text-3xl text-gray-700 font-semibold">
              Software Engineer & .NET Developer
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Passionate about building robust, scalable web applications and
              APIs using modern .NET technologies with a focus on clean
              architecture and performance optimization.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <MapPin className="h-5 w-5 text-purple-600" />
              <span className="font-medium">Srinagar, J&K - 190001</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Mail className="h-5 w-5 text-blue-600" />
              <span className="font-medium">malikmomin215@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Phone className="h-5 w-5 text-green-600" />
              <span className="font-medium">9797882526</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              <Download className="h-5 w-5 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
