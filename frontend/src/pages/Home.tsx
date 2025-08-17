import { Link } from 'react-router-dom'
import HomeServiceCard from '../components/HomeServiceCard'

const Home = () => {
  const services = [
    {
      icon: "💻",
      title: "Custom Software",
      description: "Tailored applications for your business",
      features: ["Enterprise Solutions", "Custom APIs", "Scalable Architecture"]
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Secure migration & management",
      features: ["AWS Migration", "Cost Optimization", "Security Compliance"]
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Comprehensive protection",
      features: ["Threat Detection", "Incident Response", "Compliance Audits"]
    }
  ]

  const techIcons = [
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "Node.js", icon: "🟢", color: "#339933" },
    { name: "TypeScript", icon: "🔷", color: "#3178C6" },
    { name: "Python", icon: "🐍", color: "#3776AB" },
    { name: "AWS", icon: "☁️", color: "#FF9900" },
    { name: "Docker", icon: "🐳", color: "#2496ED" },
    { name: "Kubernetes", icon: "⚓", color: "#326CE5" },
    { name: "MongoDB", icon: "🍃", color: "#47A248" },
    { name: "PostgreSQL", icon: "🐘", color: "#336791" },
    { name: "Redis", icon: "🔴", color: "#DC382D" },
    { name: "Vue.js", icon: "💚", color: "#4FC08D" },
    { name: "Angular", icon: "🅰️", color: "#DD0031" },
    { name: "Laravel", icon: "🔥", color: "#FF2D20" },
    { name: "Django", icon: "🐍", color: "#092E20" },
    { name: "Flutter", icon: "🦋", color: "#02569B" },
    { name: "React Native", icon: "📱", color: "#61DAFB" },
    { name: "Firebase", icon: "🔥", color: "#FFCA28" },
    { name: "GraphQL", icon: "🟣", color: "#E10098" },
    { name: "Elasticsearch", icon: "🔍", color: "#FED10A" },
    { name: "Terraform", icon: "🏗️", color: "#7B42BC" },
    { name: "Jenkins", icon: "🤖", color: "#D24939" },
    { name: "GitHub", icon: "🐙", color: "#181717" },
    { name: "Azure", icon: "☁️", color: "#0089D6" },
    { name: "GCP", icon: "☁️", color: "#4285F4" },
    { name: "Sass", icon: "💅", color: "#CC6699" },
    { name: "Tailwind", icon: "🎨", color: "#06B6D4" },
    { name: "Webpack", icon: "📦", color: "#8DD6F9" },
    { name: "Vite", icon: "⚡", color: "#646CFF" },
    { name: "Jest", icon: "🃏", color: "#C21325" },
    { name: "Cypress", icon: "🌲", color: "#17202C" }
  ]

  const stats = [
    { number: "150+", label: "Projects Completed", icon: "🚀" },
    { number: "50+", label: "Happy Clients", icon: "😊" },
    { number: "5+", label: "Years Experience", icon: "⭐" },
    { number: "24/7", label: "Support Available", icon: "🔄" }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Astronyvia transformed our digital infrastructure completely. Their cloud migration expertise saved us 40% in costs.",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "Founder, StartupXYZ",
      content: "The custom software solution they built for us exceeded all expectations. Highly recommend their services!",
      avatar: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "IT Director, GlobalBank",
      content: "Outstanding cybersecurity implementation. Our systems are now more secure than ever before.",
      avatar: "👩‍🔒"
    }
  ]

  const teamHighlights = [
    {
      name: "Expert Developers",
      description: "Senior engineers with 8+ years experience",
      icon: "👨‍💻"
    },
    {
      name: "Cloud Architects",
      description: "AWS, Azure, and GCP certified professionals",
      icon: "☁️"
    },
    {
      name: "Security Specialists",
      description: "Cybersecurity experts with industry certifications",
      icon: "🔒"
    },
    {
      name: "DevOps Engineers",
      description: "CI/CD and automation specialists",
      icon: "⚙️"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-blue-300 text-sm font-medium">Available for Projects</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                FUTURISTIC
              </span>
              <br />
              <span className="text-white">
                Your Partner in IT & Software Solutions
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Astronyvia delivers innovative technology solutions that empower businesses to thrive in the digital era.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                🚀 Start Your Project
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                📱 View Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/5 rounded-full blur-lg"></div>
      </section>

      {/* Company Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Astronyvia</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Proven track record of delivering exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Preview Cards */}
            {services.map((service, index) => (
              <HomeServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              View All Services
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Highlights Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Expert Team</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Skilled professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamHighlights.map((member, index) => (
              <div key={index} className="text-center p-6 bg-gray-700/50 rounded-xl border border-gray-600/50 hover:border-blue-500/30 transition-all duration-300">
                <div className="text-4xl mb-4">{member.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Real feedback from satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Icons Scrolling Section */}
      <section className="py-16 bg-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Technologies We <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Master</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Cutting-edge tools and frameworks for modern development
            </p>
          </div>

          {/* First Row - Left to Right */}
          <div className="mb-8">
            <div className="flex animate-scroll-left">
              {[...techIcons, ...techIcons].map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 flex items-center justify-center w-24 h-24 hover:scale-110 transition-all duration-300"
                >
                  <span 
                    className="text-6xl hover:scale-125 transition-all duration-300 cursor-pointer"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div>
            <div className="flex animate-scroll-right">
              {[...techIcons, ...techIcons].map((tech, index) => (
                <div
                  key={`reverse-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center w-24 h-24 hover:scale-110 transition-all duration-300"
                >
                  <span 
                    className="text-6xl hover:scale-125 transition-all duration-300 cursor-pointer"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Digital Journey</span>?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how Astronyvia can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              🚀 Get Free Consultation
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              📱 View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 