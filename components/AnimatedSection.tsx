'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  className?: string
  threshold?: number
  rootMargin?: string
  once?: boolean
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
}

export default function AnimatedSection({
  children,
  delay = 0,
  className = '',
  threshold = 0.1,
  rootMargin = '-50px',
  once = true,
  direction = 'up',
  duration = 600
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            hasAnimated.current = true
          }
        } else if (!once && hasAnimated.current) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, once])

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(20px)'
      case 'down':
        return 'translateY(-20px)'
      case 'left':
        return 'translateX(20px)'
      case 'right':
        return 'translateX(-20px)'
      default:
        return 'translateY(20px)'
    }
  }

  return (
    <div
      ref={sectionRef}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : getTransform(),
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}

// Variant component for staggered animations
export function AnimatedGrid({
  children,
  className = '',
  staggerDelay = 100,
  threshold = 0.1
}: {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
  threshold?: number
}) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <AnimatedSection
          key={index}
          delay={index * staggerDelay}
          threshold={threshold}
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  )
}

// Variant for list items
export function AnimatedList({
  items,
  renderItem,
  className = '',
  itemClassName = '',
  staggerDelay = 50,
  threshold = 0.1
}: {
  items: any[]
  renderItem: (item: any, index: number) => ReactNode
  className?: string
  itemClassName?: string
  staggerDelay?: number
  threshold?: number
}) {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <div key={index} className={itemClassName}>
          <AnimatedSection
            delay={index * staggerDelay}
            threshold={threshold}
          >
            {renderItem(item, index)}
          </AnimatedSection>
        </div>
      ))}
    </div>
  )
}

// Higher order component for fade-in only
export function FadeIn({
  children,
  delay = 0,
  duration = 400
}: {
  children: ReactNode
  delay?: number
  duration?: number
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// Component for text reveal animations
export function RevealText({
  text,
  className = '',
  delay = 0,
  duration = 800,
  charDelay = 30,
  threshold = 0.1
}: {
  text: string
  className?: string
  delay?: number
  duration?: number
  charDelay?: number
  threshold?: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [displayedChars, setDisplayedChars] = useState(0)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold }
    )

    const currentRef = textRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  useEffect(() => {
    if (isVisible && displayedChars < text.length) {
      const timer = setTimeout(() => {
        setDisplayedChars(prev => prev + 1)
      }, charDelay)

      return () => clearTimeout(timer)
    }
  }, [isVisible, displayedChars, text.length, charDelay])

  return (
    <div ref={textRef} className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{
            opacity: index < displayedChars ? 1 : 0,
            transition: `opacity ${duration}ms ease-out`,
            transitionDelay: `${delay + index * charDelay}ms`,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  )
}

// Component for counter animation
export function AnimatedCounter({
  end,
  duration = 2000,
  delay = 0,
  prefix = '',
  suffix = ''
}: {
  end: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = counterRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const startTime = Date.now()
      const startValue = 0

      const updateCounter = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = Math.round(startValue + (end - startValue) * easeOutQuart)

        setCount(currentValue)

        if (progress < 1) {
          requestAnimationFrame(updateCounter)
        }
      }

      const timer = setTimeout(() => {
        requestAnimationFrame(updateCounter)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isVisible, end, duration, delay])

  return (
    <span ref={counterRef}>
      {prefix}{count}{suffix}
    </span>
  )
}

// Component for hover animations
export function HoverAnimation({
  children,
  scale = 1.05,
  rotate = 0,
  duration = 300
}: {
  children: ReactNode
  scale?: number
  rotate?: number
  duration?: number
}) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        transform: isHovering ? `scale(${scale}) rotate(${rotate}deg)` : 'scale(1) rotate(0deg)',
        transition: `transform ${duration}ms ease-out`,
        display: 'inline-block',
      }}
    >
      {children}
    </div>
  )
}

// Component for parallax effect
export function ParallaxSection({
  children,
  speed = 0.5,
  className = ''
}: {
  children: ReactNode
  speed?: number
  className?: string
}) {
  const [offset, setOffset] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollPercentage = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
        setOffset(scrollPercentage * 100 * speed)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  )
}

// Component for typing animation
export function Typewriter({
  text,
  speed = 50,
  delay = 0,
  className = '',
  cursor = true,
  cursorBlinkSpeed = 500
}: {
  text: string
  speed?: number
  delay?: number
  className?: string
  cursor?: boolean
  cursorBlinkSpeed?: number
}) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  // Cursor blink effect
  useEffect(() => {
    if (cursor) {
      const interval = setInterval(() => {
        setShowCursor(prev => !prev)
      }, cursorBlinkSpeed)

      return () => clearInterval(interval)
    }
  }, [cursor, cursorBlinkSpeed])

  // Typing effect
  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, speed])

  // Initial delay
  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setCurrentIndex(0)
      }, delay)

      return () => clearTimeout(timer)
    } else {
      setCurrentIndex(0)
    }
  }, [delay])

  return (
    <div className={`inline ${className}`}>
      {displayedText}
      {cursor && (
        <span
          className="ml-1 inline-block w-0.5 bg-current align-text-bottom"
          style={{
            height: '1em',
            opacity: showCursor ? 1 : 0,
            transition: 'opacity 0.1s ease-out',
          }}
        />
      )}
    </div>
  )
}