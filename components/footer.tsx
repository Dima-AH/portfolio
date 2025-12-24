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
      className="border-t border-gray-700/50 bg-gray-900/30 backdrop-blur-sm"
      role="contentinfo"
      aria-label="Website footer for Milad Ahmadi"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand identity and copyright information */}
          <section className="text-center md:text-right" aria-labelledby="footer-brand">
            <div id="footer-brand" className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <div className="w-8 h-8 hidden md:flex rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Code2 className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <div>
                <div className="text-gray-100 font-bold text-lg">دیما</div>
                <div className="text-cyan-300 text-xs">توسعه‌دهنده فرانت‌اند</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm max-w-xs">
              ساخت وب‌اپلیکیشن‌های مدرن با تمرکز بر عملکرد و تجربه کاربری
            </p>

            <p className="text-gray-500 text-xs mt-3">
              © {currentYear} | کلیه حقوق محفوظ است
            </p>
          </section>

          {/* Internal site navigation */}
          <nav className="text-center" aria-label="Footer navigation">
            <div className="font-semibold text-gray-100 mb-3 text-sm">
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
                  className="text-gray-400 hover:text-cyan-400 text-xs transition-colors duration-300 hover:underline hover:underline-offset-4"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Social and contact links */}
          <address className="text-center not-italic" aria-label="Social media and contact links">
            <div className="font-semibold text-gray-100 mb-3 text-sm">
              ارتباط با من
            </div>
            <div className="flex justify-center gap-3">
              {[
                {
                  name: 'GitHub',
                  icon: <Github className="w-4 h-4" />,
                  url: 'https://github.com/Dima-AH',
                  color: 'hover:bg-gray-700/50 hover:border-gray-500/30 hover:text-gray-100'
                },
                {
                  name: 'LinkedIn',
                  icon: <Linkedin className="w-4 h-4" />,
                  url: 'https://linkedin.com/in/mr-ahmadi7377',
                  color: 'hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400'
                },
                {
                  name: 'Telegram',
                  icon: <Send className="w-4 h-4" />,
                  url: 'https://t.me/Dima_devs',
                  color: 'hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400'
                },
                {
                  name: 'Email',
                  icon: <Mail className="w-4 h-4" />,
                  url: 'mailto:dima.devs.7377@gmail.com',
                  color: 'hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-400'
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full bg-gray-700/30 border border-gray-600/50 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </address>
        </div>

        {/* Technology stack used in the project */}
        <section className="mt-8 pt-6 border-t border-gray-700/50" aria-labelledby="footer-tech">
          <div className="flex flex-col items-center gap-4">
            <div id="footer-tech" className="text-gray-400 text-xs flex items-center gap-1">
              <Sparkles className="w-3 h-3" aria-hidden="true" />
              تکنولوژی‌های اصلی
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { name: 'React.js', icon: <Code2 className="w-3 h-3" />, color: 'border-gray-600/50 text-gray-300 bg-gray-700/30' },
                { name: 'Next.js 16', icon: <Rocket className="w-3 h-3" />, color: 'border-gray-600/50 text-gray-300 bg-gray-700/30' },
                { name: 'TypeScript', icon: <FileText className="w-3 h-3" />, color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10' },
                { name: 'Tailwind CSS', icon: <Palette className="w-3 h-3" />, color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10' },
                { name: 'CSS Grid', icon: <Grid3x3 className="w-3 h-3" />, color: 'border-gray-600/50 text-gray-300 bg-gray-700/30' },
                { name: 'Figma', icon: <Figma className="w-3 h-3" />, color: 'border-purple-500/30 text-purple-400 bg-purple-500/10' },
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
          <p className="text-gray-500 text-xs">
            ساخته شده با
            <span className="inline-flex items-center mx-1 text-cyan-400">
              <Heart className="w-3 h-3 mx-0.5" aria-hidden="true" />
            </span>
            و
            <span className="text-cyan-400 mx-1 font-medium">Next.js 16</span>
            | طراحی و توسعه توسط Milad Ahmadi
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Performance-focused • SEO Optimized • Mobile Responsive
          </p>
        </section>
      </div>
    </footer>
  )
}
