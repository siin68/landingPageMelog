"use client"
import { useState } from "react"
import Button from "@/components/ui/Button"
import Link from "next/link"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-4">
                      <Link href="/" className="flex items-center space-x-1 sm:space-x-2 group">
                          <div className="w-6 sm:w-8 h-6 sm:h-8 bg-teal-500 rounded-md sm:rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-200">
                <span className="text-white font-bold text-xs sm:text-sm">B</span>
              </div>
                          <span className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-200">
                              Backlog
                          </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                      <Link
                          href="/features"
                          className="text-sm lg:text-base text-gray-600 hover:text-teal-600 transition-colors duration-200 relative group"
                      >
              Features
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
                      <Link
                          href="/pricing"
                          className="text-sm lg:text-base text-gray-600 hover:text-teal-600 transition-colors duration-200 relative group"
                      >
              Pricing
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
                      <Link
                          href="/integrations"
                          className="text-sm lg:text-base text-gray-600 hover:text-teal-600 transition-colors duration-200 relative group"
                      >
              Integrations
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
                      <Link
                          href="/learn"
                          className="text-sm lg:text-base text-gray-600 hover:text-teal-600 transition-colors duration-200 relative group"
                      >
              Learn
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
                      <Link
                          href="/contact"
                          className="text-sm lg:text-base text-gray-600 hover:text-teal-600 transition-colors duration-200 relative group"
                      >
              Contact
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
                      <Link
                          href="/login"
                          className="text-sm lg:text-base text-gray-600 hover:text-teal-600 transition-colors duration-200"
                      >
              Log in
            </Link>
            <Button variant="primary" className="text-sm lg:text-base px-3 lg:px-4 py-2">
              Try it free
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
                      className="md:hidden p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
                  <div className="md:hidden py-3 sm:py-4 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3 sm:space-y-4">
                          <Link
                              href="/features"
                              className="text-sm sm:text-base text-gray-600 hover:text-teal-600 transition-colors duration-200 py-1"
                          >
                Features
              </Link>
                          <Link
                              href="/pricing"
                              className="text-sm sm:text-base text-gray-600 hover:text-teal-600 transition-colors duration-200 py-1"
                          >
                Pricing
              </Link>
                          <Link
                              href="/integrations"
                              className="text-sm sm:text-base text-gray-600 hover:text-teal-600 transition-colors duration-200 py-1"
                          >
                Integrations
              </Link>
                          <Link
                              href="/learn"
                              className="text-sm sm:text-base text-gray-600 hover:text-teal-600 transition-colors duration-200 py-1"
                          >
                Learn
              </Link>
                          <Link
                              href="/contact"
                              className="text-sm sm:text-base text-gray-600 hover:text-teal-600 transition-colors duration-200 py-1"
                          >
                Contact
              </Link>
              <div className="pt-3 sm:pt-4 flex flex-col space-y-2">
                              <Link
                                  href="/login"
                                  className="text-sm sm:text-base text-gray-600 hover:text-teal-600 transition-colors duration-200 py-2"
                              >
                  Log in
                </Link>
                <Button variant="primary" className="text-sm sm:text-base w-full py-2.5">
                  Try it free
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
    )
}

export default Header
