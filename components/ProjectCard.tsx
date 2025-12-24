'use client'

import { useState } from 'react'
import { HoverAnimation } from './AnimatedSection'
import {
  ShoppingBag,
  BarChart3,
  CheckSquare,
  GraduationCap,
  Calendar,
  Cloud,
  Globe,
  Smartphone,
  Rocket,
  Code2,
  ExternalLink,
  GitBranch,
  Star,
  Eye,
  Clock,
  Zap,
  Sparkles
} from 'lucide-react'

interface ProjectCardProps {
  project: {
    title: string
    description: string
    technologies: string[]
    category?: string
    github: string
    live: string
    featured?: boolean
  }
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Get project icon based on title
  const getProjectIcon = () => {
    const title = project.title.toLowerCase()
    
    if (title.includes('تجارت') || title.includes('فروشگاه')) return <ShoppingBag className="w-5 h-5" />
    if (title.includes('داشبورد') || title.includes('مدیریت')) return <BarChart3 className="w-5 h-5" />
    if (title.includes('وظایف') || title.includes('تسک')) return <CheckSquare className="w-5 h-5" />
    if (title.includes('آموزش') || title.includes('آکادمی')) return <GraduationCap className="w-5 h-5" />
    if (title.includes('رزرو') || title.includes('نوبت')) return <Calendar className="w-5 h-5" />
    if (title.includes('هواشناسی') || title.includes('آب‌وهوا')) return <Cloud className="w-5 h-5" />
    if (title.includes('وب‌سایت') || title.includes('سایت')) return <Globe className="w-5 h-5" />
    if (title.includes('اپلیکیشن') || title.includes('برنامه')) return <Smartphone className="w-5 h-5" />
    if (title.includes('پلتفرم') || title.includes('سیستم')) return <Rocket className="w-5 h-5" />
    
    return <Code2 className="w-5 h-5" />
  }

  // Gradient colors based on index
  const getGradient = () => {
    const gradients = [
      'from-gray-500/10 to-gray-400/10',
      'from-cyan-500/10 to-cyan-400/10',
      'from-purple-500/10 to-gray-600/10',
      'from-gray-600/10 to-gray-500/10',
      'from-cyan-400/10 to-cyan-300/10',
      'from-purple-400/10 to-purple-300/10',
    ]
    return gradients[index % gradients.length]
  }

  // Border color based on index
  const getBorderColor = () => {
    const colors = [
      'border-gray-600/50 hover:border-cyan-500/30',
      'border-gray-600/50 hover:border-purple-500/30',
      'border-gray-600/50 hover:border-cyan-500/30',
      'border-gray-600/50 hover:border-purple-500/30',
      'border-gray-600/50 hover:border-cyan-500/30',
      'border-gray-600/50 hover:border-purple-500/30',
    ]
    return colors[index % colors.length]
  }

  // Technology badge color
  const getTechColor = (techIndex: number) => {
    const colors = [
      'bg-gray-700/50 text-gray-300 border-gray-600/50',
      'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
      'bg-gray-700/50 text-gray-300 border-gray-600/50',
      'bg-purple-500/10 text-purple-300 border-purple-500/20',
    ]
    return colors[techIndex % colors.length]
  }

  // Fixed stats - not random anymore
  const stats = {
    stars: 25,
    views: 120,
    updated: 2 // weeks ago
  }

