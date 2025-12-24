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
  /**
   * Stores references to each animated skill bar
   * Used by IntersectionObserver to trigger width animation on scroll
   */
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([])

  /**
   * Returns a callback ref for each skill bar
   * Creates a predictable unique index based on category and skill index
   */
  const setSkillBarRef =
    (catIndex: number, skillIndex: number) => (el: HTMLDivElement | null) => {
      if (el) {
        const uniqueIndex = catIndex * 10 + skillIndex
        skillBarsRef.current[uniqueIndex] = el
      }
    }

  /**
   * Triggers skill bar animation when they enter the viewport
   */
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

  /**
   * Technical skill categories and their proficiency levels
   */
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
        { name: 'Next.js', level: 88, color: 'from-gray-700 to-gray-600', icon: <Globe className="w-4 h-4" /> }
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
        { name: 'SASS/SCSS', level: 87, color: 'from-gray-600 to-gray-500', icon: <Code2 className="w-4 h-4" /> }
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
        { name: 'bun', level: 90, color: 'from-cyan-500 to-cyan-400', icon: <Terminal className="w-4 h-4" /> }
      ]
    }
  ]

  /**
   * Soft skills with descriptive metadata
   */
  const softSkills = [
    { name: 'کار تیمی', level: 92, description: 'همکاری مؤثر در تیم‌های و مشارکت سازنده', icon: <Users className="w-5 h-5" /> },
    { name: 'حل مسئله', level: 94, description: 'تحلیل چالش‌های فنی و ارائه راه‌حل‌های بهینه', icon: <Target className="w-5 h-5" /> },
    { name: 'توجه به جزئیات', level: 96, description: 'تمرکز بر کیفیت و دقت در تمام مراحل توسعه', icon: <Eye className="w-5 h-5" /> },
    { name: 'انعطاف‌پذیری', level: 88, description: 'سازگاری با تغییرات و محیط‌های کاری پویا', icon: <RefreshCw className="w-5 h-5" /> },
    { name: 'مدیریت زمان', level: 90, description: 'برنامه‌ریزی مؤثر و تحویل به موقع پروژه‌ها', icon: <Clock className="w-5 h-5" /> },
    { name: 'گزارش نویسی', level: 89, description: 'ارائه شفاف کار های انجام شده و وضعیت پروژه', icon: <MessageSquare className="w-5 h-5" /> }
  ]

  return (
    <main className="relative overflow-hidden" aria-labelledby="skills-page-title">
      {/* Background gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950" aria-hidden="true"></div>

      <div className="relative z-10">
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Page header */}
            <header>
              <AnimatedSection>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 border border-gray-700/50 mb-6">
                    <Zap className="w-8 h-8 text-cyan-400" aria-hidden />
                  </div>

                  <h1 id="skills-page-title" className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      مهارت‌ها و تخصص‌ها
                    </span>
                  </h1>

                  <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    مجموعه جامع مهارت‌های فنی و حرفه‌ای برای ساخت محصولات دیجیتال استثنایی
                  </p>
                </div>
              </AnimatedSection>
            </header>

            {/* Technical skills section */}
            <section aria-labelledby="technical-skills-title" className="mb-16">
              <AnimatedSection delay={0.1}>
                <div className="text-center mb-8">
                  <h2 id="technical-skills-title" className="text-2xl font-semibold text-gray-100 mb-2">
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
                    <article className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 h-full hover:border-cyan-500/30 transition-all duration-300">
                      <header className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                          {category.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-100">{category.category}</h3>
                      </header>

                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skill.name}>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2 text-cyan-400">
                                {skill.icon}
                                <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                              </div>
                              <span className="text-xs font-medium text-cyan-400">{skill.level}%</span>
                            </div>

                            <div className="h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                              <div
                                ref={setSkillBarRef(catIndex, skillIndex)}
                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-700 ease-out`}
                                style={{ width: '0%' }}
                                data-width={`${skill.level}%`}
                                aria-hidden
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </article>
                  </AnimatedSection>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  )
}
