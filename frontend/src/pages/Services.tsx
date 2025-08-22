import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Custom Software Development",
      description: "Tailored applications designed specifically for your business needs",
      details: "We develop custom software solutions that perfectly fit your business processes and requirements. From enterprise applications to specialized tools, we create software that grows with your business.",
      features: ["Enterprise Solutions", "Custom APIs", "Scalable Architecture", "Legacy System Modernization"]
    },
    {
      icon: "☁️",
      title: "Cloud Solutions & Migration",
      description: "Secure cloud infrastructure and seamless migration services",
      details: "Expert cloud migration services and ongoing management. We help you leverage the power of cloud computing while ensuring security, scalability, and cost optimization.",
      features: ["AWS/Azure/GCP Migration", "Cost Optimization", "Security Compliance", "24/7 Monitoring"]
    },
    {
      icon: "🔒",
      title: "Cybersecurity & Compliance",
      description: "Comprehensive protection for your digital assets",
      details: "Protect your digital assets with our comprehensive cybersecurity solutions. We implement robust security measures, conduct audits, and provide ongoing monitoring and support.",
      features: ["Threat Detection", "Incident Response", "Compliance Audits", "Security Training"]
    },
    {
      icon: "🌐",
      title: "Web Development & E-Commerce",
      description: "Modern, responsive websites and powerful e-commerce platforms",
      details: "Modern, responsive websites and e-commerce platforms built for performance and user experience. We create digital solutions that convert visitors into customers.",
      features: ["Progressive Web Apps", "E-commerce Solutions", "SEO Optimization", "Performance Tuning"]
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      details: "Native Android applications that provide exceptional user experiences. We build apps that are intuitive, performant, and aligned with your business goals.",
      features: ["iOS & Android Apps", "React Native", "Flutter Development", "App Store Optimization"]
    },
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description: "Intelligent solutions to automate and optimize your business",
      details: "Leverage the power of artificial intelligence to automate processes, gain insights from data, and create intelligent solutions that give you a competitive edge.",
      features: ["Predictive Analytics", "Chatbots & NLP", "Computer Vision", "Process Automation"]
    },
    {
      icon: "📊",
      title: "Data Analytics & BI",
      description: "Transform your data into actionable business insights",
      details: "Turn your data into a strategic asset with our analytics and business intelligence services. We help you make data-driven decisions that drive growth and efficiency.",
      features: ["Data Warehousing", "Business Intelligence", "Real-time Dashboards", "Predictive Modeling"]
    },
    {
      icon: "⚙️",
      title: "DevOps & CI/CD",
      description: "Streamline development and deployment processes",
      details: "Accelerate your development cycles with modern DevOps practices. We implement CI/CD pipelines, container orchestration, and infrastructure automation.",
      features: ["CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code", "Performance Monitoring"]
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
            From custom software development to cutting-edge AI solutions, we provide comprehensive technology services that drive business growth and digital transformation.
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
              Let's discuss how our comprehensive technology services can help you achieve your business goals and stay ahead of the competition.
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