"use client"
import Link from "next/link"

const Footer = () => {
  const productLinks = [
    { name: "Backlog", href: "/backlog" },
    { name: "Cacoo", href: "/cacoo" },
    { name: "Nulab Pass", href: "/nulabpass" },
    { name: "Pricing", href: "/pricing" },
    { name: "Case Studies", href: "/customers" },
    { name: "Integrations", href: "/integrations" },
      { name: "Download", href: "/download" },
  ]

  const workflowLinks = [
    { name: "Project Management", href: "/workflows/project-management" },
    { name: "Task Management", href: "/workflows/task-management" },
    { name: "Issue & Bug Tracking", href: "/workflows/issue-and-bug-tracking" },
    { name: "Version Control", href: "/workflows/version-control" },
    { name: "Kanban", href: "/workflows/kanban" },
    { name: "Gantt Chart", href: "/workflows/gantt-chart" },
      { name: "Remote Work", href: "/workflows/remote-work" },
  ]

  const resourceLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Online Community", href: "/community" },
    { name: "System Status", href: "/status" },
    { name: "Developers API", href: "/api" },
    { name: "Learn", href: "/learn" },
    { name: "Blog", href: "/blog" },
      { name: "Release Notes", href: "/release-notes" },
  ]

  const companyLinks = [
    { name: "About", href: "/company" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Contact us", href: "/contact" },
    { name: "Affiliate Program", href: "/affiliate" },
    { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
  ]

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com", icon: "F" },
    { name: "Instagram", href: "https://instagram.com", icon: "I" },
    { name: "Twitter", href: "https://twitter.com", icon: "T" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "L" },
    { name: "GitHub", href: "https://github.com", icon: "G" },
      { name: "YouTube", href: "https://youtube.com", icon: "Y" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold">Backlog</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Simple and intuitive project management software for moving real work forward.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-sm font-medium">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                      <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Workflows */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Workflows</h3>
            <ul className="space-y-3">
              {workflowLinks.map((link, index) => (
                <li key={index}>
                      <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                      <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                      <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold text-lg mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-400">Stay updated with the latest features and news.</p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              />
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
                  <div className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Backlog. All Rights Reserved.</div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">English</span>
            <select className="bg-gray-800 border border-gray-700 rounded px-3 py-1 text-sm text-gray-400">
              <option>English</option>
              <option>日本語</option>
              <option>한국어</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer
