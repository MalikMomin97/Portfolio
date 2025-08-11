import { GraduationCap, Trophy } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { education } from '@/lib/constants'
export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Education
          </h2>
          <p className="text-xl text-gray-600">My educational background</p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-full">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <Badge
                      variant="outline"
                      className="border-green-600 text-green-600 px-4 py-2"
                    >
                      <Trophy className="h-4 w-4 mr-2" />
                      {edu.percentage}
                    </Badge>
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
