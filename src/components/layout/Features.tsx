"use client";
import FeatureCard from "./FeatureCard";
import FeatureSection from "./FeatureDetail";

const Features = () => {
  const features = [
    {
      icon: "🎯",
      title: "Grow your business",
      description: "All the tools you need to scale your projects and team efficiently.",
    },
    {
      icon: "🤝",
      title: "Work better together",
      description: "Your project work in one place. Collaborate seamlessly with your team.",
    },
    {
      icon: "✨",
      title: "Enjoy the process",
      description:"Reconnect with the joy of creating. Make work feel less like work.",
    },
  ];

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight px-2 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
            The all-in-one collaboration
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>tool for creators
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-200">
            Melog frees you up to focus on what matters most.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-in fade-in-0 slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
        <FeatureSection/>
        {/* <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-4 sm:space-y-6 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-700">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              Consolidate project info in one place
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              All your projects, all your tasks, all your files, and all your
              collaborators in one place.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              Each project has its own wiki and repositories. Each task has its
              own file storage, history, and comments section.
            </p>
            <div className="pt-4">
              <a
                href="/features"
                className="text-purple-700 hover:text-purple-800 font-medium inline-flex items-center group"
              >
                View all features
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative animate-in fade-in-0 slide-in-from-right-4 duration-700 delay-900">
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <h4 className="font-semibold text-gray-900">
                      Website Redesign Project
                    </h4>
                    <span className="text-sm bg-purple-100 text-purple-900 px-3 py-1 rounded-full animate-pulse">
                      Active
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
                      <div className="text-2xl font-bold text-purple-700">
                        15
                      </div>
                      <div className="text-sm text-gray-600">Total Tasks</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
                      <div className="text-2xl font-bold text-green-600">8</div>
                      <div className="text-sm text-gray-600">Completed</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 cursor-pointer">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                      <span className="flex-1 text-sm">
                        Update homepage design
                      </span>
                      <span className="text-xs text-gray-500">High</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 cursor-pointer">
                      <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse delay-500"></div>
                      <span className="flex-1 text-sm">
                        Implement responsive layout
                      </span>
                      <span className="text-xs text-gray-500">Medium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Features;
