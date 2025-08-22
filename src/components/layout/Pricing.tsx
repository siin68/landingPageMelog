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
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
            Simple pricing for your team
          </h2>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
            <span className={`text-sm sm:text-base font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-5 sm:h-6 w-9 sm:w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-indigo-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-3 sm:h-4 w-3 sm:w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm sm:text-base font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annually
            </span>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg border-2 p-4 sm:p-6 lg:p-8 ${
                plan.popular ? 'border-indigo-500 scale-105' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-500 text-white px-2 sm:px-3 lg:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-sm sm:text-base text-gray-500">/ {plan.period}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-2">{plan.description}</p>
                <p className="text-xs sm:text-sm text-gray-500">{plan.users}</p>
              </div>

              <Button 
                variant={plan.buttonVariant}
                className="mb-6 sm:mb-8 w-full text-sm sm:text-base py-2.5"
              >
                {plan.buttonText}
              </Button>

              <div className="space-y-3 sm:space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 text-sm">{feature}</span>
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

        {/* Enterprise Plan */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Enterprise</h3>
              <p className="text-xl text-gray-300 mb-6">
                For advanced security and control
              </p>
              <p className="text-gray-300 mb-8">
                Unlimited users and projects with advanced security features
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "SAML Single Sign-On",
                  "User provisioning (SCIM)", 
                  "Audit logs",
                  "Advanced security & compliance",
                  "Centralized user & access management",
                  "Security integrations",
                  "Enterprise Customer Success Manager"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-right">
              <Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                Contact sales
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Learn more about all plan options and add-ons on the{" "}
            <a href="/pricing" className="text-indigo-600 hover:text-indigo-700 font-medium">
              pricing page
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;