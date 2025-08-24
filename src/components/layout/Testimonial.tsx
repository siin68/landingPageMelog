"use client"

const Testimonial = () => {
  const testimonials = [
    {
      name: "Ivan B",
      role: "Project Manager",
      company: "Tech Startup",
          content:
              "Backlog has transformed how our team collaborates. The intuitive interface and powerful features make project management a breeze.",
          avatar: "I",
    },
    {
        name: "Jeremy C",
      role: "Software Developer",
      company: "Digital Agency",
        content:
            "The Git integration and issue tracking features are exactly what our development team needed. Highly recommended!",
        avatar: "J",
    },
    {
      name: "Carmen G",
        role: "Product Owner",
      company: "E-commerce Company",
          content:
              "We've tried many project management tools, but Backlog strikes the perfect balance between simplicity and functionality.",
          avatar: "C",
      },
  ]

  const ratings = [
    { platform: "G2", rating: "4.3", logo: "G2" },
    { platform: "Capterra", rating: "4.4", logo: "C" },
    { platform: "TrustRadius", rating: "8.1", logo: "TR" },
      { platform: "Software Advice", rating: "4.2", logo: "SA" },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">CUSTOMER VOICES</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
              <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

                  <p className="text-gray-600 italic leading-relaxed">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
                  <h3 className="text-3xl font-bold text-gray-900 mb-12">HIGHLY RATED BY USERS AND EXPERTS</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ratings.map((rating, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="font-bold text-gray-600">{rating.logo}</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{rating.rating}</div>
                <div className="text-sm text-gray-600">{rating.platform}</div>
                <div className="flex justify-center space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    )
}

export default Testimonial
