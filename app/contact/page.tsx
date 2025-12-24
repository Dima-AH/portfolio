'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import {
  Mail,
  Github,
  Linkedin,
  Clock,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Calendar,
  DollarSign,
  Users,
  Briefcase,
  Zap,
  Send // آیکون تلگرام
} from 'lucide-react'

export default function ContactPage() {
  const [submitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = [
    {
      title: 'ایمیل',
      value: 'dima.devs.7377@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      link: 'mailto:dima.devs.7377@gmail.com',
      description: 'برای ارتباط رسمی و پروژه‌ها'
    },
    {
      title: 'گیت‌هاب',
      value: 'Dima-AH',
      icon: <Github className="w-5 h-5" />,
      link: 'https://github.com/Dima-AH',
      description: 'مشاهده پروژه‌های متن باز'
    },
    {
      title: 'لینکدین',
      value: 'mr-ahmadi7377',
      icon: <Linkedin className="w-5 h-5" />,
      link: 'https://linkedin.com/in/mr-ahmadi7377',
      description: 'ارتباط حرفه‌ای'
    },
    {
      title: 'تلگرام',
      value: 'Dima_devs@',
      icon: <Send className="w-5 h-5" />,
      link: 'https://t.me/Dima_devs',
      description: 'برای ارتباط سریع و مستقیم'
    }
  ]

  const faqs = [
    {
      question: 'زمان تحویل پروژه معمولاً چقدر است؟',
      answer: 'زمان تحویل بستگی به پیچیدگی و ابعاد پروژه دارد. پروژه‌های کوچک ۱-۳ هفته و پروژه‌های بزرگتر ۴-۸ هفته زمان نیاز دارند.'
    },
    {
      question: 'نرخ پروژه‌ها چگونه محاسبه می‌شود؟',
      answer: 'بر اساس پیچیدگی پروژه، زمان مورد نیاز و ویژگی‌های درخواستی محاسبه می‌شود. برای دریافت قیمت دقیق، لطفاً جزئیات پروژه را ارسال کنید.'
    },
    {
      question: 'فرآیند همکاری چگونه است؟',
      answer: '۱. مکالمه اولیه و درک نیازها، ۲. ارائه پیشنهاد و زمان‌بندی، ۳. شروع توسعه با بروزرسانی منظم، ۴. تحویل و پشتیبانی'
    }
  ]

  const quickInfo = [
    {
      title: 'زمان کاری',
      value: 'شنبه تا چهارشنبه',
      subValue: '۹:۰۰ - ۱۸:۰۰',
      icon: <Calendar className="w-5 h-5" />
    },
    {
      title: 'نوع پروژه‌ها',
      value: 'Frontend Development',
      subValue: 'UI/UX Implementation',
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: 'روش پرداخت',
      value: 'توافقی',
      subValue: '',
      icon: <DollarSign className="w-5 h-5" />
    }
  ]

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>
      
      <div className="relative z-10">
        <section className="pt-20 pb-16 px-2">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <AnimatedSection>
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-800/50 border border-gray-700/50 mb-6">
                  <MessageSquare className="w-10 h-10 text-cyan-400" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    راه‌های ارتباطی
                  </span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  برای همکاری در پروژه‌های جدید یا دریافت مشاوره فنی، از طریق کانال‌های زیر با من در ارتباط باشید
                </p>
                
                {/* Quick Stats */}
                <div className="mt-10 flex flex-wrap justify-center gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">۱۸h</div>
                    <div className="text-sm text-gray-500">پاسخ‌گویی</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">۹۷%</div>
                    <div className="text-sm text-gray-500">رضایت مشتری</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">۳+</div>
                    <div className="text-sm text-gray-500">پروژه موفق</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Main Content - Two Columns Layout */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Contact Methods */}
                <AnimatedSection delay={0.1}>
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 hover:border-cyan-500/30 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                        <div className="text-cyan-400">
                          <Zap className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-100">کانال‌های ارتباطی</h2>
                        <p className="text-gray-500 text-sm mt-1">برای ارتباط مستقیم و فوری</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {contactInfo.map((info) => (
                        <a
                          key={info.title}
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl border border-gray-600/50 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/5"
                        >
                          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <div className="text-cyan-400">
                              {info.icon}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-100 text-base mb-1 group-hover:text-cyan-400 transition-colors">
                              {info.title}
                            </div>
                            <div className="text-gray-300 text-sm truncate">
                              {info.value}
                            </div>
                            <div className="text-gray-500 text-xs mt-2">
                              {info.description}
                            </div>
                          </div>
                          <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                            →
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Availability Status */}
                <AnimatedSection delay={0.3}>
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 hover:border-cyan-500/30 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-100 flex items-center gap-2">
                          <Clock className="w-5 h-5 text-cyan-400" />
                          وضعیت دسترسی
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">وضعیت فعلی برای پذیرش پروژه‌های جدید</p>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-3 w-24 bg-green-500/10 text-green-400 rounded-full text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className=''>در دسترس</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/50">
                          <div className="text-xs text-gray-500 mb-1">پاسخ به ایمیل</div>
                          <div className="text-green-400 font-semibold">تا ۲۴ ساعت</div>
                        </div>
                        <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/50">
                          <div className="text-xs text-gray-500 mb-1">پیام تلگرام</div>
                          <div className="text-blue-400 font-semibold">تا ۱۲ ساعت</div>
                        </div>
                      </div>
                      
                      <div className="text-gray-400 text-sm leading-relaxed p-3 bg-gray-700/20 rounded-lg">
                        معمولاً بین ۹ صبح تا ۶ عصر در دسترس هستم. برای پروژه‌های بزرگ امکان برگزاری جلسه آنلاین وجود دارد.
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Quick Information Cards */}
                <AnimatedSection delay={0.2}>
                  <div className="grid md:grid-cols-3 gap-4">
                    {quickInfo.map((info, index) => (
                      <div 
                        key={index}
                        className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5 text-center"
                      >
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                          <div className="text-cyan-400">
                            {info.icon}
                          </div>
                        </div>
                        <div className="text-sm font-semibold text-gray-100 mb-2">{info.title}</div>
                        <div className="text-gray-300 text-sm">{info.value}</div>
                        <div className="text-gray-500 text-xs mt-1">{info.subValue}</div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>

                {/* FAQ Section */}
                <AnimatedSection delay={0.4}>
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 hover:border-cyan-500/30 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                        <div className="text-cyan-400">
                          <Users className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-100">سوالات متداول</h2>
                        <p className="text-gray-500 text-sm mt-1">پاسخ به رایج‌ترین سوالات</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {faqs.map((faq, index) => (
                        <div 
                          key={index} 
                          className="group p-4 bg-gray-700/20 rounded-lg border border-gray-600/50 hover:border-cyan-500/30 transition-all duration-300"
                        >
                          <div className="flex items-start gap-3 mb-2">
                            <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                            </div>
                            <h3 className="text-base font-semibold text-gray-100 group-hover:text-cyan-400 transition-colors">
                              {faq.question}
                            </h3>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed pr-2">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-700/50">
                      <p className="text-gray-500 text-sm text-center">
                        سوالی دارید که در اینجا یافت نشد؟{' '}
                        <a 
                          href="https://t.me/Dima_devs" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                        >
                          از طریق تلگرام بپرسید
                        </a>
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Status Messages */}
                <AnimatedSection delay={0.5}>
                  <div className="space-y-4">
                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-300 flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        <div className="text-sm">پیام شما با موفقیت ارسال شد. به زودی پاسخ می‌دهم.</div>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 flex items-center gap-3">
                        <XCircle className="w-5 h-5 flex-shrink-0" />
                        <div className="text-sm">خطا در ارسال پیام. لطفاً دوباره تلاش کنید.</div>
                      </div>
                    )}
                    
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-cyan-500/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-100">نکته مهم</div>
                          <div className="text-gray-500 text-xs">برای دریافت پاسخ سریع‌تر</div>
                        </div>
                      </div>
                      <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5"></div>
                          <span>موضوع پروژه خود را به طور مختصر شرح دهید</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5"></div>
                          <span>زمان‌بندی و بودجه مورد نظر را ذکر کنید</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt=1.5"></div>
                          <span>نمونه‌های مشابه از پروژه‌های مشابه را ارائه دهید</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* CTA Section */}
            <AnimatedSection delay={0.6}>
              <div className="mt-16 text-center">
                <div className="relative rounded-2xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-cyan-500/10 border border-cyan-500/20 p-8 md:p-12 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-300 rounded-full text-sm font-medium mb-4 border border-cyan-500/20">
                      <Zap className="w-4 h-4" />
                      <span>آماده همکاری</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-3">
                      بیایید با هم کار کنیم!
                    </h3>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
                      برای تبدیل ایده‌های خلاقانه‌تان به محصول دیجیتالی با کیفیت، 
                      از طریق کانال‌های ارتباطی بالا با من در تماس باشید.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4">
                      <a 
                        href="mailto:dima.devs.7377@gmail.com" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-cyan-500/20"
                      >
                        <Mail className="w-4 h-4" />
                        <span>ارسال ایمیل</span>
                      </a>
                      <a 
                        href="https://t.me/Dima_devs" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20"
                      >
                        <Send className="w-4 h-4" />
                        <span>پیام در تلگرام</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  )
}