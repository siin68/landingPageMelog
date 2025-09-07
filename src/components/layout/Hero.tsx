"use client";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-white via-purple-50/30 to-blue-50/20 min-h-screen flex items-center py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-300/10 to-blue-300/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                Plan less,
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 bg-clip-text text-transparent">
                  do more
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl font-medium">
                Project management software, code management, bug tracking, and
                more. The all-in-one collaboration tool for creators.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button
                variant="primary"
                className="text-base sm:text-lg lg:text-xl px-8 sm:px-10 lg:px-12 py-4 lg:py-5 w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold cursor-pointer"
              >
                Try it free
              </Button>
              <Button
                variant="secondary"
                className="text-base sm:text-lg lg:text-xl px-8 sm:px-10 lg:px-12 py-4 lg:py-5 w-full sm:w-auto border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold text-purple-700 cursor-pointer"
              >
                Contact sales
              </Button>
            </div>

            <div className="pt-6 sm:pt-8 lg:pt-12">
              <p className="text-sm sm:text-base text-gray-500 uppercase tracking-wide font-semibold mb-4 sm:mb-6">
                TRUSTED BY OVER 18,000 COMPANIES WORLDWIDE
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
                <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-all duration-300">
                  <span className="text-sm font-semibold text-gray-700">Omron</span>
                </div>
                <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-all duration-300">
                  <span className="text-sm font-semibold text-gray-700">SoftBank</span>
                </div>
                <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-all duration-300">
                  <span className="text-sm font-semibold text-gray-700">JPX</span>
                </div>
                <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-all duration-300">
                  <span className="text-sm font-semibold text-gray-700">BuzzFeed</span>
                </div>
                <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-all duration-300">
                  <span className="text-sm font-semibold text-gray-700">DMM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative">
              {/* Main dashboard mockup */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-purple-100/50 w-full max-w-md mx-auto relative z-10 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-md"></div>
                    <span className="font-bold text-gray-900 text-lg">
                      Project Dashboard
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full shadow-sm"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full shadow-sm"></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-2xl text-center border border-purple-200/50 hover:shadow-md transition-all duration-300">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">24</div>
                    <div className="text-sm text-purple-600 font-medium">Active</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-4 rounded-2xl text-center border border-green-200/50 hover:shadow-md transition-all duration-300">
                    <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">12</div>
                    <div className="text-sm text-green-600 font-medium">Done</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-amber-100 p-4 rounded-2xl text-center border border-orange-200/50 hover:shadow-md transition-all duration-300">
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">5</div>
                    <div className="text-sm text-orange-600 font-medium">Review</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-100/50 hover:shadow-sm transition-all duration-300">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-sm"></div>
                    <span className="flex-1 text-sm font-medium text-gray-700">Design homepage</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100/50 hover:shadow-sm transition-all duration-300">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-sm"></div>
                    <span className="flex-1 text-sm font-medium text-gray-700">Fix auth bug</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-3xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-12">
                <span className="text-white font-bold text-2xl">👩</span>
              </div>
              <div className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-rotate-12">
                <span className="text-white font-bold text-xl">👨</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-12">
                <span className="text-white font-bold text-lg">👤</span>
              </div>

              {/* Animated connecting lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-40">
                  <defs>
                    <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                    <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#EC4899" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 200 100 Q 300 150 350 200"
                    stroke="url(#lineGradient1)"
                    strokeWidth="3"
                    strokeDasharray="8,8"
                    fill="none"
                    className="animate-pulse"
                  />
                  <path
                    d="M 100 150 Q 200 200 250 300"
                    stroke="url(#lineGradient2)"
                    strokeWidth="3"
                    strokeDasharray="8,8"
                    fill="none"
                    className="animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
