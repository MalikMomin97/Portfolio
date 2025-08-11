import { Globe } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Separator } from './ui/separator'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated Software Engineer with expertise in .NET development,
            passionate about creating efficient and scalable web solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Professional Summary
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I am a skilled .NET developer with hands-on experience in
                designing and developing RESTful Web APIs, working with modern
                frameworks like ASP.NET Core, and implementing robust data
                access layers using Entity Framework Core.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My expertise includes optimizing application performance,
                implementing CI/CD pipelines, and deploying applications to
                cloud platforms like Microsoft Azure. I'm committed to writing
                clean, maintainable code and staying current with the latest
                development practices.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Languages & Expertise
              </h3>
              <div className="space-y-4 mb-8">
                {['English', 'Kashmiri', 'Urdu'].map((language) => (
                  <div key={language} className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">
                      {language}
                    </span>
                  </div>
                ))}
              </div>

              <Separator className="my-6" />

              <h4 className="text-xl font-bold mb-4 text-gray-900">
                Featured Project
              </h4>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100">
                <h5 className="font-semibold text-gray-900 mb-3">
                  Stock & Inventory Management System
                </h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Developed a comprehensive system using ASP.NET Core and C# to
                  streamline inventory tracking and management across multiple
                  locations with real-time updates and analytics.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