  return (
    <HoverAnimation scale={1.02} duration={300}>
      <div
        className={`relative h-full bg-gray-800/30 backdrop-blur-sm rounded-xl border ${getBorderColor()} transition-all duration-300 overflow-hidden group`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getGradient()} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        
        {/* Top accent */}
        <div className={`h-1 w-full bg-gradient-to-r from-gray-600/30 to-gray-500/30`} />
        
        <div className="p-5">
          {/* Project header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center`}>
                <div className="text-cyan-400">
                  {getProjectIcon()}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-green-500 animate-pulse' : 'bg-green-500/50'}`} />
                  <span className="text-xs text-gray-500">پروژه فعال</span>
                </div>
              </div>
            </div>
            
            {/* Featured badge */}
            {project.featured && (
              <span className="px-2.5 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
                <Zap className="w-3 h-3" />
                ویژه
              </span>
            )}
          </div>

          {/* Project description */}
          <p className="text-gray-400 mb-5 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-5">
            <div className="text-xs text-gray-500 mb-2">تکنولوژی‌ها</div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech, techIndex) => (
                <span
                  key={tech}
                  className={`px-2.5 py-1 text-xs rounded-lg border ${getTechColor(techIndex)} transition-all duration-300`}
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2.5 py-1 text-xs text-gray-500 bg-gray-700/30 rounded-lg border border-gray-600/50">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Project preview */}
          <div className="relative h-40 mb-5 rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600/30">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-cyan-400/20">
                {getProjectIcon()}
              </div>
            </div>
            
            {/* Code preview - Always visible, not just on hover */}
            <div className="absolute bottom-0 right-0 left-0 bg-gray-800/90 backdrop-blur-sm p-3">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 rounded-full bg-gray-500" />
                <div className="w-2 h-2 rounded-full bg-gray-400" />
                <div className="w-2 h-2 rounded-full bg-gray-300" />
                <div className="text-gray-500 text-xs mr-auto">index.tsx</div>
              </div>
              <div className="mt-2 font-mono text-xs text-gray-400">
                <div className="flex">
                  <span className="text-gray-600 w-5 text-left">1</span>
                  <span className="text-gray-400">const</span>
                  <span className="text-gray-300"> Project</span>
                  <span className="text-gray-200"> = () =&gt; {`{...}`}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 mb-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 group/live shadow-lg shadow-purple-500/20"
            >
              <span>مشاهده</span>
              <ExternalLink className="w-3 h-3 group-hover/live:translate-x-0.5 transition-transform" />
            </a>
            
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2.5 bg-gray-700/30 border border-gray-600/50 text-gray-300 text-sm font-medium rounded-lg hover:border-cyan-500/30 hover:text-cyan-300 hover:bg-cyan-500/5 transition-all duration-300 flex items-center justify-center gap-2 group/github"
            >
              <span>کد منبع</span>
              <GitBranch className="w-3 h-3 opacity-0 group-hover/github:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Stats - Fixed values */}
          <div className="pt-4 border-t border-gray-700/50 flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-gray-400" />
                <span>{stats.stars}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3 text-gray-400" />
                <span>{stats.views}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-gray-400" />
              <span>{stats.updated} هفته پیش</span>
            </div>
          </div>

          {/* Hover info - فقط افکت بصری بدون تغییر محتوا */}
          {isHovered && (
            <div className="absolute top-3 left-3 bg-gray-900/90 backdrop-blur-sm px-2.5 py-1.5 rounded border border-gray-600/50 text-xs text-gray-300">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span>پروژه آنلاین</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </HoverAnimation>
  )
}

// Compact Project Card
export function CompactProjectCard({ project, index }: ProjectCardProps) {
  const getProjectIcon = () => {
    const title = project.title.toLowerCase()
    if (title.includes('تجارت') || title.includes('فروشگاه')) return <ShoppingBag className="w-4 h-4" />
    if (title.includes('داشبورد') || title.includes('مدیریت')) return <BarChart3 className="w-4 h-4" />
    if (title.includes('وظایف') || title.includes('تسک')) return <CheckSquare className="w-4 h-4" />
    return <Code2 className="w-4 h-4" />
  }

  return (
    <div className="group bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-600/50 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
            <div className="text-cyan-400">
              {getProjectIcon()}
            </div>
          </div>
          
          <div className="flex-grow min-w-0">
            <h3 className="font-medium text-gray-100 text-sm mb-1 group-hover:text-cyan-400 transition-colors truncate">
              {project.title}
            </h3>
            <p className="text-gray-500 text-xs mb-3 line-clamp-2">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 2).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-gray-700/30 text-gray-400 rounded border border-gray-600/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex gap-2">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-3 py-1.5 bg-cyan-500/10 text-cyan-300 text-xs font-medium rounded-lg hover:bg-cyan-500/20 transition-colors text-center"
          >
            مشاهده
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-3 py-1.5 bg-gray-700/30 text-gray-400 text-xs font-medium rounded-lg hover:bg-gray-700/50 hover:text-gray-300 transition-colors text-center"
          >
            کد منبع
          </a>
        </div>
      </div>
    </div>
  )
}

// Project Card Grid Wrapper
export function ProjectCardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  )
}

// Project Filter Component
export function ProjectFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
          activeCategory === 'all'
            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/20'
            : 'bg-gray-800/30 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 border border-gray-600/50'
        }`}
      >
        همه پروژه‌ها
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/20'
              : 'bg-gray-800/30 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 border border-gray-600/50'
        }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}