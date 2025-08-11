import { Briefcase } from 'lucide-react'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'
import { experiences } from '@/lib/constants'

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600">
            My professional journey in software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-blue-600 font-semibold mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 font-medium">{exp.period}</p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <Badge
                      variant="outline"
                      className="border-blue-600 text-blue-600 px-4 py-2"
                    >
                      <Briefcase className="h-4 w-4 mr-2" />
                      {index === 0 ? 'Current Role' : 'Internship'}
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Key Achievements:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
