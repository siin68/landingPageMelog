"use client";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <section className="bg-white min-h-screen flex items-center py-8 sm:py-12">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight animate-in fade-in-0 slide-in-from-left-4 duration-700">
                Plan less,
                <br />
                <span className="text-purple-600">do more</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-200">
                Project management software, code management, bug tracking, and
                more. The all-in-one collaboration tool for creators.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-400 cursor-pointer">
              <Button
                variant="primary"
                className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 lg:py-4 w-full sm:w-auto cursor-pointer "
              >
                Try it free
              </Button>
              <Button
                variant="secondary"
                className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 lg:py-4 w-full sm:w-auto cursor-pointer"
              >
                Contact sales
              </Button>
            </div>

            <div className="pt-4 sm:pt-6 lg:pt-8 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-600">
              <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide font-medium mb-2 sm:mb-4">
                TRUSTED BY OVER 18,000 COMPANIES WORLDWIDE
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-8 opacity-60">
                <div className="w-16 sm:w-20 lg:w-24 h-6 sm:h-7 lg:h-8 bg-gray-100 rounded flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
                  <span className="text-xs font-medium text-gray-600">
                    Omron
                  </span>
                </div>
                <div className="w-16 sm:w-20 lg:w-24 h-6 sm:h-7 lg:h-8 bg-gray-100 rounded flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
                  <span className="text-xs font-medium text-gray-600">
                    SoftBank
                  </span>
                </div>
                <div className="w-16 sm:w-20 lg:w-24 h-6 sm:h-7 lg:h-8 bg-gray-100 rounded flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
                  <span className="text-xs font-medium text-gray-600">JPX</span>
                </div>
                <div className="w-16 sm:w-20 lg:w-24 h-6 sm:h-7 lg:h-8 bg-gray-100 rounded flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
                  <span className="text-xs font-medium text-gray-600">
                    BuzzFeed
                  </span>
                </div>
                <div className="w-16 sm:w-20 lg:w-24 h-6 sm:h-7 lg:h-8 bg-gray-100 rounded flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
                  <span className="text-xs font-medium text-gray-600">DMM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 animate-in fade-in-0 slide-in-from-right-4 duration-700 delay-300">
            <div className="relative bg-gray-50 rounded-full w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] mx-auto flex items-center justify-center">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl w-64 sm:w-80 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-purple-600 rounded-lg"></div>
                    <span className="font-semibold text-gray-900 text-sm">
                      Project Dashboard
                    </span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-purple-50 p-3 rounded-lg text-center">
                    <div className="text-xl font-bold text-purple-700">24</div>
                    <div className="text-xs text-gray-600">Active</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="text-xl font-bold text-green-600">12</div>
                    <div className="text-xs text-gray-600">Done</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-center">
                    <div className="text-xl font-bold text-orange-600">5</div>
                    <div className="text-xs text-gray-600">Review</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    <span className="flex-1 text-xs">Design homepage</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="flex-1 text-xs">Fix auth bug</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-16 right-16 w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000">
                <span className="text-white font-bold text-lg">👩</span>
              </div>
              <div className="absolute top-32 left-12 w-14 h-14 bg-blue-400 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-2000">
                <span className="text-white font-bold">👨</span>
              </div>
              <div className="absolute bottom-20 right-20 w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-3000">
                <span className="text-white font-bold text-sm">👤</span>
              </div>

              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-30">
                  <path
                    d="M 200 100 Q 300 150 350 200"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    className="animate-pulse"
                  />
                  <path
                    d="M 100 150 Q 200 200 250 300"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    className="animate-pulse delay-1000"
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
