'use client'

import { useEffect, useRef } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import {
  Code2,
  Layout,
  Palette,
  GitBranch,
  Figma,
  Cpu,
  Settings,
  Users,
  Target,
  Eye,
  RefreshCw,
  Clock,
  MessageSquare,
  Award,
  FileText,
  Globe,
  Grid3x3,
  Zap,
  Terminal
} from 'lucide-react'

export default function SkillsPage() {
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([])

  // تابع برای تنظیم رفرنس هر مهارت
  const setSkillBarRef = (catIndex: number, skillIndex: number) => (el: HTMLDivElement | null) => {
    if (el) {
      // ایجاد index یکتا برای هر مهارت
      const uniqueIndex = catIndex * 10 + skillIndex
      skillBarsRef.current[uniqueIndex] = el
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBar = entry.target as HTMLElement
            const width = skillBar.getAttribute('data-width')
            if (width) {
              setTimeout(() => {
                skillBar.style.width = width
              }, 100)
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    const currentRefs = skillBarsRef.current
    
    currentRefs.forEach((bar) => {
      if (bar) observer.observe(bar)
    })

    return () => {
      currentRefs.forEach((bar) => {
        if (bar) observer.unobserve(bar)
      })
    }
  }, [])

  const technicalSkills = [
    { 
      category: 'توسعه Frontend', 
      icon: <Code2 className="w-5 h-5" />,
      skills: [
        { name: 'HTML5', level: 98, color: 'from-gray-400 to-gray-300', icon: <FileText className="w-4 h-4" /> },
        { name: 'CSS3', level: 95, color: 'from-cyan-500 to-cyan-400', icon: <Layout className="w-4 h-4" /> },
        { name: 'JavaScript', level: 92, color: 'from-gray-500 to-gray-400', icon: <Code2 className="w-4 h-4" /> },
        { name: 'TypeScript', level: 85, color: 'from-cyan-600 to-cyan-500', icon: <Terminal className="w-4 h-4" /> },
        { name: 'React.js', level: 90, color: 'from-cyan-500 to-cyan-400', icon: <Zap className="w-4 h-4" /> },
        { name: 'Next.js', level: 88, color: 'from-gray-700 to-gray-600', icon: <Globe className="w-4 h-4" /> },
      ]
    },
    { 
      category: 'استایلینگ & UI', 
      icon: <Palette className="w-5 h-5" />,
      skills: [
        { name: 'Tailwind CSS', level: 94, color: 'from-teal-500 to-cyan-500', icon: <Palette className="w-4 h-4" /> },
        { name: 'Bootstrap', level: 87, color: 'from-purple-500 to-purple-400', icon: <Grid3x3 className="w-4 h-4" /> },
        { name: 'CSS Grid', level: 91, color: 'from-gray-500 to-gray-400', icon: <Layout className="w-4 h-4" /> },
        { name: 'Flexbox', level: 93, color: 'from-cyan-500 to-cyan-400', icon: <Settings className="w-4 h-4" /> },
        { name: 'SASS/SCSS', level: 87, color: 'from-gray-600 to-gray-500', icon: <Code2 className="w-4 h-4" /> },
      ]
    },
    { 
      category: 'ابزارها & تکنولوژی', 
      icon: <Settings className="w-5 h-5" />,
      skills: [
        { name: 'Git & GitHub', level: 89, color: 'from-gray-600 to-gray-500', icon: <GitBranch className="w-4 h-4" /> },
        { name: 'Figma', level: 70, color: 'from-purple-500 to-purple-400', icon: <Figma className="w-4 h-4" /> },
        { name: 'VS Code', level: 95, color: 'from-cyan-500 to-cyan-400', icon: <Cpu className="w-4 h-4" /> },
        { name: 'Cursor', level: 90, color: 'from-gray-700 to-gray-800', icon: <Cpu className="w-4 h-4" /> },
        { name: 'Webpack', level: 82, color: 'from-gray-700 to-gray-600', icon: <Settings className="w-4 h-4" /> },
        { name: 'npm', level: 90, color: 'from-gray-600 to-gray-500', icon: <Terminal className="w-4 h-4" /> },
        { name: 'bun', level: 90, color: 'from-cyan-500 to-cyan-400', icon: <Terminal className="w-4 h-4" /> },
      ]
    }
  ]

  const softSkills = [
    { 
      name: 'کار تیمی', 
      level: 92, 
      description: 'همکاری مؤثر در تیم‌های و مشارکت سازنده',
      icon: <Users className="w-5 h-5" />
    },
    { 
      name: 'حل مسئله', 
      level: 94, 
      description: 'تحلیل چالش‌های فنی و ارائه راه‌حل‌های بهینه',
      icon: <Target className="w-5 h-5" />
    },
    { 
      name: 'توجه به جزئیات', 
      level: 96, 
      description: 'تمرکز بر کیفیت و دقت در تمام مراحل توسعه',
      icon: <Eye className="w-5 h-5" />
    },
    { 
      name: 'انعطاف‌پذیری', 
      level: 88, 
      description: 'سازگاری با تغییرات و محیط‌های کاری پویا',
      icon: <RefreshCw className="w-5 h-5" />
    },
    { 
      name: 'مدیریت زمان', 
      level: 90, 
      description: 'برنامه‌ریزی مؤثر و تحویل به موقع پروژه‌ها',
      icon: <Clock className="w-5 h-5" />
    },
    { 
      name: 'گزارش نویسی', 
      level: 89,
      description: 'ارائه شفاف کار های انجام شده و وضعیت پروژه',
      icon: <MessageSquare className="w-5 h-5" />
    },
  ]

  const certifications = [
    { 
      name: 'React Developer Professional Certificate', 
      issuer: 'Meta', 
      year: '۱۴۰۲',
      icon: <Award className="w-5 h-5" />
    },
    { 
      name: 'Next.js Fundamentals', 
      issuer: 'Vercel', 
      year: '۱۴۰۲',
      icon: <Globe className="w-5 h-5" />
    },
    { 
      name: 'Advanced JavaScript Concepts', 
      issuer: 'Udemy', 
      year: '۱۴۰۱',
      icon: <Code2 className="w-5 h-5" />
    },
    { 
      name: 'UI/UX Design Principles', 
      issuer: 'Coursera', 
      year: '۱۴۰۰',
      icon: <Figma className="w-5 h-5" />
    },
  ]

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>
      
      <div className="relative z-10">
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <AnimatedSection>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 border border-gray-700/50 mb-6">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    مهارت‌ها و تخصص‌ها
                  </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  مجموعه جامع مهارت‌های فنی و حرفه‌ای برای ساخت محصولات دیجیتال استثنایی
                </p>
              </div>
            </AnimatedSection>

            {/* Technical Skills */}
            <div className="mb-16">
              <AnimatedSection delay={0.1}>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold text-gray-100 mb-2">
                    مهارت‌های فنی
                  </h2>
                  <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                    دانش تخصصی و تجربه عملی در تکنولوژی‌های مدرن توسعه وب
                  </p>
                </div>
              </AnimatedSection>

              <div className="grid lg:grid-cols-3 gap-6 mb-12">
                {technicalSkills.map((category, catIndex) => (
                  <AnimatedSection key={category.category} delay={0.2 + catIndex * 0.1}>
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 h-full hover:border-cyan-500/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                          <div className="text-cyan-400">
                            {category.icon}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-100">
                          {category.category}
                        </h3>
                      </div>
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skill.name} className="group">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <div className="text-cyan-400">
                                  {skill.icon}
                                </div>
                                <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors">
                                  {skill.name}
                                </span>
                              </div>
                              <span className="text-xs font-medium text-cyan-400">{skill.level}%</span>
                            </div>
                            <div className="h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                              <div
                                ref={setSkillBarRef(catIndex, skillIndex)}
                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-700 ease-out`}
                                style={{ width: '0%' }}
                                data-width={skill.level + '%'}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mb-16">
              <AnimatedSection delay={0.5}>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold text-gray-100 mb-2">
                    مهارت‌های نرم
                  </h2>
                  <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                    توانمندی‌های بین‌فردی و حرفه‌ای برای موفقیت در محیط کار
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {softSkills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-5 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <div className="text-cyan-400">
                            {skill.icon}
                          </div>
                        </div>
                        <div className="relative w-16 h-16">
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              fill="none"
                              stroke="#1e293b"
                              strokeWidth="6"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              fill="none"
                              stroke="url(#softSkillGradient)"
                              strokeWidth="6"
                              strokeLinecap="round"
                              strokeDasharray={`${skill.level * 2.513} 251.3`}
                              className="transition-all duration-700 ease-out"
                              transform="rotate(-90 50 50)"
                            />
                            <defs>
                              <linearGradient id="softSkillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#06b6d4" />
                                <stop offset="100%" stopColor="#8b5cf6" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-bold text-cyan-400">{skill.level}%</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-100 mb-2 text-sm">
                        {skill.name}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Certifications */}
            {/* <AnimatedSection delay={0.7}>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-100">گواهینامه‌ها و دوره‌ها</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="group bg-gray-800/50 rounded-lg border border-gray-700/50 p-4 hover:border-cyan-500/30 transition-all duration-300 hover:bg-gray-800/70"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                          <div className="text-cyan-400">
                            {cert.icon}
                          </div>
                        </div>
                        <h3 className="text-sm font-medium text-gray-100 group-hover:text-cyan-400 transition-colors line-clamp-2">
                          {cert.name}
                        </h3>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{cert.issuer}</span>
                        <span>{cert.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection> */}

            {/* Methodologies */}
            <AnimatedSection delay={0.8}>
              <div className="mt-8 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-cyan-500/30 transition-all duration-300">
                <h3 className="font-semibold text-gray-100 mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-cyan-400" />
                  روش‌ها و متدولوژی‌ها
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Responsive Design',
                    'Mobile First',
                    'Component-Based Architecture',
                    'Test Driven Development',
                    'Version Control',
                    'CI/CD',
                    'Performance Optimization'
                  ].map((method) => (
                    <span
                      key={method}
                      className="px-3 py-1.5 text-xs bg-cyan-500/10 text-cyan-300 rounded-lg border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  )
}