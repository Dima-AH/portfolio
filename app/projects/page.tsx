import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";
import {
  ShoppingBag,
  BarChart3,
  CheckSquare,
  GraduationCap,
  Calendar,
  Cloud,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      title: "وبسایت لندینگ",
      description: "وبسایت لندینگ مدرن و واکنشگرا ",
      technologies: [
        "Next.js 15",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "PostHug",
      ],
      category: "static",
      github: "https://github.com/Dima-AH/sociehub-web",
      live: "https://dima-landing-8u7f.onrender.com/",
      featured: true,
    },
    // {
    //   title: 'اپلیکیشن مدیریت فرم',
    //   description: 'اپلیکیشن مدیریت فرم که بخاطر مسائل امنیتی',
    //   technologies: ['Next.js', 'TypeScript', 'DnD Kit', 'Redis', 'Clerk Auth'],
    //   category: 'Productivity',
    //   github: '#',
    //   live: '#'
    // },
  ];

  const getProjectIcon = (title: string) => {
    if (title.includes("داشبورد") || title.includes("مدیریت"))
      return <BarChart3 className="w-6 h-6" />;
    if (title.includes("وظایف") || title.includes("تسک"))
      return <CheckSquare className="w-6 h-6" />;
    if (title.includes("آموزش") || title.includes("آکادمی"))
      return <GraduationCap className="w-6 h-6" />;
    if (title.includes("رزرو") || title.includes("نوبت"))
      return <Calendar className="w-6 h-6" />;
    if (title.includes("هواشناسی") || title.includes("آب‌وهوا"))
      return <Cloud className="w-6 h-6" />;
    return <Sparkles className="w-6 h-6" />;
  };

  const featuredProject = projects.find((p) => p.featured);

  return (
    <div className="relative overflow-hidden">
  <div className="absolute inset-0 bg-linear-to-b from-[#020617] to-[#020617]"></div>

  <div className="relative z-10">
    <section className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#020617]/60 border border-[#1E3A8A]/50 mb-6">
              <Sparkles className="w-8 h-8 text-[#0EA5E9]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-linear-to-r from-[#2563EB] to-[#0EA5E9] bg-clip-text text-transparent">
                پروژه‌های منتخب
              </span>
            </h1>
            <p className="text-lg text-blue-200/70 max-w-2xl mx-auto">
              مجموعه‌ای از پروژه‌های اجرا شده که تجربه و تخصص فنی من را
              نمایش می‌دهند
            </p>
          </div>
        </AnimatedSection>

        {/* Featured Project */}
        {featuredProject && (
          <AnimatedSection delay={0.1}>
            <div className="mb-16">
              <div className="relative">
                <div className="absolute -inset-1 bg-linear-to-r from-[#1E3A8A]/30 to-[#0EA5E9]/20 rounded-2xl blur-xl opacity-50"></div>
                <div className="relative bg-[#020617]/70 backdrop-blur-sm rounded-xl border border-[#1E3A8A]/60 overflow-hidden hover:border-[#2563EB]/60 transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-2/3 p-6 md:p-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#2563EB]/10 text-[#0EA5E9] rounded-full text-xs font-medium mb-4 border border-[#2563EB]/30">
                        <Sparkles className="w-3 h-3" />
                        پروژه ویژه
                      </div>
                      <h2 className="text-2xl font-bold text-blue-100 mb-3">
                        {featuredProject.title}
                      </h2>
                      <p className="text-blue-200/70 mb-6 text-sm leading-relaxed">
                        {featuredProject.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-[#1E3A8A]/30 text-blue-200 rounded-lg text-xs border border-[#1E3A8A]/60 hover:border-[#0EA5E9]/50 hover:text-[#0EA5E9] transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href={featuredProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-[#2563EB] to-[#0EA5E9] text-white text-sm font-medium rounded-lg hover:from-[#1E3A8A] hover:to-[#2563EB] transition-all duration-300 shadow-lg shadow-[#0EA5E9]/20"
                        >
                          <span>مشاهده نسخه زنده</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                          href={featuredProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#1E3A8A]/60 text-blue-200 text-sm font-medium rounded-lg hover:border-[#0EA5E9]/50 hover:text-[#0EA5E9] hover:bg-[#2563EB]/10 transition-all duration-300"
                        >
                          <span>مشاهده کد منبع</span>
                        </Link>
                      </div>
                    </div>
                    <div className="md:w-1/3 relative">
                      <div className="h-48 md:h-full bg-linear-to-br from-[#1E3A8A]/30 to-[#0EA5E9]/10 flex items-center justify-center border-t md:border-t-0 md:border-r border-[#1E3A8A]/40">
                        <div className="text-[#0EA5E9]/50">
                          <Image
                            src={"/images/sociehub.png"}
                            alt="sociehub-image"
                            width={600}
                            height={600}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Technologies Summary */}
        <AnimatedSection delay={0.3}>
          <div className="mb-16">
            <div className="bg-[#020617]/70 backdrop-blur-sm rounded-xl border border-[#1E3A8A]/60 p-6 hover:border-[#2563EB]/60 transition-all duration-300">
              <h3 className="font-semibold text-blue-100 mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#0EA5E9]" />
                تکنولوژی‌های اصلی استفاده شده
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "PostHug",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 px-3 py-2 bg-[#1E3A8A]/30 rounded-lg border border-[#1E3A8A]/60 hover:border-[#0EA5E9]/50 transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#0EA5E9]"></div>
                    <span className="text-sm text-blue-200">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <div className="relative rounded-xl bg-linear-to-br from-[#1E3A8A]/40 to-[#0EA5E9]/20 border border-[#2563EB]/40 p-8">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0EA5E9]/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-blue-100 mb-3">
                  پروژه‌ای در ذهن دارید؟
                </h3>
                <p className="text-blue-200/70 mb-6 text-sm max-w-xl mx-auto">
                  برای تبدیل ایده‌هایتان به محصول دیجیتالی با کیفیت، آماده
                  همکاری هستم. بیایید در مورد جزئیات پروژه صحبت کنیم.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#2563EB] to-[#0EA5E9] text-white font-medium rounded-lg hover:from-[#1E3A8A] hover:to-[#2563EB] transition-all duration-300 shadow-lg shadow-[#0EA5E9]/30"
                >
                  <span>درخواست همکاری</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
</div>

  );
}
