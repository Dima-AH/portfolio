"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, Menu, X, FileText } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "خانه", path: "/" },
    { name: "درباره من", path: "/about" },
    { name: "مهارت‌ها", path: "/skills" },
    { name: "پروژه‌ها", path: "/projects" },
    { name: "تماس", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020617]/95 backdrop-blur-md border-b border-[#1E3A8A]/60 shadow-lg shadow-[#0EA5E9]/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-10 h-10 bg-linear-to-br from-[#2563EB] to-[#0EA5E9] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#2563EB]/30">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-blue-100 font-bold text-lg block">
                دیما
              </span>
              <span className="text-[#0EA5E9] text-xs block">
                توسعه‌دهنده فرانت‌اند
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                  pathname === item.path
                    ? "text-[#0EA5E9]"
                    : "text-blue-200/60 hover:text-blue-100"
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-linear-to-r from-[#2563EB] to-[#0EA5E9] rounded-full"></span>
                )}
              </Link>
            ))}
            <Link
              href="/dima-cv.pdf"
              download="dima-cv.pdf"
              className="px-4 py-2 bg-linear-to-r from-[#2563EB] to-[#0EA5E9] text-white text-sm font-medium rounded-lg hover:from-[#1E3A8A] hover:to-[#2563EB] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#2563EB]/30"
            >
              <FileText className="w-4 h-4" />
              <span>رزومه</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-blue-200/60 hover:text-blue-100 hover:bg-[#1E3A8A]/40 transition-colors"
            aria-label="منو"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="bg-[#020617]/95 backdrop-blur-md rounded-xl border border-[#1E3A8A]/60 p-4 mt-2 shadow-xl shadow-[#0EA5E9]/5">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      pathname === item.path
                        ? "bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/30"
                        : "text-blue-200/60 hover:text-blue-100 hover:bg-[#1E3A8A]/40"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/dima-cv.pdf"
                  download="dima-cv.pdf"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex px-4 py-3 text-center bg-linear-to-r from-[#2563EB] to-[#0EA5E9] text-white text-sm font-medium rounded-lg hover:from-[#1E3A8A] hover:to-[#2563EB] transition-all duration-300 items-center justify-center gap-2 shadow-lg shadow-[#2563EB]/30"
                >
                  <FileText className="w-4 h-4" />
                  <span>دانلود رزومه</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
