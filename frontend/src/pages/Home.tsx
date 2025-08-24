import { Link } from 'react-router-dom'
import HomeServiceCard from '../components/HomeServiceCard'

const Home = () => {
  const services = [
    {
      icon: "🌐",
      title: "Website, Web Application & E-Commerce Development",
      description: "We design and develop fast, responsive, and professional websites, custom web applications, and secure e-commerce platforms with comprehensive maintenance and support.",
      features: ["Business Websites", "Web Applications", "E-Commerce Platforms", "Maintenance & Support"]
    },
    {
      icon: "📱",
      title: "Android Application Development",
      description: "We create user-friendly, high-performance Android apps tailored to your business needs with attractive UI/UX design and seamless integration.",
      features: ["Custom Android Apps", "UI/UX Design", "Integration", "Testing & Maintenance"]
    },
    {
      icon: "💻",
      title: "Software Development",
      description: "We provide tailored software solutions to streamline business operations including custom software, desktop applications, and cloud integration.",
      features: ["Custom Software", "Desktop Applications", "Cloud Integration", "Testing & Quality Assurance"]
    },
    {
      icon: "🏢",
      title: "Office Setup (Hardware Purchase & Installation)",
      description: "We set up complete office IT infrastructure including hardware procurement, installation, security solutions, and ongoing IT support.",
      features: ["Hardware Procurement", "Installation & Configuration", "Security Solutions", "IT Support & Maintenance"]
    },
    {
      icon: "🎮",
      title: "3D Modeling & Game Asset Design",
      description: "We create high-quality digital assets for games, VR/AR, and marketing including 3D models, game assets, and product visualization.",
      features: ["3D Models", "Game Assets", "Animation & Rigging", "Product Visualization"]
    },
    {
      icon: "🔍",
      title: "Search Engine Optimization (SEO)",
      description: "We help businesses rank higher on search engines and grow visibility through comprehensive on-page, off-page, and technical SEO strategies.",
      features: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Analytics & Reporting"]
    }
  ]

     const techIcons = [
     { name: "React", icon: "/icon/icons/imgi_44_reactActive.png", color: "#61DAFB", type: "image" },
     { name: "Next.js", icon: "/icon/icons/imgi_32_nextActive.png", color: "#000000", type: "image" },
     { name: "TypeScript", icon: "/icon/icons/imgi_29_typescript.svg", color: "#3178C6", type: "svg" },
     { name: "JavaScript", icon: "/icon/icons/imgi_14_javascript.svg", color: "#F7DF1E", type: "svg" },
     { name: "Node.js", icon: "/icon/icons/imgi_20_nest.svg", color: "#339933", type: "svg" },
     { name: "PostgreSQL", icon: "/icon/icons/imgi_23_pg.svg", color: "#336791", type: "svg" },
     { name: "MySQL", icon: "/icon/icons2/mysql-logo-svgrepo-com.svg", color: "#4479A1", type: "svg" },
     { name: "MongoDB", icon: "/icon/icons2/mongo-svgrepo-com.svg", color: "#47A248", type: "svg" },
     { name: "Python", icon: "/icon/icons2/python-svgrepo-com.svg", color: "#3776AB", type: "svg" },
     { name: "Java", icon: "/icon/icons2/java-svgrepo-com.svg", color: "#ED8B00", type: "svg" },
     { name: "Tailwind CSS", icon: "/icon/icons2/tailwindcss-icon-svgrepo-com.svg", color: "#06B6D4", type: "svg" },
     { name: "Adobe XD", icon: "/icon/icons2/adobe-xd-svgrepo-com.svg", color: "#FF61F6", type: "svg" },
     { name: "Flutter", icon: "/icon/icons2/flutter-svgrepo-com.svg", color: "#02569B", type: "svg" },
     { name: "Vite", icon: "/icon/icons2/vitejs-svgrepo-com.svg", color: "#646CFF", type: "svg" },
     { name: "NPM", icon: "/icon/icons/imgi_22_npm.svg", color: "#CB3837", type: "svg" },
     { name: "Figma", icon: "/icon/icons/imgi_9_figma.svg", color: "#F24E1E", type: "svg" },
     { name: "GitHub", icon: "/icon/icons/imgi_11_github.svg", color: "#181717", type: "svg" },
     { name: "AWS", icon: "AWS", color: "#FF9900", type: "text" },
     { name: "Docker", icon: "Docker", color: "#2496ED", type: "text" },
     { name: "Kubernetes", icon: "K8s", color: "#326CE5", type: "text" },
     { name: "Redis", icon: "Redis", color: "#DC382D", type: "text" },
     { name: "Vue.js", icon: "Vue", color: "#4FC08D", type: "text" },
     { name: "Angular", icon: "Angular", color: "#DD0031", type: "text" },
     { name: "Laravel", icon: "Laravel", color: "#FF2D20", type: "text" },
     { name: "Django", icon: "Django", color: "#092E20", type: "text" },
     { name: "React Native", icon: "RN", color: "#61DAFB", type: "text" },
     { name: "Firebase", icon: "Firebase", color: "#FFCA28", type: "text" },
     { name: "GraphQL", icon: "GraphQL", color: "#E10098", type: "text" },
     { name: "Elasticsearch", icon: "ES", color: "#FED10A", type: "text" },
     { name: "Terraform", icon: "Terraform", color: "#7B42BC", type: "text" },
     { name: "Jenkins", icon: "Jenkins", color: "#D24939", type: "text" },
     { name: "Azure", icon: "Azure", color: "#0089D6", type: "text" },
     { name: "GCP", icon: "GCP", color: "#4285F4", type: "text" },
     { name: "Sass", icon: "Sass", color: "#CC6699", type: "text" },
     { name: "Webpack", icon: "Webpack", color: "#8DD6F9", type: "text" },
     { name: "Jest", icon: "Jest", color: "#C21325", type: "text" },
     { name: "Cypress", icon: "Cypress", color: "#17202C", type: "text" }
   ]

     const stats = [
     { number: "150+", label: "Projects Completed", icon: "/icon/icons2/rocket-svgrepo-com.svg", description: "Successfully delivered across various industries" },
     { number: "50+", label: "Happy Clients", icon: "/icon/icons2/users-group-svgrepo-com.svg", description: "Trusted by businesses worldwide" },
     { number: "5+", label: "Years Experience", icon: "/icon/icons2/star-svgrepo-com.svg", description: "Deep expertise in modern technologies" },
     { number: "24/7", label: "Support Available", icon: "/icon/icons2/support-svgrepo-com.svg", description: "Round-the-clock technical assistance" }
   ]





  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We begin by understanding your business needs, challenges, and objectives through comprehensive analysis and consultation.",
      icon: "🔍"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Our experts develop a tailored technology strategy and detailed project plan aligned with your business goals.",
      icon: "📋"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using cutting-edge technologies, following industry best practices and rigorous testing protocols.",
      icon: "⚡"
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "We ensure smooth deployment and provide ongoing support, maintenance, and optimization for your solution.",
      icon: "🚀"
    }
  ]

  return (

    
    <div className="min-h-screen">
             {/* Under Construction Alert Banner */}
       <div className="bg-yellow-500/20 border-b border-yellow-500/30 py-3">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center justify-center text-yellow-300 text-sm font-medium">
             <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
             🚧 Contact Section Under Construction - Please check back soon! 🚧
           </div>
         </div>
       </div>

       {/* Enhanced Hero Section */}
       <section className="relative bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-800/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-purple-800/10 rounded-full blur-2xl animate-pulse delay-1500"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            {/* Professional Status Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-300 text-sm font-medium">Available for New Projects</span>
            </div>

            {/* Company Logo
            <div className="flex justify-center mb-8">
              <Icon 
                name="main" 
                alt="Astronyvia Logo" 
                size="large" 
                className="drop-shadow-2xl opacity-90"
              />
            </div> */}

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                ASTRONYVIA
              </span>
              <br />
              <span className="text-white text-4xl md:text-5xl lg:text-6xl">
              Your Partner in IT & Software Solutions
              </span>
            </h1>

            {/* Enhanced Subtext */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
              Astronyvia delivers innovative technology solutions that empower businesses to thrive in the digital era. 
              We transform ideas into powerful, scalable applications that drive growth and competitive advantage.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center"
              >
                🚀 Start Your Project
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/portfolio"
                className="group border-2 border-blue-500/50 text-blue-300 px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 backdrop-blur-sm flex items-center"
              >
                📱 View Portfolio
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Client Testimonials & Reviews
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Client Success Stories
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                99.9% Uptime Guarantee
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Company Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-600/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Why Choose Astronyvia
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Track Record</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our success metrics speak for themselves. We've consistently delivered exceptional results 
              that drive real business value for our clients.
            </p>
          </div>
          
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {stats.map((stat, index) => (
               <div key={index} className="text-center group">
                 <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-blue-600/50 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                   <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                     <img 
                       src={stat.icon} 
                       alt={stat.label}
                       className="w-16 h-16 mx-auto object-contain"
                     />
                   </div>
                   <div className="text-4xl font-bold text-white mb-3">{stat.number}</div>
                   <div className="text-blue-300 font-semibold mb-2">{stat.label}</div>
                   <div className="text-gray-300 text-sm flex-grow">{stat.description}</div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Enhanced Services Preview Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
                         {/* Services Counter Badge */}
             <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-600/20 border border-blue-600/30 mb-8">
               <span className="text-blue-300 text-sm font-medium">
                 {services.length} Professional Services Available
               </span>
             </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Comprehensive Services</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
              From custom software development to cutting-edge AI solutions, we provide comprehensive technology services 
              that drive business growth and digital transformation. Our expertise spans the entire technology spectrum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Preview Cards */}
            {services.map((service, index) => (
              <HomeServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-20">
            <Link
              to="/services"
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
            >
              Explore All Services
              <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* New Process Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Our Process
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Deliver Success</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our proven methodology ensures every project is delivered on time, within budget, and exceeds expectations. 
              We follow industry best practices to guarantee quality and success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-600/30 transition-all duration-500 hover:-translate-y-2 relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                  <h3 className="text-white text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Enhanced Tech Icons Scrolling Section */}
      <section className="py-20 bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Technologies
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technologies We <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Master</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Cutting-edge tools, frameworks, and platforms that power our innovative solutions and ensure optimal performance.
            </p>
          </div>

          {/* Single Row - Left to Right with Continuous Scrolling */}
          <div className="relative">
            <div className="flex animate-scroll-left">
              {[...techIcons, ...techIcons].map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 flex items-center justify-center w-28 h-28 hover:scale-110 transition-all duration-300 relative group/icon"
                  title={tech.name}
                >
                  {tech.type === "image" ? (
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-20 h-20 hover:scale-125 transition-all duration-300 cursor-pointer object-contain"
                    />
                  ) : tech.type === "svg" ? (
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-20 h-20 hover:scale-125 transition-all duration-300 cursor-pointer object-contain"
                      style={{ filter: `drop-shadow(0 0 8px ${tech.color}40)` }}
                    />
                  ) : (
                    <div 
                      className="w-20 h-20 hover:scale-125 transition-all duration-300 cursor-pointer flex items-center justify-center rounded-xl border-2 border-current"
                      style={{ 
                        color: tech.color,
                        borderColor: tech.color,
                        backgroundColor: `${tech.color}10`
                      }}
                    >
                      <span className="text-sm font-bold text-center leading-tight px-2">
                        {tech.icon}
                      </span>
                    </div>
                  )}
                  
                  {/* Enhanced Tooltip */}
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-4 py-3 rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 border border-gray-700 shadow-2xl">
                    {tech.name}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 border-l border-t border-gray-700 rotate-45"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600/10 via-blue-600/10 to-blue-600/10 border-y border-blue-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm p-16 rounded-3xl border border-blue-600/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Digital Journey</span>?
            </h2>
            <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how Astronyvia can help transform your business with cutting-edge technology solutions. 
              Our team is ready to turn your vision into reality.
            </p>
          
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-600 to-blue-500 text-white px-12 py-6 rounded-2xl font-semibold text-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-600/25 flex items-center justify-center"
              >
                🚀 Get Free Consultation
                <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/portfolio"
                className="group border-2 border-blue-600/50 text-blue-300 px-12 py-6 rounded-2xl font-semibold text-xl hover:bg-blue-600/10 hover:border-blue-500 transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
              >
                📱 View Our Work
                <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 