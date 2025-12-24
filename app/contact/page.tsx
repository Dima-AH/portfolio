"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
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
  Send,
} from "lucide-react";

/*
  ContactPage
  SEO role: Main contact and lead generation page
  Contains contact channels, availability, FAQ and CTA
*/
export default function ContactPage() {
  const [submitStatus] = useState<"idle" | "success" | "error">("idle");

  /* Primary contact channels */
  const contactInfo = [
    {
      title: "ایمیل",
      value: "dima.devs.7377@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      link: "mailto:dima.devs.7377@gmail.com",
      description: "برای ارتباط رسمی و پروژه‌ها",
    },
    {
      title: "گیت‌هاب",
      value: "Dima-AH",
      icon: <Github className="w-5 h-5" />,
      link: "https://github.com/Dima-AH",
      description: "مشاهده پروژه‌های متن باز",
    },
    {
      title: "لینکدین",
      value: "mr-ahmadi7377",
      icon: <Linkedin className="w-5 h-5" />,
      link: "https://linkedin.com/in/mr-ahmadi7377",
      description: "ارتباط حرفه‌ای",
    },
    {
      title: "تلگرام",
      value: "Dima_devs@",
      icon: <Send className="w-5 h-5" />,
      link: "https://t.me/Dima_devs",
      description: "برای ارتباط سریع و مستقیم",
    },
  ];

  /* Frequently Asked Questions for SEO rich snippets */
  const faqs = [
    {
      question: "زمان تحویل پروژه معمولاً چقدر است؟",
      answer:
        "زمان تحویل بستگی به پیچیدگی و ابعاد پروژه دارد. پروژه‌های کوچک ۱-۳ هفته و پروژه‌های بزرگتر ۴-۸ هفته زمان نیاز دارند.",
    },
    {
      question: "نرخ پروژه‌ها چگونه محاسبه می‌شود؟",
      answer:
        "بر اساس پیچیدگی پروژه، زمان مورد نیاز و ویژگی‌های درخواستی محاسبه می‌شود. برای دریافت قیمت دقیق، لطفاً جزئیات پروژه را ارسال کنید.",
    },
    {
      question: "فرآیند همکاری چگونه است؟",
      answer:
        "۱. مکالمه اولیه و درک نیازها، ۲. ارائه پیشنهاد و زمان‌بندی، ۳. شروع توسعه با بروزرسانی منظم، ۴. تحویل و پشتیبانی",
    },
  ];

  /* Quick business related information */
  const quickInfo = [
    {
      title: "زمان کاری",
      value: "شنبه تا چهارشنبه",
      subValue: "۹:۰۰ - ۱۸:۰۰",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      title: "نوع پروژه‌ها",
      value: "Frontend Development",
      subValue: "UI/UX Implementation",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      title: "روش پرداخت",
      value: "توافقی",
      subValue: "",
      icon: <DollarSign className="w-5 h-5" />,
    },
  ];

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>

      <div className="relative z-10">
        <section className="pt-20 pb-16 px-2" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto">
            {/* Page header and main SEO H1 */}
            <header>
              <AnimatedSection>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-800/50 border border-gray-700/50 mb-6">
                    <MessageSquare className="w-10 h-10 text-cyan-400" />
                  </div>

                  <h1
                    id="contact-heading"
                    className="text-4xl md:text-5xl font-bold mb-4"
                  >
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      راه‌های ارتباطی
                    </span>
                  </h1>

                  <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    برای همکاری در پروژه‌های جدید یا دریافت مشاوره فنی، از طریق
                    کانال‌های زیر با من در ارتباط باشید
                  </p>
                </div>
              </AnimatedSection>
            </header>

            {/* Main two column content */}
            <section className="grid lg:grid-cols-2 gap-8">
              {/* Contact channels */}
              <article className="space-y-8">
                <AnimatedSection delay={0.1}>
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8">
                    <h2 className="text-xl font-semibold text-gray-100 mb-8">
                      کانال‌های ارتباطی
                    </h2>

                    <nav aria-label="Contact methods" className="space-y-4">
                      {contactInfo.map((info) => (
                        <a
                          key={info.title}
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl border border-gray-600/50"
                        >
                          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                            <div className="text-cyan-400">{info.icon}</div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-100 text-base mb-1">
                              {info.title}
                            </h3>
                            <p className="text-gray-300 text-sm truncate">
                              {info.value}
                            </p>
                            <p className="text-gray-500 text-xs mt-2">
                              {info.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </nav>
                  </div>
                </AnimatedSection>
              </article>

              {/* FAQ and business info */}
              <article className="space-y-8">
                <AnimatedSection delay={0.4}>
                  <section className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8">
                    <h2 className="text-xl font-semibold text-gray-100 mb-8">
                      سوالات متداول
                    </h2>

                    <div className="space-y-6">
                      {faqs.map((faq, index) => (
                        <div
                          key={index}
                          className="p-4 bg-gray-700/20 rounded-lg border border-gray-600/50"
                        >
                          <h3 className="text-base font-semibold text-gray-100 mb-2">
                            {faq.question}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </AnimatedSection>
              </article>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
