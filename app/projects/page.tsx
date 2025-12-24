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
      <div className="absolute inset-0 bg-linear-to-b from-gray-900 to-gray-950"></div>

      <div className="relative z-10">
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <AnimatedSection>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 border border-gray-700/50 mb-6">
                  <Sparkles className="w-8 h-8 text-cyan-400" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    پروژه‌های منتخب
                  </span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
                    <div className="absolute -inset-1 bg-linear-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-40"></div>
                    <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/30 transition-all duration-300">
                      <div className="md:flex">
                        <div className="md:w-2/3 p-6 md:p-8">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 text-cyan-300 rounded-full text-xs font-medium mb-4 border border-cyan-500/20">
                            <Sparkles className="w-3 h-3" />
                            پروژه ویژه
                          </div>
                          <h2 className="text-2xl font-bold text-gray-100 mb-3">
                            {featuredProject.title}
                          </h2>
                          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                            {featuredProject.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {featuredProject.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 bg-gray-700/30 text-gray-300 rounded-lg text-xs border border-gray-600/50 hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-300"
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
                              className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-purple-500/20"
                            >
                              <span>مشاهده نسخه زنده</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                              href={featuredProject.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-600 text-gray-300 text-sm font-medium rounded-lg hover:border-cyan-500/30 hover:text-cyan-300 hover:bg-cyan-500/5 transition-all duration-300"
                            >
                              <span>مشاهده کد منبع</span>
                            </Link>
                          </div>
                        </div>
                        <div className="md:w-1/3 relative">
                          <div className="h-48 md:h-full bg-linear-to-br from-cyan-500/5 to-purple-500/5 flex items-center justify-center border-t md:border-t-0 md:border-r border-gray-600/30">
                            <div className="text-cyan-400/50">
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

            {/* Projects Grid */}
            {/* <AnimatedSection delay={0.2}>
              <div className="mb-16">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold text-gray-100 mb-2">
                    پروژه‌های دیگر
                  </h2>
                  <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                    نمونه‌کارهای متنوع در حوزه‌های مختلف توسعه وب
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects
                    .filter(p => !p.featured)
                    .map((project, index) => (
                      <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
              </div>
            </AnimatedSection> */}

            {/* Technologies Summary */}
            <AnimatedSection delay={0.3}>
              <div className="mb-16">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-cyan-500/30 transition-all duration-300">
                  <h3 className="font-semibold text-gray-100 mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-cyan-400" />
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
                        className="flex items-center gap-2 px-3 py-2 bg-gray-700/30 rounded-lg border border-gray-600/50 hover:border-cyan-500/30 transition-all duration-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                        <span className="text-sm text-gray-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <div className="relative rounded-xl bg-linear-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 p-8">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-gray-100 mb-3">
                      پروژه‌ای در ذهن دارید؟
                    </h3>
                    <p className="text-gray-400 mb-6 text-sm max-w-xl mx-auto">
                      برای تبدیل ایده‌هایتان به محصول دیجیتالی با کیفیت، آماده
                      همکاری هستم. بیایید در مورد جزئیات پروژه صحبت کنیم.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
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
