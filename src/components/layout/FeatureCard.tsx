"use client"
import type { FC } from "react"

interface FeatureCardProps {
    icon: string
    title: string
    description: string
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/60 backdrop-blur-sm border border-purple-100/50 hover:bg-white/80 hover:border-purple-200 transition-all duration-500 group cursor-pointer hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
      <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 lg:mb-8 group-hover:scale-125 transition-all duration-500 group-hover:rotate-12 filter drop-shadow-lg">
        {icon}
      </div>
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
        {title}
      </h3>
      <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-medium">{description}</p>
    </div>
    )
}

export default FeatureCard
