import { Link } from 'react-router-dom'

const About = () => {
  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in technology, always seeking new and better ways to solve complex problems."
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "We believe in building long-term relationships with our clients, working together as a team to achieve shared success."
    },
    {
      icon: "💎",
      title: "Quality",
      description: "Every project we deliver meets the highest standards of excellence, ensuring reliability and performance that exceeds expectations."
    },
    {
      icon: "🔮",
      title: "Future-Focused",
      description: "We stay ahead of technology trends, preparing our clients for tomorrow's challenges and opportunities."
    }
  ]

  const expertise = [
    {
      icon: "💻",
      title: "Custom Software Development",
      description: "Tailored applications designed specifically for your business needs and workflows.",
      technologies: ["React", "Node.js", "Python", "TypeScript"]
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      technologies: ["AWS", "Azure", "GCP", "Docker"]
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Comprehensive protection for your digital assets and compliance requirements.",
      technologies: ["Security Audits", "Threat Detection", "Compliance", "Training"]
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      technologies: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description: "Intelligent solutions to automate and optimize your business processes.",
      technologies: ["Python", "TensorFlow", "NLP", "Computer Vision"]
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Transform your data into actionable business insights and intelligence.",
      technologies: ["Big Data", "BI Tools", "Predictive Analytics", "Dashboards"]
    }
  ]

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Astronyvia was established with a vision to transform businesses through technology."
    },
    {
      year: "2021",
      title: "First Major Project",
      description: "Successfully delivered our first enterprise-level software solution."
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Grew our team to include experts in various technology domains."
    },
    {
      year: "2023",
      title: "Client Growth",
      description: "Reached 50+ satisfied clients across different industries."
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Established our innovation center for cutting-edge technology research."
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanding our services to serve clients worldwide."
    }
  ]



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            About Us
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Astronyvia</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are a forward-thinking technology company dedicated to transforming businesses through innovative digital solutions. 
            Our mission is to empower organizations with cutting-edge technology that drives growth, efficiency, and competitive advantage.
          </p>
        </div>

        {/* Company Story Section */}
        <div className="mb-20">
          <div className="bg-gray-900/50 backdrop-blur-sm p-12 rounded-2xl border border-gray-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Story</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Founded in 2020, Astronyvia emerged from a simple yet powerful vision: to make world-class technology accessible to businesses of all sizes. 
                  We recognized that many organizations were struggling with outdated systems, inefficient processes, and missed opportunities due to technology limitations.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Today, we're proud to have helped over 50+ businesses transform their operations, streamline their processes, and achieve remarkable growth through our innovative solutions. 
                  Our team of passionate technologists, designers, and strategists work together to deliver exceptional results that exceed expectations.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="text-gray-400 text-sm">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">150+</div>
                    <div className="text-gray-400 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">5+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white text-4xl">🌟</span>
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-3">Why Choose Astronyvia?</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      We combine technical expertise with business acumen to deliver solutions that not only work flawlessly but also drive real business value. 
                      Our commitment to quality, innovation, and client success sets us apart in the technology industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-10 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8">
              <span className="text-white text-3xl">🎯</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and competitive advantage. 
              We believe that every organization deserves access to world-class technology that can transform their operations and unlock their full potential.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-10 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8">
              <span className="text-white text-3xl">🔮</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the leading technology partner for businesses worldwide, known for our innovative solutions, 
              exceptional service, and commitment to helping organizations thrive in the digital future. 
              We envision a world where technology is a catalyst for human progress and business success.
            </p>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Areas of Expertise</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We specialize in delivering comprehensive technology solutions across multiple domains, 
              ensuring your business has access to the expertise it needs to succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{area.icon}</span>
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">{area.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              These fundamental principles guide everything we do, from how we approach projects to how we build relationships with our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-gray-800/50 transition-all duration-500 transform hover:-translate-y-2 border border-gray-700/50 hover:border-blue-500/30 group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-white text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Milestones */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              From our humble beginnings to becoming a trusted technology partner, 
              here's how we've grown and evolved over the years.
            </p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                      <h3 className="text-white text-lg font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-300 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-16 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Work with <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Astronyvia</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Let's discuss how our team of experts can help transform your business with cutting-edge technology solutions. 
              We're here to turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
              >
                🚀 Start Your Project
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-blue-500/50 text-blue-300 px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 backdrop-blur-sm"
              >
                📱 View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 