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
    <div className="relative overflow-hidden bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-12">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-linear-to-b from-blue-500/5 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-tr from-gray-800/20 via-transparent to-purple-900/10"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center">
            <AnimatedSection delay={0.1}>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gray-800/50 px-6 py-3 text-sm text-gray-300 border border-gray-600 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>سلام، به پورتفولیوی من خوش آمدید</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    دیما
                  </span>
                  <span className="text-gray-200 block mt-2">توسعه‌دهنده فرانت‌اند</span>
                </h1>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                متخصص در ساخت وب‌اپلیکیشن‌های مدرن، واکنش‌گرا و با عملکرد بالا. 
                ترکیبی از زیبایی بصری، کارایی بی‌نظیر و کدهای تمیز.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  href="/projects" 
                  className="group px-8 py-3.5 bg-linear-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-blue-500/25"
                >
                  <span>مشاهده پروژه‌ها</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-3.5 border border-gray-600 text-gray-200 font-semibold rounded-lg hover:bg-gray-800/50 hover:border-blue-500/40 transition-all duration-300"
                >
                  شروع همکاری
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <div className="mt-16">
                <p className="text-gray-500 text-sm mb-6">تکنولوژی‌های اصلی</p>
                <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
                  {[
                    { name: 'React.js', icon: <Code2 className="w-5 h-5" />, color: 'border-blue-500/40 text-blue-400 bg-blue-500/10' },
                    { name: 'Next.js', icon: <Rocket className="w-5 h-5" />, color: 'border-gray-600 text-gray-300 bg-gray-800/30' },
                    { name: 'TypeScript', icon: <Layout className="w-5 h-5" />, color: 'border-blue-600/40 text-blue-500 bg-blue-600/10' },
                    { name: 'Tailwind CSS', icon: <Palette className="w-5 h-5" />, color: 'border-teal-500/40 text-teal-400 bg-teal-500/10' },
                  ].map((tech) => (
                    <div 
                      key={tech.name}
                      className={`flex items-center gap-2 px-4 py-2.5 bg-gray-800/30 backdrop-blur-sm border rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 ${tech.color}`}
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
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  حوزه‌های تخصص
                </span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
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
                color: 'border-blue-500/40',
                bg: 'from-blue-500/10 to-blue-600/5'
              },
              {
                title: 'طراحی واکنش‌گرا',
                description: 'تطبیق‌پذیری کامل در تمام دستگاه‌ها و اندازه‌ و ابعاد های صفحه',
                icon: <Smartphone className="w-8 h-8" />,
                color: 'border-purple-500/40',
                bg: 'from-purple-500/10 to-purple-600/5'
              },
              {
                title: 'پیاده‌سازی دقیق',
                description: 'تبدیل دقیق طرح‌های UI/UX به کدهای با کیفیت و قابل نگهداری',
                icon: <Target className="w-8 h-8" />,
                color: 'border-teal-500/40',
                bg: 'from-teal-500/10 to-teal-600/5'
              }
            ].map((skill, index) => (
              <AnimatedSection key={skill.title} delay={0.1 * index}>
                <div className={`group bg-linear-to-br from-gray-800 to-gray-900 border rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] ${skill.color}`}>
                  <div className={`inline-flex p-3 rounded-lg bg-linear-to-br ${skill.bg} border ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={skill.color.includes('blue') ? 'text-blue-400' : skill.color.includes('purple') ? 'text-purple-400' : 'text-teal-400'}>
                      {skill.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
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
            <div className="relative rounded-2xl bg-linear-to-br from-gray-800 to-gray-900 border border-gray-700 p-8 md:p-12 hover:border-blue-500/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-200 mb-4">
                  آماده شروع پروژه بعدی‌تان هستید؟
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl">
                  بیایید در مورد ایده‌هایتان صحبت کنیم و آن‌ها را به واقعیت تبدیل کنیم.
                  با همکاری می‌توانیم محصولی خلق کنیم که کاربرانتان عاشقش شوند.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300"
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