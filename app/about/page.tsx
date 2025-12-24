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
  Sparkles
} from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([])

  const setSkillBarRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) skillBarsRef.current[index] = el
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const width = el.getAttribute('data-width')
            if (width) {
              setTimeout(() => {
                el.style.width = width
              }, 100)
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    const refs = skillBarsRef.current
    refs.forEach((bar) => bar && observer.observe(bar))

    return () => {
      refs.forEach((bar) => bar && observer.unobserve(bar))
    }
  }, [])

  const hardSkills = [
    { name: 'HTML/CSS', level: 95, icon: <Layout className="w-4 h-4" />, color: 'from-sky-400 to-sky-300' },
    { name: 'JavaScript', level: 92, icon: <Code2 className="w-4 h-4" />, color: 'from-indigo-400 to-indigo-300' },
    { name: 'React.js', level: 90, icon: <Code2 className="w-4 h-4" />, color: 'from-sky-500 to-sky-400' },
    { name: 'Next.js', level: 88, icon: <Briefcase className="w-4 h-4" />, color: 'from-slate-500 to-slate-400' },
    { name: 'TypeScript', level: 85, icon: <Layout className="w-4 h-4" />, color: 'from-indigo-500 to-indigo-400' },
    { name: 'Tailwind CSS', level: 94, icon: <Palette className="w-4 h-4" />, color: 'from-teal-400 to-sky-400' },
    { name: 'Bootstrap', level: 87, icon: <Palette className="w-4 h-4" />, color: 'from-violet-400 to-indigo-400' },
    { name: 'Figma', level: 70, icon: <Palette className="w-4 h-4" />, color: 'from-fuchsia-400 to-purple-400' },
    { name: 'Git', level: 89, icon: <GitBranch className="w-4 h-4" />, color: 'from-slate-400 to-slate-300' },
  ]

  const softSkills = [
    { name: 'پیاده‌سازی دقیق', description: 'تبدیل دقیق طرح‌های UI/UX به کدهای باکیفیت', icon: <Figma className="w-5 h-5" /> },
    { name: 'کار تیمی', description: 'همکاری مؤثر در تیم‌های توسعه', icon: <Users className="w-5 h-5" /> },
    { name: 'حل مسئله', description: 'تحلیل چالش‌های فنی و ارائه راه‌حل‌های بهینه', icon: <Target className="w-5 h-5" /> },
    { name: 'توجه به جزئیات', description: 'تمرکز بر کیفیت و دقت در تمام مراحل توسعه', icon: <Eye className="w-5 h-5" /> },
    { name: 'انعطاف‌پذیری', description: 'سازگاری با محیط‌های کاری پویا و پروژه‌های متنوع', icon: <RefreshCw className="w-5 h-5" /> },
    { name: 'گزارش نویسی', description: 'ارائه شفاف کار های انجام شده و وضعیت پروژه', icon: <MessageSquare className="w-5 h-5" /> },
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
  <div className="absolute inset-0 bg-linear-to-b from-[#020617] to-[#050914]"></div>
  
  <div className="relative z-10">
    {/* Hero Section */}
    <section className="pt-20 pb-16 px-10">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            {/* Profile Avatar Container */}
            <div className="relative mb-8 flex justify-center">
              {/* Outer Glow Effects */}
              <div className="absolute -inset-8 bg-linear-to-r from-[#2563EB]/20 via-[#1E3A8A]/20 to-[#0EA5E9]/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Main Profile Container */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#1E3A8A] shadow-2xl group">
                {/* Gradient Background Fallback */}
                <div className="absolute inset-0 bg-linear-to-br from-[#0B1220] via-[#0E1B3F] to-[#050914]"></div>
                
                {/* Image Container - Replace this with your logo */}
                <div className="relative w-full h-full">
                  <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-[#2563EB]/10 to-[#0EA5E9]/10">
                    <div className="text-center">
                      <Image width={230} height={230} src="/images/dima.png" alt="Logo" className="object-contain" />
                    </div>
                  </div>
                  
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#020617]/40 via-transparent to-[#020617]/20"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-[#2563EB]/30 group-hover:border-[#0EA5E9]/50 transition-all duration-500"></div>
                </div>
                
                {/* Animated Rings */}
                <div className="absolute -inset-4 rounded-full border-2 border-transparent border-t-[#2563EB]/40 border-r-[#0EA5E9]/40"></div>
                <div className="absolute -inset-6 rounded-full border-2 border-transparent border-b-[#1E3A8A]/30 border-l-[#2563EB]/30"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-linear-to-br from-[#0EA5E9] to-[#2563EB] opacity-70"></div>
                <div className="absolute bottom-4 right-4 w-5 h-5 rounded-full bg-linear-to-br from-[#2563EB] to-[#1E3A8A] opacity-70"></div>
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-3 px-4 py-1.5 bg-linear-to-r from-[#2563EB] to-[#0EA5E9] text-white text-xs font-medium rounded-full shadow-lg">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  Frontend Developer
                </span>
              </div>
            </div>

            {/* Title & Description */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-[#0EA5E9] via-[#2563EB] to-[#0EA5E9] bg-clip-text text-transparent">
                درباره دیما
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              متخصص توسعه رابط کاربری با سابقه خلق تجربیات دیجیتال
              <span className="text-[#0EA5E9] font-medium"> استثنایی</span> و 
              <span className="text-[#2563EB] font-medium"> کاربرپسند</span>
            </p>
            
            {/* Stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0EA5E9]">۱+</div>
                <div className="text-sm text-slate-500">سال تجربه</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#2563EB]">۳+</div>
                <div className="text-sm text-slate-500">پروژه موفق</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0EA5E9]">۹۷%</div>
                <div className="text-sm text-slate-500">رضایت مشتری</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Bio & Skills Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Bio Card */}
          <AnimatedSection delay={0.1}>
            <div className="bg-[#0B1220]/40 backdrop-blur-sm rounded-xl border border-[#1E3A8A]/30 p-6 hover:border-[#2563EB]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#2563EB]/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-[#0EA5E9]" />
                </div>
                <h2 className="text-xl font-semibold text-slate-100">پروفایل </h2>
              </div>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
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
            <div className="bg-[#0B1220]/40 backdrop-blur-sm rounded-xl border border-[#1E3A8A]/30 p-6 hover:border-[#2563EB]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#2563EB]/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-[#0EA5E9]" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-100">مهارت‌های فنی</h2>
                </div>
                <div className="text-xs text-slate-500">
                  سطح تخصص
                </div>
              </div>
              <div className="space-y-4">
                {hardSkills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-[#0EA5E9]">
                          {skill.icon}
                        </div>
                        <span className="text-sm font-medium text-slate-300 group-hover:text-[#0EA5E9] transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-[#2563EB]">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-[#1E3A8A]/20 rounded-full overflow-hidden">
                      <div
                        ref={setSkillBarRef(index)}
                        className={`h-full bg-linear-to-r ${skill.color} rounded-full transition-all duration-700 ease-out`}
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
              <h2 className="text-2xl font-semibold text-slate-100 mb-2">
                مهارت‌های نرم
              </h2>
              <p className="text-slate-500 text-sm max-w-2xl mx-auto">
                مجموعه‌ای از توانمندی‌های بین‌فردی و حرفه‌ای
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group bg-[#0B1220]/40 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-lg p-4 hover:border-[#2563EB]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#2563EB]/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="text-[#0EA5E9]">
                        {skill.icon}
                      </div>
                    </div>
                    <h3 className="font-medium text-slate-100">
                      {skill.name}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Experience Timeline */}
        <AnimatedSection delay={0.4}>
          <div className="bg-[#0B1220]/40 backdrop-blur-sm rounded-xl border border-[#1E3A8A]/30 p-6 hover:border-[#2563EB]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#2563EB]/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#0EA5E9]" />
              </div>
              <h2 className="text-xl font-semibold text-slate-100">سوابق حرفه‌ای</h2>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-auto md:right-1/2 md:transform md:translate-x-1/2 top-0 bottom-0 w-px bg-linear-to-b from-[#1E3A8A] to-[#020617]"></div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={exp.year} className="relative">
                    <div className="md:flex items-start gap-8">
                      <div className="md:w-1/2 md:text-right mb-4 md:mb-0">
                        <div className="inline-flex items-center gap-2 text-[#0EA5E9] font-medium text-sm mb-1">
                          <Calendar className="w-4 h-4" />
                          {exp.year}
                        </div>
                        <h3 className="text-lg font-semibold text-slate-100 mb-1">
                          {exp.title}
                        </h3>
                        <div className="text-slate-500 text-sm">
                          {exp.company}
                        </div>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="absolute left-3 md:left-auto md:right-1/2 md:transform md:translate-x-1/2 top-2">
                        <div className="w-3 h-3 bg-[#2563EB] rounded-full border-4 border-[#020617]"></div>
                      </div>
                      
                      <div className="md:w-1/2 md:pl-8">
                        <div className="flex items-start gap-3 pl-12 md:pl-0">
                          <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 flex items-center justify-center shrink-0 mt-1">
                            <div className="text-[#0EA5E9]">
                              {exp.icon}
                            </div>
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed mt-1 md:mt-3">
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
            <div className="bg-[#0B1220]/40 backdrop-blur-sm rounded-xl border border-[#1E3A8A]/30 p-6 hover:border-[#2563EB]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#2563EB]/10">
              <h3 className="font-semibold text-slate-100 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#0EA5E9]" />
                تحصیلات
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-[#2563EB] text-sm font-medium mb-1">
                    ۱۴۰۲ - ۱۴۰۵
                  </div>
                  <div className="text-slate-100 text-sm mt-1">دیپلم شبکه و نرم افزار</div>
                  <div className="text-slate-500 text-xs mt-2">هنرستان شهید منتظرقائم یزد</div>
                </div>
              </div>
            </div>
            
            {/* Certifications block commented out exactly as original */}
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
</div>

  )
}