"use client"
import FeatureCard from "./FeatureCard"
import FeatureSection from "./FeatureDetail"

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
      description: "Reconnect with the joy of creating. Make work feel less like work.",
    },
  ]

  return (
    <section
      id="features"
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-8 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-16 left-8 w-48 h-48 bg-gradient-to-br from-indigo-200/20 to-slate-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/10 to-indigo-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 sm:mb-8 lg:mb-10 leading-tight tracking-tight px-2">
            The all-in-one collaboration
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-700 bg-clip-text text-transparent font-black">
              tool for creators
            </span>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 max-w-4xl mx-auto px-2 font-medium leading-relaxed">
            Melog frees you up to focus on what matters most.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 ease-out"
              style={{ animationDelay: `${400 + index * 150}ms` }}
            >
              <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
            </div>
          ))}
        </div>
        <FeatureSection />
      </div>
    </section>
  )
}

export default Features
