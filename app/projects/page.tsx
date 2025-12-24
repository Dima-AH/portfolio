// import ProjectCard from '@/components/ProjectCard'
import AnimatedSection from '@/components/AnimatedSection'
import {
  ShoppingBag,
  BarChart3,
  CheckSquare,
  GraduationCap,
  Calendar,
  Cloud,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectsPage() {
  /**
   * Project metadata used for rendering featured and grid sections
   */
  const projects = [
    {
      title: 'وبسایت لندینگ',
      description: 'وبسایت لندینگ مدرن و واکنشگرا ',
      technologies: ['Next.js 15', 'React', 'TypeScript', 'Tailwind CSS', 'PostHug'],
      category: 'static',
      github: 'https://github.com/Dima-AH/sociehub-web',
      live: 'https://sociehub.ir',
      featured: true
    }
  ]

  /**
   * Returns a semantic icon based on project title keywords
   */
  const getProjectIcon = (title: string) => {
    if (title.includes('داشبورد') || title.includes('مدیریت')) return <BarChart3 className="w-6 h-6" />
    if (title.includes('وظایف') || title.includes('تسک')) return <CheckSquare className="w-6 h-6" />
    if (title.includes('آموزش') || title.includes('آکادمی')) return <GraduationCap className="w-6 h-6" />
    if (title.includes('رزرو') || title.includes('نوبت')) return <Calendar className="w-6 h-6" />
    if (title.includes('هواشناسی') || title.includes('آب‌وهوا')) return <Cloud className="w-6 h-6" />
    return <Sparkles className="w-6 h-6" />
  }

  /**
   * Featured project highlighted at the top of the page
   */
  const featuredProject = projects.find((p) => p.featured)

  return (
    <main className="relative overflow-hidden" aria-labelledby="projects-page-title">
      {/* Background gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950" aria-hidden="true"></div>

      <div className="relative z-10">
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Page header */}
            <header>
              <AnimatedSection>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 border border-gray-700/50 mb-6">
                    <Sparkles className="w-8 h-8 text-cyan-400" aria-hidden />
                  </div>

                  <h1 id="projects-page-title" className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      پروژه‌های منتخب
                    </span>
                  </h1>

                  <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    مجموعه‌ای از پروژه‌های اجرا شده که تجربه و تخصص فنی من را نمایش می‌دهند
                  </p>
                </div>
              </AnimatedSection>
            </header>

            {/* Featured project section */}
            {featuredProject && (
              <section aria-labelledby="featured-project-title">
                <AnimatedSection delay={0.1}>
                  <article className="mb-16">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-40"></div>

                      <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/30 transition-all duration-300">
                        <div className="md:flex">
                          <div className="md:w-2/3 p-6 md:p-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 text-cyan-300 rounded-full text-xs font-medium mb-4 border border-cyan-500/20">
                              <Sparkles className="w-3 h-3" aria-hidden />
                              پروژه ویژه
                            </div>

                            <h2 id="featured-project-title" className="text-2xl font-bold text-gray-100 mb-3">
                              {featuredProject.title}
                            </h2>

                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                              {featuredProject.description}
                            </p>

                            <ul className="flex flex-wrap gap-2 mb-6" aria-label="Technologies used">
                              {featuredProject.technologies.map((tech) => (
                                <li
                                  key={tech}
                                  className="px-3 py-1.5 bg-gray-700/30 text-gray-300 rounded-lg text-xs border border-gray-600/50 hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-300"
                                >
                                  {tech}
                                </li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-3">
                              <a
                                href={featuredProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-600 text-gray-300 text-sm font-medium rounded-lg hover:border-cyan-500/30 hover:text-cyan-300 hover:bg-cyan-500/5 transition-all duration-300"
                                aria-label="View source code on GitHub"
                              >
                                <span>مشاهده کد منبع</span>
                              </a>
                            </div>
                          </div>

                          <div className="md:w-1/3 relative">
                            <div className="h-48 md:h-full bg-gradient-to-br from-cyan-500/5 to-purple-500/5 flex items-center justify-center border-t md:border-t-0 md:border-r border-gray-600/30">
                              <Image
                                src="/images/sociehub.png"
                                alt="Sociehub landing page preview"
                                width={600}
                                height={600}
                                priority
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              </section>
            )}

            {/* Technology stack summary */}
            <section aria-labelledby="tech-stack-title">
              <AnimatedSection delay={0.3}>
                <div className="mb-16 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-cyan-500/30 transition-all duration-300">
                  <h3 id="tech-stack-title" className="font-semibold text-gray-100 mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-cyan-400" aria-hidden />
                    تکنولوژی‌های اصلی استفاده شده
                  </h3>

                  <ul className="flex flex-wrap gap-3">
                    {['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PostHug'].map((tech) => (
                      <li
                        key={tech}
                        className="flex items-center gap-2 px-3 py-2 bg-gray-700/30 rounded-lg border border-gray-600/50 hover:border-cyan-500/30 transition-all duration-300"
                      >
                        <span className="w-2 h-2 rounded-full bg-cyan-500" aria-hidden />
                        <span className="text-sm text-gray-300">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </section>

            {/* Call to action */}
            <section aria-labelledby="projects-cta-title">
              <AnimatedSection delay={0.4}>
                <div className="text-center">
                  <div className="relative rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 p-8">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl" aria-hidden />

                    <div className="relative z-10">
                      <h3 id="projects-cta-title" className="text-xl font-semibold text-gray-100 mb-3">
                        پروژه‌ای در ذهن دارید؟
                      </h3>

                      <p className="text-gray-400 mb-6 text-sm max-w-xl mx-auto">
                        برای تبدیل ایده‌هایتان به محصول دیجیتالی با کیفیت، آماده همکاری هستم. بیایید در مورد جزئیات پروژه صحبت کنیم.
                      </p>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                        aria-label="Contact for collaboration"
                      >
                        <span>درخواست همکاری</span>
                        <ArrowRight className="w-4 h-4" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </section>
          </div>
        </section>
      </div>
    </main>
  )
}
