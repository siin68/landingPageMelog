"use client"
import type { FC } from "react"

interface FeatureCardProps {
    icon: string
    title: string
    description: string
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl lg:rounded-2xl hover:bg-purple-50 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:-translate-y-1">
          <div className="text-3xl sm:text-4xl lg:text-6xl mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 group-hover:text-purple-700 transition-colors duration-300">
        {title}
      </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
    </div>
    )
}

export default FeatureCard
