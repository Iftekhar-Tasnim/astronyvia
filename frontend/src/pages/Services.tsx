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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-800/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-purple-800/10 rounded-full blur-2xl animate-pulse delay-1500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Services Counter Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-300 text-sm font-medium">
              {services.length} Professional Services Available
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            Our <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From web development and Android apps to office IT setup and 3D modeling, we provide comprehensive technology services that drive business growth and digital transformation.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {services.map((service, index) => (
               <div
                 key={index}
                 className="group relative bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:bg-gray-800/70 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer"
               >
                 {/* Icon */}
                 <div className="relative z-10 mb-6">
                   <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                     <span className="text-white text-3xl">{service.icon}</span>
                   </div>
                 </div>

                 {/* Content */}
                 <div className="relative z-10">
                   <h3 className="text-white text-xl font-bold mb-4 transition-colors duration-300 group-hover:text-blue-300">
                     {service.title}
                   </h3>
                   
                   <p className="text-gray-300 text-sm mb-4 font-medium leading-relaxed">
                     {service.description}
                   </p>
                   
                   <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                     {service.details}
                   </p>

                   {/* Features */}
                   <div className="space-y-3">
                     {service.features.slice(0, 3).map((feature, idx) => (
                       <div key={idx} className="flex items-center text-gray-300 text-sm">
                         <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-125"></div>
                         <span>{feature}</span>
                       </div>
                     ))}
                     
                     {service.features.length > 3 && (
                       <div className="pt-3">
                         <span className="text-blue-400 text-sm font-medium transition-colors duration-300 group-hover:text-blue-300">
                           +{service.features.length - 3} more features
                         </span>
                       </div>
                     )}
                   </div>
                 </div>

                 {/* Subtle hover line */}
                 <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full"></div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-16 overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Business</span>?
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how our comprehensive technology services can help you achieve your business goals, from digital presence to operational efficiency.
              </p>
              
                             <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link
                   to="/contact"
                   className="group bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white px-12 py-6 rounded-2xl font-semibold text-lg shadow-2xl flex items-center justify-center transition-all duration-300 hover:shadow-blue-500/30 hover:scale-105"
                 >
                   🚀 Start Your Project
                   <svg className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                   </svg>
                 </Link>
                 
                 <Link
                   to="/portfolio"
                   className="group border-2 border-blue-500/50 text-blue-300 px-12 py-6 rounded-2xl font-semibold text-lg backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-200 hover:scale-105"
                 >
                   📱 View Our Work
                   <svg className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                   </svg>
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services 