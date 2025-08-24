import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      icon: "🌐",
      title: "Website, Web Application & E-Commerce Development",
      description: "We design and develop fast, responsive, and professional websites, custom web applications, and secure e-commerce platforms with comprehensive maintenance and support.",
      details: "We create modern, responsive websites and web applications that deliver exceptional user experiences. Our e-commerce solutions include secure payment gateways, product management systems, and customer-friendly interfaces. We also provide ongoing maintenance and support to ensure your digital presence remains current and secure.",
      features: ["Business Websites", "Web Applications", "E-Commerce Platforms", "Maintenance & Support"]
    },
    {
      icon: "📱",
      title: "Android Application Development",
      description: "We create user-friendly, high-performance Android apps tailored to your business needs with attractive UI/UX design and seamless integration.",
      details: "We specialize in developing native Android applications that provide exceptional user experiences. Our apps feature attractive UI/UX design, seamless integration with business systems, and comprehensive testing to ensure bug-free performance and timely updates.",
      features: ["Custom Android Apps", "UI/UX Design", "Integration", "Testing & Maintenance"]
    },
    {
      icon: "💻",
      title: "Software Development",
      description: "We provide tailored software solutions to streamline business operations including custom software, desktop applications, and cloud integration.",
      details: "We develop custom software solutions that perfectly fit your business processes and requirements. From ERP and CRM systems to desktop applications and cloud-integrated solutions, we create software that grows with your business and ensures optimal performance.",
      features: ["Custom Software", "Desktop Applications", "Cloud Integration", "Testing & Quality Assurance"]
    },
    {
      icon: "🏢",
      title: "Office Setup (Hardware Purchase & Installation)",
      description: "We set up complete office IT infrastructure including hardware procurement, installation, security solutions, and ongoing IT support.",
      details: "We provide comprehensive office IT infrastructure setup services, from hardware procurement and installation to security solutions and ongoing support. Our team ensures seamless integration of all systems and provides reliable IT support to keep your business running smoothly.",
      features: ["Hardware Procurement", "Installation & Configuration", "Security Solutions", "IT Support & Maintenance"]
    },
    {
      icon: "🎮",
      title: "3D Modeling & Game Asset Design",
      description: "We create high-quality digital assets for games, VR/AR, and marketing including 3D models, game assets, and product visualization.",
      details: "We specialize in creating high-quality 3D models and digital assets for games, VR/AR applications, and marketing purposes. Our team delivers optimized models for various platforms, complete with animation and rigging, plus realistic product visualization for marketing and presentations.",
      features: ["3D Models", "Game Assets", "Animation & Rigging", "Product Visualization"]
    },
    {
      icon: "🔍",
      title: "Search Engine Optimization (SEO)",
      description: "We help businesses rank higher on search engines and grow visibility through comprehensive on-page, off-page, and technical SEO strategies.",
      details: "We implement comprehensive SEO strategies to improve your search engine rankings and increase online visibility. Our approach includes on-page optimization, off-page strategies, technical improvements, and detailed analytics reporting to track performance and provide actionable insights.",
      features: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Analytics & Reporting"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Services Counter Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 mb-8">
            <span className="text-blue-300 text-sm font-medium">
              {services.length} Professional Services Available
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From web development and Android apps to office IT setup and 3D modeling, we provide comprehensive technology services that drive business growth and digital transformation.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer overflow-hidden"
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110">
                    <span className="text-white text-2xl">{service.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 font-medium">
                    {service.description}
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.details}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                    
                    {service.features.length > 3 && (
                      <div className="pt-2">
                        <span className="text-blue-400 text-sm font-medium">
                          +{service.features.length - 3} more features
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-500"></div>
                
                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-3xl p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our comprehensive technology services can help you achieve your business goals, from digital presence to operational efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
              >
                🚀 Start Your Project
              </Link>
              
              <Link
                to="/portfolio"
                className="border-2 border-blue-500 text-blue-400 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                📱 View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services 