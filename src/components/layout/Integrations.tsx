"use client"

const Integrations = () => {
  const integrations = [
    { name: "Cacoo", color: "bg-blue-500" },
    { name: "Slack", color: "bg-purple-500" },
    { name: "Redmine", color: "bg-red-500" },
    { name: "Jira", color: "bg-blue-600" },
    { name: "Jenkins", color: "bg-gray-600" },
    { name: "Webhooks", color: "bg-green-500" },
    { name: "Microsoft Teams", color: "bg-indigo-600" },
    { name: "GitHub Copilot", color: "bg-black" },
    { name: "OneDrive", color: "bg-blue-400" },
    { name: "Google Chat", color: "bg-green-600" },
    { name: "Google Drive", color: "bg-yellow-500" },
    { name: "Google Sheets", color: "bg-green-500" },
    { name: "Dropbox", color: "bg-blue-600" },
    { name: "Box", color: "bg-blue-700" },
    { name: "LambdaTest", color: "bg-purple-600" },
      { name: "Calendar", color: "bg-red-500" },
  ]

  return (
    <section id="integrations" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Integrate with your favorite apps
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl lg:max-w-2xl mx-auto px-2">
            Connect Melog with the tools you already use to streamline your workflow.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="aspect-square bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group cursor-pointer"
            >
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${integration.color} rounded-md sm:rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="text-white font-bold text-xs sm:text-sm">{integration.name.charAt(0)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/integrations"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-base sm:text-lg"
          >
            View all Integrations
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 bg-white rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                Visualize workflows seamlessly with Cacoo and Melog
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-lg sm:text-xl font-semibold text-purple-600">Integrate with Cacoo</h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  Unlock new possibilities by seamlessly integrating Cacoo with Melog, allowing you to bring your
                  processes, workflows, and more directly into your Melog tasks.
                </p>
                <a
                  href="/integrations/cacoo"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm sm:text-base"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8">
                <div className="bg-white rounded-lg lg:rounded-xl shadow-lg p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-600 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs sm:text-sm">C</span>
                    </div>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base truncate">Workflow Diagram</span>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between sm:space-x-2 lg:space-x-4 overflow-hidden">
                      <div className="flex-shrink-0 w-16 sm:w-18 lg:w-20 h-6 sm:h-7 lg:h-8 bg-blue-100 rounded flex items-center justify-center">
                        <span className="text-xs font-medium text-blue-600">Start</span>
                      </div>
                      <div className="flex-1 min-w-2 h-0.5 bg-gray-300 mx-1 sm:mx-2"></div>
                      <div className="flex-shrink-0 w-16 sm:w-18 lg:w-20 h-6 sm:h-7 lg:h-8 bg-yellow-100 rounded flex items-center justify-center">
                        <span className="text-xs font-medium text-yellow-600">Review</span>
                      </div>
                      <div className="flex-1 min-w-2 h-0.5 bg-gray-300 mx-1 sm:mx-2"></div>
                      <div className="flex-shrink-0 w-16 sm:w-18 lg:w-20 h-6 sm:h-7 lg:h-8 bg-green-100 rounded flex items-center justify-center">
                        <span className="text-xs font-medium text-green-600">Done</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Integrations
