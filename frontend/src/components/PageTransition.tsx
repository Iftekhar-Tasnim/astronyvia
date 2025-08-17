import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Start exit animation
    setIsExiting(true)
    setIsVisible(false)

    // After exit animation, show new content
    const timer = setTimeout(() => {
      setIsExiting(false)
      setIsVisible(true)
    }, 600)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className="relative">
      {/* Exit Animation - Slide Out Effect */}
      {isExiting && (
        <div className="fixed inset-0 z-50 bg-gray-900 animate-slide-out">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <img 
                src="/icon/mainicon.png" 
                alt="ASTRONYVIA" 
                className="w-32 h-32 mx-auto mb-4 animate-pulse rounded-2xl"
              />
              <div className="text-white text-2xl font-bold animate-bounce">
                ASTRONYVIA
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page Content with Slide In Effect */}
      <div
        className={`transition-all duration-700 ease-out ${
          isVisible
            ? 'opacity-100 translate-x-0 scale-100'
            : 'opacity-0 translate-x-8 scale-95'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default PageTransition 