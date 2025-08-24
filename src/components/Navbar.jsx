import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-15">
          {/* Logo Section */}
          <div className="flex items-center group">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-3">
                {/* Logo Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white text-lg sm:text-xl font-bold">🔐</span>
                </div>
                {/* Logo Text */}
                <div className="flex flex-col">
                  <span className='font-bold text-xl sm:text-2xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent'>
                    Pass<span className='text-green-600'>Manage</span>
                  </span>
                  <span className="text-xs text-gray-500 hidden sm:block">Secure Password Manager</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <a href="#" className="group relative px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </a>
              <a href="#" className="group relative px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">
                <span className="relative z-10">Features</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </a>
              <a href="#" className="group relative px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">
                <span className="relative z-10">Security</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </a>
              <a href="#" className="group relative px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">
              Sign In
            </button>
            <button className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">Get Started</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg border border-gray-200">
              <a href="#" className="block px-3 py-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-gray-50 font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#" className="block px-3 py-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-gray-50 font-medium transition-colors duration-200">
                Features
              </a>
              <a href="#" className="block px-3 py-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-gray-50 font-medium transition-colors duration-200">
                Security
              </a>
              <a href="#" className="block px-3 py-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-gray-50 font-medium transition-colors duration-200">
                About
              </a>
              <div className="pt-4 pb-2 border-t border-gray-200">
                <a href="#" className="block px-3 py-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-gray-50 font-medium transition-colors duration-200">
                  Sign In
                </a>
                <button className="w-full mt-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
