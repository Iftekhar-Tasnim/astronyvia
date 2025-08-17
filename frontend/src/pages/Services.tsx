const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Custom Software",
      description: "Tailored applications for your business",
      details: "We develop custom software solutions that perfectly fit your business processes and requirements. From enterprise applications to specialized tools, we create software that grows with your business."
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Secure migration & management",
      details: "Expert cloud migration services and ongoing management. We help you leverage the power of cloud computing while ensuring security, scalability, and cost optimization."
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Comprehensive protection",
      details: "Protect your digital assets with our comprehensive cybersecurity solutions. We implement robust security measures, conduct audits, and provide ongoing monitoring and support."
    },
    {
      icon: "🌐",
      title: "Websites & E-Commerce",
      description: "Fast, secure, scalable platforms",
      details: "Modern, responsive websites and e-commerce platforms built for performance and user experience. We create digital solutions that convert visitors into customers."
    },
    {
      icon: "📱",
      title: "Android Apps",
      description: "Engaging mobile experiences",
      details: "Native Android applications that provide exceptional user experiences. We build apps that are intuitive, performant, and aligned with your business goals."
    },
    {
      icon: "🎮",
      title: "3D & Game Assets",
      description: "High-quality models & visualization",
      details: "Professional 3D modeling, game assets, and visualization services. From character models to architectural renders, we bring your ideas to life in stunning detail."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive your business forward in the digital age
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-blue-500/50 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">{service.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 font-medium">
                {service.description}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {service.details}
              </p>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can transform your business and help you achieve your technology goals.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              🚀 Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services 