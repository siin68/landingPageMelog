"use client"
import type { FC, ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary"
  className?: string
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ children, variant = "primary", className = "", onClick }) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-300/50"

  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-white hover:bg-purple-50 text-purple-700 border-2 border-purple-200 hover:border-purple-300 shadow-md hover:shadow-lg",
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
