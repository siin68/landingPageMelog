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
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"

  const variantClasses = {
    primary: "bg-teal-500 hover:bg-teal-600 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 shadow-sm hover:shadow-md",
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
