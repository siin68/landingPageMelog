"use client"
import Link from "next/link"

const Footer = () => {
  const productLinks = [
    { name: "Melog", href: "/Melog" },
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
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg viewBox="0 0 48 48" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z" transform="translate(-200.000000, -160.000000)" />
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg viewBox="0 0 32 32" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="instagram-gradient-1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)">
              <stop stopColor="#B13589" />
              <stop offset="0.79309" stopColor="#C62F94" />
              <stop offset="1" stopColor="#8A3AC8" />
            </radialGradient>
            <radialGradient id="instagram-gradient-2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)">
              <stop stopColor="#E0E8B7" />
              <stop offset="0.444662" stopColor="#FB8A2E" />
              <stop offset="0.71474" stopColor="#E2425C" />
              <stop offset="1" stopColor="#E2425C" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="instagram-gradient-3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)">
              <stop offset="0.156701" stopColor="#406ADC" />
              <stop offset="0.467799" stopColor="#6A45BE" />
              <stop offset="1" stopColor="#6A45BE" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#instagram-gradient-1)" />
          <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#instagram-gradient-2)" />
          <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#instagram-gradient-3)" />
          <circle cx="21.5" cy="10.5" r="1.5" fill="white" />
          <circle cx="16" cy="16" r="5" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="16" cy="16" r="3" fill="none" stroke="white" strokeWidth="2" />
          <rect x="6" y="6" width="20" height="20" rx="6" fill="none" stroke="white" strokeWidth="2" />
        </svg>
      )
    },
    {
      name: "GitHub",
      href: "https://github.com",
      icon: (
        <svg viewBox="0 0 48 48" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560" transform="translate(-700.000000, -560.000000)" />
        </svg>
      )
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-600 rounded-md sm:rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">B</span>
              </div>
              <span className="text-lg sm:text-xl font-bold">Melog</span>
            </Link>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Simple and intuitive project management software for moving real work forward.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 lg:space-x-4 lg:gap-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-md sm:rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors p-1.5 sm:p-2"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Products</h3>
            <ul className="space-y-2 sm:space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Workflows</h3>
            <ul className="space-y-2 sm:space-y-3">
              {workflowLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0">
            <div className="w-full lg:w-auto">
              <h3 className="font-semibold text-base sm:text-lg mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-400 text-sm sm:text-base">Stay updated with the latest features and news.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 sm:px-4 py-2 bg-gray-800 border border-gray-700 rounded-md sm:rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 text-sm sm:text-base w-full sm:w-64"
              />
              <button className="px-4 sm:px-6 py-2 bg-purple-600 text-white rounded-md sm:rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base whitespace-nowrap cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="text-gray-400 text-xs sm:text-sm">© 2025 Melog. All Rights Reserved.</div>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <span className="text-gray-400 text-xs sm:text-sm">English</span>
            <select className="bg-gray-800 border border-gray-700 rounded px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-400 focus:outline-none focus:border-purple-500">
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
