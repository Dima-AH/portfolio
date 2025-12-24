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
          ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 shadow-lg"
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
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/20">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-gray-100 font-bold text-lg block">
                دیما
              </span>
              <span className="text-cyan-300 text-xs block">
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
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-gray-100"
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></span>
                )}
              </Link>
            ))}
            <a
              href="/dima-cv.pdf" // مسیر از public
              download="dima-cv.pdf" // اجبار دانلود
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
            >
              <FileText className="w-4 h-4" />
              <span>رزومه</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-gray-100 hover:bg-gray-800 transition-colors"
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
            <div className="bg-gray-800/95 backdrop-blur-md rounded-xl border border-gray-700/50 p-4 mt-2 shadow-xl">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      pathname === item.path
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                        : "text-gray-400 hover:text-gray-100 hover:bg-gray-700/50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="/dima-cv.pdf"
                  download="dima-cv.pdf"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex px-4 py-3 text-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
                >
                  <FileText className="w-4 h-4" />
                  <span>دانلود رزومه</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
