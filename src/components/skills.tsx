import { Card, CardContent } from './ui/card'
import { skills, softSkills } from '@/lib/constants'
export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm group"
              >
                <CardContent className="p-6 text-center">
                  <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                  <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Soft Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm group"
                >
                  <CardContent className="p-6 text-center">
                    <Icon className="h-10 w-10 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                    <h4 className="font-semibold text-gray-900 mb-3">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
