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
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="border-b border-slate-200/60 sticky top-0 z-50 backdrop-blur-md bg-slate-50/95 shadow-sm">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/" className="flex items-center space-x-1 sm:space-x-2 group">
              <Image
                src="/icons/melog.png"
                alt="Logo"
                width={140}
                height={40}
                className="max-w-35 object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-md"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm lg:text-base font-medium text-slate-700 hover:text-slate-900 transition-all duration-300 relative group cursor-pointer py-2"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-800 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm lg:text-base font-medium text-slate-700 hover:text-slate-900 transition-all duration-300 relative group cursor-pointer py-2"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-800 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("integrations")}
              className="text-sm lg:text-base font-medium text-slate-700 hover:text-slate-900 transition-all duration-300 relative group cursor-pointer py-2"
            >
              Integrations
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-800 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm lg:text-base font-medium text-slate-700 hover:text-slate-900 transition-all duration-300 relative group cursor-pointer py-2"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-800 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm lg:text-base font-medium text-slate-700 hover:text-slate-900 transition-all duration-300 relative group cursor-pointer py-2"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-800 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link
              href="/login"
              className="text-sm lg:text-base font-medium text-slate-700 hover:text-slate-900 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-slate-100/80"
            >
              Log in
            </Link>
            <Button
              variant="primary"
              className="cursor-pointer text-sm lg:text-base px-5 lg:px-6 py-2.5 font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Try it free
            </Button>
          </div>

          <button
            className="md:hidden p-2 hover:bg-slate-100/80 rounded-xl transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-5 sm:w-6 h-5 sm:h-6 text-slate-700 group-hover:text-slate-900 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-slate-50/98 backdrop-blur-md border-t border-slate-200/60 shadow-xl md:hidden z-50 animate-in slide-in-from-top-2 duration-300">
            <div className="container mx-auto px-3 sm:px-6 lg:px-8">
              <div className="flex flex-col space-y-1 py-6">
                <button
                  onClick={() => {
                    scrollToSection("features")
                    setIsMenuOpen(false)
                  }}
                  className="text-sm sm:text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-all duration-300 py-3 px-4 cursor-pointer text-left rounded-lg"
                >
                  Features
                </button>
                <button
                  onClick={() => {
                    scrollToSection("pricing")
                    setIsMenuOpen(false)
                  }}
                  className="text-sm sm:text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-all duration-300 py-3 px-4 cursor-pointer text-left rounded-lg"
                >
                  Pricing
                </button>
                <button
                  onClick={() => {
                    scrollToSection("integrations")
                    setIsMenuOpen(false)
                  }}
                  className="text-sm sm:text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-all duration-300 py-3 px-4 cursor-pointer text-left rounded-lg"
                >
                  Integrations
                </button>
                <button
                  onClick={() => {
                    scrollToSection("testimonials")
                    setIsMenuOpen(false)
                  }}
                  className="text-sm sm:text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-all duration-300 py-3 px-4 cursor-pointer text-left rounded-lg"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => {
                    scrollToSection("faq")
                    setIsMenuOpen(false)
                  }}
                  className="text-sm sm:text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-all duration-300 py-3 px-4 cursor-pointer text-left rounded-lg"
                >
                  FAQ
                </button>
                <div className="pt-4 mt-4 border-t border-slate-200/60 flex flex-col space-y-3">
                  <Link
                    href="/login"
                    className="text-sm sm:text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-all duration-300 py-3 px-4 rounded-lg"
                  >
                    Log in
                  </Link>
                  <Button
                    variant="primary"
                    className="text-sm sm:text-base w-full py-3 font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                  >
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
