"use client"
import { useState } from "react"
import Button from "@/components/ui/Button"
import Link from "next/link"
import Image from "next/image"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/" className="flex items-center space-x-1 sm:space-x-2 group">
              <Image
                src="/icons/melog.png"
                alt="Logo"
                width={140}
                height={40}
                className="max-w-35 object-contain transition-transform duration-200 group-hover:scale-110"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm lg:text-base text-gray-600 hover:text-purple-700 transition-colors duration-200 relative group cursor-pointer"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm lg:text-base text-gray-600 hover:text-purple-700 transition-colors duration-200 relative group cursor-pointer"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('integrations')}
              className="text-sm lg:text-base text-gray-600 hover:text-purple-700 transition-colors duration-200 relative group cursor-pointer"
            >
              Integrations
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-sm lg:text-base text-gray-600 hover:text-purple-700 transition-colors duration-200 relative group cursor-pointer"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm lg:text-base text-gray-600 hover:text-purple-700 transition-colors duration-200 relative group cursor-pointer"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Link
              href="/login"
              className="text-sm lg:text-base text-gray-600 hover:text-purple-700 transition-colors duration-200"
            >
              Log in
            </Link>
            <Button variant="primary" className="cursor-pointer text-sm lg:text-base px-3 lg:px-4 py-2">
              Try it free
            </Button>
          </div>

          <button
            className="md:hidden p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg md:hidden z-50 animate-in slide-in-from-top-2 duration-200">
            <div className="container mx-auto px-3 sm:px-6 lg:px-8">
              <div className="flex flex-col space-y-3 sm:space-y-4 py-4 sm:py-6">
                <button
                  onClick={() => {
                    scrollToSection('features')
                    setIsMenuOpen(false)
                  }}
                  className="text-sm sm:text-base text-gray-600 hover:text-purple-700 transition-colors duration-200 py-1 cursor-pointer text-left"
                >
                  Features
                </button>
                <button
                  onClick={() => {
                    scrollToSection('pricing')
                    setIsMenuOpen(false)
                  }}
                  className="text-sm sm:text-base text-gray-600 hover:text-purple-700 transition-colors duration-200 py-1 cursor-pointer text-left"
                >
                Pricing
              </button>
                <button
                  onClick={() => {
                    scrollToSection('integrations')
                    setIsMenuOpen(false)
                  }}
                  className="text-sm sm:text-base text-gray-600 hover:text-purple-700 transition-colors duration-200 py-1 cursor-pointer text-left"
                >
                Integrations
              </button>
                <button
                  onClick={() => {
                    scrollToSection('testimonials')
                    setIsMenuOpen(false)
                  }}
                  className="text-sm sm:text-base text-gray-600 hover:text-purple-700 transition-colors duration-200 py-1 cursor-pointer text-left"
                >
                Testimonials
              </button>
                <button
                  onClick={() => {
                    scrollToSection('faq')
                    setIsMenuOpen(false)
                  }}
                  className="text-sm sm:text-base text-gray-600 hover:text-purple-700 transition-colors duration-200 py-1 cursor-pointer text-left"
                >
                FAQ
              </button>
              <div className="pt-3 sm:pt-4 flex flex-col space-y-2">
                  <Link
                    href="/login"
                    className="text-sm sm:text-base text-gray-600 hover:text-purple-700 transition-colors duration-200 py-2"
                  >
                  Log in
                </Link>
                <Button variant="primary" className="text-sm sm:text-base w-full py-2.5">
                  Try it free
                </Button>
              </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
