import Link from 'next/link'
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Rocket,
  FileText,
  Palette,
  Grid3x3,
  Figma,
  Sparkles,
  Heart,
  Send
} from 'lucide-react'

/**
 * Global website footer
 * Provides brand identity, navigation, social links, and tech stack information
 * Optimized for SEO, accessibility, and semantic HTML structure
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="border-t border-[#1E3A8A]/60 bg-[#020617]/40 backdrop-blur-sm"
      role="contentinfo"
      aria-label="Website footer for Milad Ahmadi"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand identity and copyright information */}
          <section className="text-center md:text-right" aria-labelledby="footer-brand">
            <div id="footer-brand" className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <div className="w-8 h-8 hidden md:flex rounded-lg bg-linear-to-br from-[#2563EB] to-[#0EA5E9] items-center justify-center shadow-lg shadow-[#2563EB]/30">
                <Code2 className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <div>
                <div className="text-blue-100 font-bold text-lg">دیما</div>
                <div className="text-[#0EA5E9] text-xs">توسعه‌دهنده فرانت‌اند</div>
              </div>
            </div>

            <p className="text-blue-200/60 text-sm max-w-xs">
              ساخت وب‌اپلیکیشن‌های مدرن با تمرکز بر عملکرد و تجربه کاربری
            </p>

            <p className="text-blue-300/40 text-xs mt-3">
              © {currentYear} | کلیه حقوق محفوظ است
            </p>
          </section>

          {/* Internal site navigation */}
          <nav className="text-center" aria-label="Footer navigation">
            <div className="font-semibold text-blue-100 mb-3 text-sm">
              دسترسی سریع
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'خانه', path: '/' },
                { name: 'درباره من', path: '/about' },
                { name: 'مهارت‌ها', path: '/skills' },
                { name: 'پروژه‌ها', path: '/projects' },
                { name: 'تماس', path: '/contact' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-blue-200/60 hover:text-[#0EA5E9] text-xs transition-colors duration-300 hover:underline hover:underline-offset-4"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Social and contact links */}
          <address className="text-center not-italic" aria-label="Social media and contact links">
            <div className="font-semibold text-blue-100 mb-3 text-sm">
              ارتباط با من
            </div>
            <div className="flex justify-center gap-3">
              {[
                {
                  name: 'GitHub',
                  icon: <Github className="w-4 h-4" />,
                  url: 'https://github.com/Dima-AH',
                  color: 'hover:bg-[#1E3A8A]/40 hover:border-[#1E3A8A]/60 hover:text-blue-100'
                },
                {
                  name: 'LinkedIn',
                  icon: <Linkedin className="w-4 h-4" />,
                  url: 'https://linkedin.com/in/mr-ahmadi7377',
                  color: 'hover:bg-[#2563EB]/15 hover:border-[#2563EB]/40 hover:text-[#2563EB]'
                },
                {
                  name: 'Telegram',
                  icon: <Send className="w-4 h-4" />,
                  url: 'https://t.me/Dima_devs',
                  color: 'hover:bg-[#0EA5E9]/15 hover:border-[#0EA5E9]/40 hover:text-[#0EA5E9]'
                },
                {
                  name: 'Email',
                  icon: <Mail className="w-4 h-4" />,
                  url: 'mailto:dima.devs.7377@gmail.com',
                  color: 'hover:bg-[#2563EB]/15 hover:border-[#2563EB]/40 hover:text-[#2563EB]'
                },
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full bg-[#0B1220] border border-[#1E3A8A]/50 flex items-center justify-center text-blue-200/60 transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </address>
        </div>

        {/* Technology stack used in the project */}
        <section className="mt-8 pt-6 border-t border-[#1E3A8A]/60" aria-labelledby="footer-tech">
          <div className="flex flex-col items-center gap-4">
            <div id="footer-tech" className="text-blue-200/50 text-xs flex items-center gap-1">
              <Sparkles className="w-3 h-3" aria-hidden="true" />
              تکنولوژی‌های اصلی
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { name: 'React.js', icon: <Code2 className="w-3 h-3" />, color: 'border-[#1E3A8A]/60 text-blue-100 bg-[#0B1220]' },
                { name: 'Next.js 16', icon: <Rocket className="w-3 h-3" />, color: 'border-[#1E3A8A]/60 text-blue-100 bg-[#0B1220]' },
                { name: 'TypeScript', icon: <FileText className="w-3 h-3" />, color: 'border-[#2563EB]/40 text-[#2563EB] bg-[#2563EB]/10' },
                { name: 'Tailwind CSS', icon: <Palette className="w-3 h-3" />, color: 'border-[#2563EB]/40 text-[#2563EB] bg-[#2563EB]/10' },
                { name: 'CSS Grid', icon: <Grid3x3 className="w-3 h-3" />, color: 'border-[#1E3A8A]/60 text-blue-100 bg-[#0B1220]' },
                { name: 'Figma', icon: <Figma className="w-3 h-3" />, color: 'border-[#0EA5E9]/40 text-[#0EA5E9] bg-[#0EA5E9]/10' },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${tech.color} text-xs transition-all duration-300 hover:scale-105`}
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal and meta information */}
        <section className="mt-6 text-center" aria-label="Footer meta information">
          <p className="text-blue-300/40 text-xs">
            ساخته شده با
            <span className="inline-flex items-center mx-1 text-[#0EA5E9]">
              <Heart className="w-3 h-3 mx-0.5" aria-hidden="true" />
            </span>
            و
            <span className="text-[#0EA5E9] mx-1 font-medium">Next.js 16</span>
            | طراحی و توسعه توسط میلاد احمدی
          </p>
          <p className="text-blue-200/30 text-xs mt-2">
            Performance-focused • SEO Optimized • Mobile Responsive
          </p>
        </section>
      </div>
    </footer>
  )
}
