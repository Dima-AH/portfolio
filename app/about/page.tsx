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
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          const width = el.dataset.width
          if (width) el.style.width = width
        }
      })
    }, { threshold: 0.2 })

    skillBarsRef.current.forEach(el => el && observer.observe(el))
    return () => skillBarsRef.current.forEach(el => el && observer.unobserve(el))
  }, [])

  return (
    <main aria-label="About Milad Ahmadi" className="relative">
      <div className="absolute inset-0 bg-linear-to-b from-gray-900 to-gray-950" />

      <section aria-labelledby="about-heading" className="relative z-10 pt-20 pb-16 px-10">
        <div className="max-w-6xl mx-auto">

          <AnimatedSection>
            <header className="text-center mb-16">
              <figure className="relative mb-8 flex justify-center">
                <div className="absolute -inset-8 bg-linear-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                  <Image
                    src="/images/dima.png"
                    alt="Milad Ahmadi Frontend Developer"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <figcaption className="absolute -bottom-3 px-4 py-1.5 bg-linear-to-r from-cyan-500 to-purple-500 text-white text-xs rounded-full shadow-lg">
                  Frontend Developer
                </figcaption>
              </figure>

              <h1 id="about-heading" className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                میلاد احمدی
              </h1>

              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                متخصص توسعه رابط کاربری با تمرکز بر ساخت تجربه‌های دیجیتال سریع، مدرن و کاربرمحور
              </p>
            </header>
          </AnimatedSection>

          <section aria-labelledby="profile-title" className="grid lg:grid-cols-2 gap-8 mb-16">
            <AnimatedSection>
              <article className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
                <h2 id="profile-title" className="flex items-center gap-3 text-xl font-semibold text-gray-100 mb-6">
                  <User className="w-5 h-5 text-cyan-400" />
                  پروفایل حرفه‌ای
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  میلاد احمدی توسعه‌دهنده Frontend متخصص در React و Next.js با تمرکز بر عملکرد، تجربه کاربری و معماری مقیاس‌پذیر.
                </p>
              </article>
            </AnimatedSection>

            <AnimatedSection>
              <section aria-labelledby="skills-title" className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
                <h2 id="skills-title" className="flex items-center gap-3 text-xl font-semibold text-gray-100 mb-6">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                  مهارت‌های فنی
                </h2>

                <div className="space-y-4">
                  {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript'].map((skill, index) => (
                    <div key={skill}>
                      <div className="flex justify-between text-sm text-gray-300 mb-1">
                        <span>{skill}</span>
                        <span>90%</span>
                      </div>
                      <div className="h-1.5 bg-gray-700/50 rounded-full">
                        <div
                          ref={setSkillBarRef(index)}
                          data-width="90%"
                          className="h-full bg-linear-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-700"
                          style={{ width: '0%' }}
                          role="progressbar"
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-valuenow={90}
                          aria-label={`${skill} proficiency`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>
          </section>

          <section aria-labelledby="experience-title" className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
            <h2 id="experience-title" className="flex items-center gap-3 text-xl font-semibold text-gray-100 mb-6">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              سوابق حرفه‌ای
            </h2>

            <article className="space-y-4 text-gray-400 text-sm">
              <p>
                توسعه‌دهنده Frontend فریلنسر با تجربه پیاده‌سازی داشبوردها، لندینگ پیج‌ها و سیستم‌های تحت وب مدرن.
              </p>
            </article>
          </section>

        </div>
      </section>
    </main>
  )
}
