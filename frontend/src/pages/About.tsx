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

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Astronyvia</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a forward-thinking technology company dedicated to transforming businesses through innovative digital solutions
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and competitive advantage. 
              We believe that every organization deserves access to world-class technology that can transform their operations and unlock their full potential.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">🔮</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To be the leading technology partner for businesses worldwide, known for our innovative solutions, 
              exceptional service, and commitment to helping organizations thrive in the digital future. 
              We envision a world where technology is a catalyst for human progress and business success.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-blue-500/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-white text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Meet Our Team
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team of experienced professionals brings together expertise in software development, 
            cloud architecture, cybersecurity, and digital innovation. We're passionate about technology 
            and committed to delivering exceptional results for our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">👨‍💻</span>
              </div>
              <h3 className="text-white font-semibold">Development Team</h3>
              <p className="text-gray-400 text-sm">Expert developers and engineers</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-white font-semibold">Design Team</h3>
              <p className="text-gray-400 text-sm">Creative designers and UX experts</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-white font-semibold">Strategy Team</h3>
              <p className="text-gray-400 text-sm">Business analysts and consultants</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 