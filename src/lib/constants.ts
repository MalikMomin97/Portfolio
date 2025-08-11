import {
  Cloud,
  Code,
  Database,
  Github,
  GraduationCap,
  Lightbulb,
  Target,
  Users,
} from 'lucide-react'
interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string }>
}

interface Experience {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

interface Education {
  degree: string
  institution: string
  percentage: string
}

interface SoftSkill {
  name: string
  icon: React.ComponentType<{ className?: string }>
  description: string
}
export const skills: Skill[] = [
  { name: 'C#', icon: Code },
  { name: 'ASP.NET Core', icon: Code },
  { name: 'ASP.NET MVC', icon: Code },
  { name: 'Web API', icon: Code },
  { name: 'SQL Server', icon: Database },
  { name: 'Entity Framework', icon: Database },
  { name: 'GitHub', icon: Github },
  { name: 'Visual Studio', icon: Code },
  { name: 'Microsoft Azure', icon: Cloud },
]

export const experiences: Experience[] = [
  {
    title: 'DotNet Developer',
    company: 'Imobisoft',
    period: 'March 2024 - Present',
    description:
      'Designed and developed RESTful Web APIs using ASP.NET Core, enabling efficient and secure communication between client applications and server-side services. Leveraged C# and Entity Framework Core to implement robust data access layers.',
    achievements: [
      'Improved API performance through asynchronous programming and caching strategies',
      'Built CI/CD pipelines using GitHub Actions',
      'Deployed applications to Azure App Services',
    ],
  },
  {
    title: 'DotNet Developer (Internship)',
    company: 'Imobisoft',
    period: 'Nov 2023 - Feb 2024',
    description:
      'Built and tested RESTful APIs to handle HTTP requests for web applications. Gained proficiency in Git and GitHub for version control.',
    achievements: [
      'Developed web applications using C# and ASP.NET MVC',
      'Worked with SQL Server for database management',
      'Integrated Entity Framework for database interactions',
    ],
  },
  {
    title: 'DotNet Developer (Internship)',
    company: 'The Digital London',
    period: 'Aug 2023 - Oct 2023',
    description:
      'Developed web applications using C# and ASP.NET MVC. Worked with SQL Server for database management and queries.',
    achievements: [
      'Built RESTful APIs for web applications',
      'Collaborated on projects using Git and GitHub',
      'Gained experience in version control workflows',
    ],
  },
]

export const education: Education[] = [
  {
    degree: 'B.Tech in Electronics & Communication',
    institution: 'Govt College of Engineering & Technology Safapora Ganderbal',
    percentage: '70%',
  },
  {
    degree: 'Higher Secondary',
    institution: 'S. P Higher Secondary School',
    percentage: 'Completed',
  },
  {
    degree: 'Matriculation',
    institution: 'St. Pauls International Academy',
    percentage: 'Completed',
  },
]

export const softSkills: SoftSkill[] = [
  {
    name: 'Problem Solving',
    icon: Lightbulb,
    description:
      'Strong analytical thinker with structured approach to debugging',
  },
  {
    name: 'Team Collaboration',
    icon: Users,
    description:
      'Works well in cross-functional teams and supports peer reviews',
  },
  {
    name: 'Adaptability',
    icon: Target,
    description:
      'Quick to learn new technologies and flexible with changing requirements',
  },
  {
    name: 'Continuous Learning',
    icon: GraduationCap,
    description:
      'Committed to staying updated with modern development practices',
  },
]
