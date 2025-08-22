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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Integrate with your favorite apps</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect Backlog with the tools you already use to streamline your workflow.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
          {integrations.map((integration, index) => (
              <div
              key={index}
              className="aspect-square bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group cursor-pointer"
            >
                  <div
                      className={`w-12 h-12 ${integration.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                      <span className="text-white font-bold text-sm">{integration.name.charAt(0)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
                  <a
                      href="/integrations"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-lg"
          >
            View all Integrations
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Cacoo Integration Highlight */}
        <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Visualize workflows seamlessly with Cacoo and Backlog
              </h3>
              <div className="space-y-4">
                              <h4 className="text-xl font-semibold text-indigo-600">Integrate with Cacoo</h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                                  Unlock new possibilities by seamlessly integrating Cacoo with Backlog, allowing you to bring your
                                  processes, workflows, and more directly into your Backlog tasks.
                </p>
                              <a
                                  href="/integrations/cacoo"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">C</span>
                    </div>
                    <span className="font-semibold text-gray-900">Workflow Diagram</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center">
                        <span className="text-xs font-medium text-blue-600">Start</span>
                      </div>
                      <div className="w-4 h-0.5 bg-gray-300"></div>
                      <div className="w-12 h-8 bg-yellow-100 rounded flex items-center justify-center">
                        <span className="text-xs font-medium text-yellow-600">Review</span>
                      </div>
                      <div className="w-4 h-0.5 bg-gray-300"></div>
                      <div className="w-12 h-8 bg-green-100 rounded flex items-center justify-center">
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
