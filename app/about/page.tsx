'use client'

import { useEffect, useRef } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import {
  User,
  Code2,
  Palette,
  Layout,
  GitBranch,
  Figma,
  Users,
  Target,
  Eye,
  RefreshCw,
  MessageSquare,
  Briefcase,
  Calendar,
  Award,
  Sparkles,
  Star,
  Zap
} from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([])

  // تابع برای تنظیم رفرنس
  const setSkillBarRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) {
      skillBarsRef.current[index] = el
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

  const hardSkills = [
    { 
      name: 'HTML/CSS', 
      level: 95, 
      icon: <Layout className="w-4 h-4" />,
      color: 'from-gray-400 to-gray-300' 
    },
    { 
      name: 'JavaScript', 
      level: 92, 
      icon: <Code2 className="w-4 h-4" />,
      color: 'from-gray-500 to-gray-400' 
    },
    { 
      name: 'React.js', 
      level: 90, 
      icon: <Code2 className="w-4 h-4" />,
      color: 'from-cyan-500 to-cyan-400' 
    },
    { 
      name: 'Next.js', 
      level: 88, 
      icon: <Briefcase className="w-4 h-4" />,
      color: 'from-gray-700 to-gray-600' 
    },
    { 
      name: 'TypeScript', 
      level: 85, 
      icon: <Layout className="w-4 h-4" />,
      color: 'from-cyan-600 to-cyan-500' 
    },
    { 
      name: 'Tailwind CSS', 
      level: 94, 
      icon: <Palette className="w-4 h-4" />,
      color: 'from-teal-500 to-cyan-500' 
    },
    { 
      name: 'Bootstrap', 
      level: 87, 
      icon: <Palette className="w-4 h-4" />,
      color: 'from-purple-500 to-purple-400' 
    },
    { 
      name: 'Figma', 
      level: 70, 
      icon: <Palette className="w-4 h-4" />,
      color: 'from-purple-700 to-purple-700' 
    },
    { 
      name: 'Git', 
      level: 89, 
      icon: <GitBranch className="w-4 h-4" />,
      color: 'from-gray-600 to-gray-500' 
    },
  ]

  const softSkills = [
    { 
      name: 'پیاده‌سازی دقیق', 
      description: 'تبدیل دقیق طرح‌های UI/UX به کدهای باکیفیت',
      icon: <Figma className="w-5 h-5" />
    },
    { 
      name: 'کار تیمی', 
      description: 'همکاری مؤثر در تیم‌های توسعه',
      icon: <Users className="w-5 h-5" />
    },
    { 
      name: 'حل مسئله', 
      description: 'تحلیل چالش‌های فنی و ارائه راه‌حل‌های بهینه',
      icon: <Target className="w-5 h-5" />
    },
    { 
      name: 'توجه به جزئیات', 
      description: 'تمرکز بر کیفیت و دقت در تمام مراحل توسعه',
      icon: <Eye className="w-5 h-5" />
    },
    { 
      name: 'انعطاف‌پذیری', 
      description: 'سازگاری با محیط‌های کاری پویا و پروژه‌های متنوع',
      icon: <RefreshCw className="w-5 h-5" />
    },
    { 
      name: 'گزارش نویسی', 
      description: 'ارائه شفاف کار های انجام شده و وضعیت پروژه',
      icon: <MessageSquare className="w-5 h-5" />
    },
  ]

  const experiences = [
    {
      year: '۱۴۰۴ - اکنون',
      title: 'توسعه‌دهنده فرانت‌اند',
      company: 'فریلنسر',
      description: 'ساخت نمونه کار و افزایش مهارت و دانش شخصی',
      icon: <Award className="w-5 h-5" />
    },
    {
      year: '۱۴۰۴ - ۱۴۰۴',
      title: 'توسعه‌دهنده فرانت‌اند',
      company: 'چابک اندیشان پرنده افرین',
      description: 'پیاده سازی و توسعه فرانت اند اپلیکیشن مدیریت فرم به مدت ۳ ماه',
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      year: '۱۴۰۳ - ۱۴۰۴',
      title: 'توسعه‌دهنده وب',
      company: 'فریلنسر',
      description: 'اجرای پروژه‌های مستقل و ساخت نمونه‌کارهای شخصی',
      icon: <User className="w-5 h-5" />
    }
  ]

  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-10">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-16">
                {/* Profile Avatar Container */}
                <div className="relative mb-8 flex justify-center">
                  {/* Outer Glow Effects */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                  
                  {/* Main Profile Container */}
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl group">
                    {/* Gradient Background Fallback */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950"></div>
                    
                    {/* Image Container - Replace this with your logo */}
                    <div className="relative w-full h-full">
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
                        <div className="text-center">
                          <Image width={230} height={230} src="/images/dima.png" alt="Logo" className="object-contain" />
                        </div>
                      </div>
                      
                      {/* Overlay Effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-gray-900/20"></div>
                      <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-500"></div>
                    </div>
                    
                    {/* Animated Rings */}
                    <div className="absolute -inset-4 rounded-full border-2 border-transparent border-t-cyan-500/30 border-r-purple-500/30"></div>
                    <div className="absolute -inset-6 rounded-full border-2 border-transparent border-b-purple-500/20 border-l-cyan-500/20"></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 opacity-70"></div>
                    <div className="absolute bottom-4 right-4 w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 opacity-70"></div>
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute -bottom-3 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-medium rounded-full shadow-lg">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      Frontend Developer
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    درباره دیما
                  </span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                متخصص توسعه رابط کاربری با سابقه خلق تجربیات دیجیتال
                  <span className="text-cyan-400 font-medium"> استثنایی</span> و 
                  <span className="text-purple-400 font-medium"> کاربرپسند</span>
                </p>
                
                {/* Stats */}
                <div className="mt-8 flex flex-wrap justify-center gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">۱+</div>
                    <div className="text-sm text-gray-500">سال تجربه</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">۳+</div>
                    <div className="text-sm text-gray-500">پروژه موفق</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">۹۷%</div>
                    <div className="text-sm text-gray-500">رضایت مشتری</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Bio & Skills Section */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Bio Card */}
              <AnimatedSection delay={0.1}>
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-100">پروفایل </h2>
                  </div>
                  <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                    <p>
                      میلاد احمدی ، توسعه‌دهنده فرانت‌اند باسابقه و باتجربه در ساخت وب‌اپلیکیشن‌های مدرن. 
                      تخصص اصلی در توسعه رابط‌های کاربری با React و Next.js با تمرکز بر عملکرد، 
                      دسترسی‌پذیری و تجربه کاربری بی‌نظیر.
                    </p>
                    <p>
                      اعتقاد راسخ به کیفیت کد، بهترین روش‌های توسعه و همکاری مؤثر تیمی. 
                      توانایی تبدیل دقیق طرح‌های UI/UX به کدهای تمیز، قابل نگهداری و مقیاس‌پذیر.
                    </p>
                    <p>
                      پیوسته در حال یادگیری تکنولوژی‌های جدید و مشارکت در پروژه‌های چالش‌برانگیز 
                      که تأثیر مثبتی بر تجربه کاربران دارند.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Technical Skills Card */}
              <AnimatedSection delay={0.2}>
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                        <Code2 className="w-5 h-5 text-cyan-400" />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-100">مهارت‌های فنی</h2>
                    </div>
                    <div className="text-xs text-gray-500">
                      سطح تخصص
                    </div>
                  </div>
                  <div className="space-y-4">
                    {hardSkills.map((skill, index) => (
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
                            ref={setSkillBarRef(index)}
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
            </div>

            {/* Soft Skills Section */}
            <AnimatedSection delay={0.3}>
              <div className="mb-16">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold text-gray-100 mb-2">
                    مهارت‌های نرم
                  </h2>
                  <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                    مجموعه‌ای از توانمندی‌های بین‌فردی و حرفه‌ای
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {softSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <div className="text-cyan-400">
                            {skill.icon}
                          </div>
                        </div>
                        <h3 className="font-medium text-gray-100">
                          {skill.name}
                        </h3>
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Experience Timeline */}
            <AnimatedSection delay={0.4}>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-100">سوابق حرفه‌ای</h2>
                </div>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 md:left-auto md:right-1/2 md:transform md:translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gray-600 to-gray-700"></div>
                  
                  <div className="space-y-8">
                    {experiences.map((exp, index) => (
                      <div key={exp.year} className="relative">
                        <div className="md:flex items-start gap-8">
                          <div className="md:w-1/2 md:text-right mb-4 md:mb-0">
                            <div className="inline-flex items-center gap-2 text-cyan-400 font-medium text-sm mb-1">
                              <Calendar className="w-4 h-4" />
                              {exp.year}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-100 mb-1">
                              {exp.title}
                            </h3>
                            <div className="text-gray-500 text-sm">
                              {exp.company}
                            </div>
                          </div>
                          
                          {/* Timeline dot */}
                          <div className="absolute left-3 md:left-auto md:right-1/2 md:transform md:translate-x-1/2 top-2">
                            <div className="w-3 h-3 bg-cyan-500 rounded-full border-4 border-gray-900"></div>
                          </div>
                          
                          <div className="md:w-1/2 md:pl-8">
                            <div className="flex items-start gap-3 pl-12 md:pl-0">
                              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="text-cyan-400">
                                  {exp.icon}
                                </div>
                              </div>
                              <p className="text-gray-400 text-sm leading-relaxed mt-1 md:mt-3">
                                {exp.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Education & Certifications */}
            <AnimatedSection delay={0.5}>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5">
                  <h3 className="font-semibold text-gray-100 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-cyan-400" />
                    تحصیلات
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-cyan-400 text-sm font-medium mb-1">
                        ۱۴۰۲ - ۱۴۰۵
                      </div>
                      <div className="text-gray-100 text-sm mt-1">دیپلم شبکه و نرم افزار</div>
                      <div className="text-gray-500 text-xs mt-2">هنرستان شهید منتظرقائم یزد</div>
                    </div>
                  </div>
                </div>
                
                {/* <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5">
                  <h3 className="font-semibold text-gray-100 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-cyan-400" />
                    گواهینامه‌ها
                  </h3>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-300">
                      <div className="font-medium">React Developer Certificate</div>
                      <div className="text-gray-500 text-xs">Meta - ۱۴۰۲</div>
                    </div>
                    <div className="text-sm text-gray-300">
                      <div className="font-medium">Next.js Fundamentals</div>
                      <div className="text-gray-500 text-xs">Vercel - ۱۴۰۲</div>
                    </div>
                  </div>
                </div> */}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  )
}