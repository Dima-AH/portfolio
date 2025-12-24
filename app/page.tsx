import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { 
  Code2, 
  Palette, 
  Layout, 
  Rocket, 
  Sparkles,
  ArrowRight,
  Zap,
  Smartphone,
  Target
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-[#020617]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-12">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-linear-to-b from-[#2563EB]/5 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-b from-[#020617] to-[#050914]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center">
            <AnimatedSection delay={0.1}>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#020a1a]/60 px-6 py-3 text-sm text-[#cbd5f5] border border-[#2563EB]/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#0EA5E9]" />
                <span>سلام، به پورتفولیوی من خوش آمدید</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  <span className="bg-linear-to-r from-[#2563EB] to-[#0EA5E9] bg-clip-text text-transparent">
                    دیما
                  </span>
                  <span className="text-[#f8fafc] block mt-2">توسعه‌دهنده فرانت‌اند</span>
                </h1>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <p className="text-lg md:text-xl text-[#93a4c3] mb-10 max-w-2xl mx-auto leading-relaxed">
                متخصص در ساخت وب‌اپلیکیشن‌های مدرن، واکنش‌گرا و با عملکرد بالا. 
                ترکیبی از زیبایی بصری، کارایی بی‌نظیر و کدهای تمیز.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  href="/projects" 
                  className="group px-8 py-3.5 bg-linear-to-r from-[#1E3A8A] to-[#0EA5E9] text-white font-semibold rounded-lg hover:from-[#2563EB] hover:to-[#0EA5E9] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-[#2563EB]/30"
                >
                  <span>مشاهده پروژه‌ها</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-3.5 border border-[#2563EB]/30 text-[#f8fafc] font-semibold rounded-lg hover:bg-[#2563EB]/10 hover:border-[#0EA5E9]/40 transition-all duration-300"
                >
                  شروع همکاری
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <div className="mt-16">
                <p className="text-[#93a4c3] text-sm mb-6">تکنولوژی‌های اصلی</p>
                <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
                  {[
                    { name: 'React.js', icon: <Code2 className="w-5 h-5" />, color: 'border-[#2563EB]/40 text-[#2563EB] bg-[#2563EB]/10' },
                    { name: 'Next.js', icon: <Rocket className="w-5 h-5" />, color: 'border-[#2563EB]/30 text-[#cbd5f5] bg-[#020a1a]/40' },
                    { name: 'TypeScript', icon: <Layout className="w-5 h-5" />, color: 'border-[#2563EB]/40 text-[#2563EB] bg-[#2563EB]/10' },
                    { name: 'Tailwind CSS', icon: <Palette className="w-5 h-5" />, color: 'border-[#0EA5E9]/40 text-[#0EA5E9] bg-[#0EA5E9]/10' },
                  ].map((tech) => (
                    <div 
                      key={tech.name}
                      className={`flex items-center gap-2 px-4 py-2.5 bg-[#020a1a]/40 backdrop-blur-sm border rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 ${tech.color}`}
                    >
                      {tech.icon}
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        {/* Subtle Background Patterns */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#2563EB]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#0EA5E9]/10 rounded-full blur-3xl"></div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                <span className="bg-linear-to-r from-[#2563EB] to-[#0EA5E9] bg-clip-text text-transparent">
                  حوزه‌های تخصص
                </span>
              </h2>
              <p className="text-[#93a4c3] max-w-2xl mx-auto">
                تمرکز بر کیفیت، کارایی و تجربه کاربری بی‌نظیر
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'توسعه Frontend',
                description: 'ساخت رابط‌های کاربری مدرن و تعاملی با React و Next.js',
                icon: <Zap className="w-8 h-8" />,
                color: 'border-[#2563EB]/40',
                bg: 'from-[#2563EB]/10 to-[#2563EB]/5'
              },
              {
                title: 'طراحی واکنش‌گرا',
                description: 'تطبیق‌پذیری کامل در تمام دستگاه‌ها و اندازه‌ و ابعاد های صفحه',
                icon: <Smartphone className="w-8 h-8" />,
                color: 'border-[#1E3A8A]/40',
                bg: 'from-[#1E3A8A]/10 to-[#1E3A8A]/5'
              },
              {
                title: 'پیاده‌سازی دقیق',
                description: 'تبدیل دقیق طرح‌های UI/UX به کدهای با کیفیت و قابل نگهداری',
                icon: <Target className="w-8 h-8" />,
                color: 'border-[#0EA5E9]/40',
                bg: 'from-[#0EA5E9]/10 to-[#0EA5E9]/5'
              }
            ].map((skill, index) => (
              <AnimatedSection key={skill.title} delay={0.1 * index}>
                <div className={`group bg-linear-to-br from-[#020a1a] to-[#020617] border rounded-xl p-6 hover:border-[#0EA5E9]/50 transition-all duration-300 hover:scale-[1.02] ${skill.color}`}>
                  <div className={`inline-flex p-3 rounded-lg bg-linear-to-br ${skill.bg} border ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-[#0EA5E9]">
                      {skill.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#f8fafc] mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-[#93a4c3] text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative rounded-2xl bg-linear-to-br from-[#020a1a] to-[#020617] border border-[#2563EB]/30 p-8 md:p-12 hover:border-[#0EA5E9]/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#f8fafc] mb-4">
                  آماده شروع پروژه بعدی‌تان هستید؟
                </h3>
                <p className="text-[#93a4c3] mb-8 max-w-2xl">
                  بیایید در مورد ایده‌هایتان صحبت کنیم و آن‌ها را به واقعیت تبدیل کنیم.
                  با همکاری می‌توانیم محصولی خلق کنیم که کاربرانتان عاشقش شوند.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#1E3A8A] to-[#0EA5E9] text-white font-semibold rounded-lg hover:from-[#2563EB] hover:to-[#0EA5E9] transition-all duration-300"
                >
                  <span>شروع مکالمه</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
