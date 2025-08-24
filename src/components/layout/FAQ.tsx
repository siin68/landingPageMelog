'use client'
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Backlog streamline project management for teams?",
      answer: "Backlog provides an all-in-one platform that combines project management, issue tracking, version control, and team collaboration tools. This eliminates the need to switch between multiple applications, reducing complexity and increasing productivity."
    },
    {
      question: "What features make Backlog stand out as the best project management software?",
      answer: "Backlog stands out with its intuitive interface, Git/SVN integration, Gantt charts, Kanban boards, wiki functionality, and seamless issue tracking. It's designed specifically for development teams and creative professionals."
    },
    {
      question: "How can project managers leverage the task management capabilities of Backlog?",
      answer: "Project managers can create detailed task hierarchies, set dependencies, track progress with visual charts, assign tasks to team members, set deadlines, and monitor project health through comprehensive dashboards and reports."
    },
    {
      question: "Can I create and manage task lists within Backlog for timely project completion?",
      answer: "Yes, Backlog offers flexible task list creation with customizable fields, priority levels, categories, and milestones. You can organize tasks by project, assignee, or status to ensure nothing falls through the cracks."
    },
    {
      question: "How does Backlog enhance collaboration among team members?",
      answer: "Backlog enhances collaboration through real-time commenting, file sharing, @mentions, notifications, shared wikis, and integrated communication tools. Team members can stay updated on project progress and communicate effectively within the platform."
    },
    {
      question: "Are there specialized project management tools for small teams and startups?",
      answer: "Yes, Backlog offers a free plan for up to 10 users and 1 project, making it perfect for small teams and startups. The Starter plan provides additional features for growing teams at an affordable price point."
    },
    {
      question: "How does file sharing in Backlog contribute to smoother project management?",
      answer: "Backlog provides centralized file storage with version control, allowing teams to share documents, images, and other assets securely. Files can be attached to tasks, organized by project, and accessed by authorized team members."
    },
    {
      question: "Can I track the progress of multiple projects simultaneously?",
      answer: "Absolutely! Backlog's dashboard provides a comprehensive overview of all your projects, their status, deadlines, and key metrics. You can easily switch between projects and monitor progress across your entire portfolio."
    },
    {
      question: "How can I customize Backlog to fit my project management workflow?",
      answer: "Backlog offers extensive customization options including custom fields, issue types, workflows, notification settings, and integrations with popular tools. You can tailor the platform to match your team's specific processes and requirements."
    },
    {
      question: "Why is project management important?",
      answer: "Project management is crucial for organizing resources, meeting deadlines, controlling costs, ensuring quality, and achieving business objectives. It provides structure and accountability that leads to successful project outcomes and team satisfaction."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-2xl lg:max-w-4xl mx-auto px-2">
            Find answers to common questions about Backlog and project management.
          </p>
        </div>

        <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                <button
                  className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-4 sm:py-5 lg:py-6 xl:py-8 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-gray-900 pr-4 sm:pr-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-500 transform transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-4 sm:px-6 lg:px-8 xl:px-10 pb-4 sm:pb-5 lg:pb-6 xl:pb-8">
                    <div className="border-t border-gray-100 pt-4 sm:pt-5 lg:pt-6">
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;