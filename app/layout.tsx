import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/footer'
import ThemeProvider from '@/components/ThemeProvider'

const vazir = Vazirmatn({ 
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-vazir'
})

export const metadata: Metadata = {
  title: 'دیما - توسعه‌دهنده فرانت‌اند حرفه‌ای',
  description: 'پورتفولیوی حرفه‌ای دیما، توسعه‌دهنده فرانت‌اند با تخصص در React.js، Next.js و طراحی واکنش‌گرا',
  keywords: ['توسعه‌دهنده فرانت‌اند', 'React.js', 'Next.js', 'طراحی وب', 'پورتفولیو'],
  authors: [{ name: 'Dima' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <body className="min-h-screen flex flex-col bg-linear-to-br from-background to-surface">
        <ThemeProvider>
          <Header />
          <main className="grow pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}