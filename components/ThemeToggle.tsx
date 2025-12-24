'use client'

import { useTheme } from './ThemeProvider'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-green-500/30 hover:bg-green-500/5 transition-all duration-300 group"
      aria-label="تغییر تم"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-300 group-hover:rotate-45 transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
      )}
    </button>
  )
}