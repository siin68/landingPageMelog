'use client'
import { useState } from "react";
import Button from "@/components/ui/Button";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "MONTH",
      description: "For small projects",
      users: "Up to 10 users",
      features: [
        "10 users",
        "1 project", 
        "100 MB storage",
        "Git & Subversion",
        "Board",
        "Issue Summaries"
      ],
      buttonText: "Sign up",
      buttonVariant: "secondary" as const,
      popular: false
    },
    {
      name: "Starter", 
      price: "$35",
      period: "MONTH",
      description: "For growing teams",
      users: "Up to 30 users",
      features: [
        "30 users",
        "5 projects",
        "1 GB storage", 
        "Git & Subversion",
        "Board",
        "Issue Summaries",
        "Subtasking"
      ],
      buttonText: "Start free trial",
      buttonVariant: "primary" as const,
      popular: false
    },
    {
      name: "Standard",
      price: "$100", 
      period: "MONTH",
      description: "For mid-sized companies",
      users: "Unlimited users",
      features: [
        "Unlimited users*",
        "100 projects",
        "30 GB storage",
        "Git & Subversion", 
        "Board",
        "Issue Summaries",
        "Subtasking",
        "Gantt charts",
        "Burndown chart",
        "Issue templates"
      ],
      buttonText: "Start free trial",
      buttonVariant: "primary" as const,
      popular: true
    },
    {
      name: "Premium",
      price: "$175",
      period: "MONTH", 
      description: "For larger companies",
      users: "Unlimited users and projects",
      features: [
        "Unlimited users*",
        "Unlimited projects",
        "100 GB storage",
        "Git & Subversion",
        "Board", 
        "Issue Summaries",
        "Subtasking",
        "Gantt charts", 
        "Burndown chart",
        "Issue templates",
        "Custom fields",
        "Dedicated support"
      ],
      buttonText: "Start free trial",
      buttonVariant: "primary" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 px-2 tracking-tight">
            Simple pricing for
            <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 bg-clip-text text-transparent"> your team</span>
          </h2>

          <div className="flex items-center justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
            <span className={`text-base sm:text-lg font-semibold transition-colors ${!isAnnual ? 'text-purple-600' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 sm:h-7 w-12 sm:w-14 items-center rounded-full transition-all duration-300 shadow-lg ${isAnnual ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 sm:h-5 w-4 sm:w-5 transform rounded-full bg-white shadow-md transition-transform duration-300 ${isAnnual ? 'translate-x-6 sm:translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-base sm:text-lg font-semibold transition-colors ${isAnnual ? 'text-purple-600' : 'text-gray-500'}`}>
              Annually
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`cursor-pointer relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border-2 p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 ${plan.popular ? 'border-purple-600 ring-4 ring-purple-100/50 bg-gradient-to-br from-purple-50/50 to-blue-50/30' : 'border-purple-200/50 hover:border-purple-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold shadow-xl whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                <div className="mb-3">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-sm sm:text-base lg:text-lg text-gray-500">/ {plan.period}</span>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-2">{plan.description}</p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-500">{plan.users}</p>
              </div>

              <Button 
                variant={plan.buttonVariant}
                className="mb-6 sm:mb-8 w-full text-sm sm:text-base lg:text-lg py-3 lg:py-4"
              >
                {plan.buttonText}
              </Button>

              <div className="space-y-3 sm:space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {plan.name === "Standard" && (
                <p className="text-xs text-gray-500 mt-4">
                  *maximum 10,000 for operational stability
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Enterprise</h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6">
                For advanced security and control
              </p>
              <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                Unlimited users and projects with advanced security features
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {[
                  "SAML Single Sign-On",
                  "User provisioning (SCIM)", 
                  "Audit logs",
                  "Advanced security & compliance",
                  "Centralized user & access management",
                  "Security integrations",
                  "Enterprise Customer Success Manager"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-right">
              <Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100 w-full lg:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base lg:text-lg cursor-pointer">
                Contact sales
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-600 text-sm sm:text-base px-4">
            Learn more about all plan options and add-ons on the{" "}
            <a href="/pricing" className="text-purple-600 hover:text-purple-700 font-medium">
              pricing page
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;