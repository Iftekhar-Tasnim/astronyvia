import { useState } from 'react'
import PortfolioCard from '../components/PortfolioCard'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🌟' },
    { id: 'web', name: 'Web Development', icon: '🌐' },
    { id: 'mobile', name: 'Mobile Apps', icon: '📱' },
    { id: 'cloud', name: 'Cloud Solutions', icon: '☁️' },
    { id: 'security', name: 'Cybersecurity', icon: '🔒' },
    { id: '3d', name: '3D & Gaming', icon: '🎮' }
  ]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      categoryName: "Web Development",
      image: "🛒",
      description: "Modern e-commerce solution with advanced features and seamless user experience.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      client: "TechRetail Inc.",
      duration: "4 months",
      status: "completed",
      features: ["Payment Integration", "Inventory Management", "Analytics Dashboard", "Mobile Responsive"]
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      categoryName: "Mobile Apps",
      image: "🏦",
      description: "Secure and intuitive banking application for financial institutions.",
      technologies: ["React Native", "Firebase", "Biometric Auth"],
      client: "SecureBank",
      duration: "6 months",
      status: "completed",
      features: ["Biometric Login", "Real-time Transactions", "Investment Portfolio", "Security Alerts"]
    },
    {
      id: 3,
      title: "Cloud Migration Solution",
      category: "cloud",
      categoryName: "Cloud Solutions",
      image: "☁️",
      description: "Comprehensive cloud migration strategy for enterprise clients.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      client: "Enterprise Corp",
      duration: "8 months",
      status: "in-progress",
      features: ["Multi-cloud Strategy", "Cost Optimization", "Security Compliance", "Disaster Recovery"]
    },
    {
      id: 4,
      title: "Cybersecurity Dashboard",
      category: "security",
      categoryName: "Cybersecurity",
      image: "🔒",
      description: "Real-time security monitoring and threat detection system.",
      technologies: ["Python", "React", "Machine Learning"],
      client: "CyberDefense Ltd",
      duration: "5 months",
      status: "completed",
      features: ["Threat Detection", "Incident Response", "Compliance Reporting", "Real-time Alerts"]
    },
    {
      id: 5,
      title: "3D Game Environment",
      category: "3d",
      categoryName: "3D & Gaming",
      image: "🎮",
      description: "Immersive 3D environment for next-generation gaming experiences.",
      technologies: ["Unity", "Blender", "C#", "Substance Painter"],
      client: "GameStudio Pro",
      duration: "7 months",
      status: "completed",
      features: ["Procedural Generation", "Dynamic Lighting", "Physics Engine", "Multiplayer Support"]
    },
    {
      id: 6,
      title: "Custom CRM System",
      category: "web",
      categoryName: "Web Development",
      image: "💼",
      description: "Tailored customer relationship management solution for business growth.",
      technologies: ["Vue.js", "Laravel", "PostgreSQL", "Redis"],
      client: "Business Solutions",
      duration: "3 months",
      status: "completed",
      features: ["Lead Management", "Sales Pipeline", "Customer Analytics", "Integration APIs"]
    },
    {
      id: 7,
      title: "AI-Powered Analytics",
      category: "web",
      categoryName: "Web Development",
      image: "📊",
      description: "Intelligent data analytics platform with machine learning capabilities.",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      client: "DataInsight Corp",
      duration: "9 months",
      status: "in-progress",
      features: ["Predictive Analytics", "Data Visualization", "Automated Insights", "Real-time Processing"]
    },
    {
      id: 8,
      title: "IoT Smart Home Hub",
      category: "mobile",
      categoryName: "Mobile Apps",
      image: "🏠",
      description: "Centralized control system for smart home devices and automation.",
      technologies: ["Flutter", "Node.js", "MQTT", "WebSocket"],
      client: "SmartHome Tech",
      duration: "5 months",
      status: "completed",
      features: ["Device Control", "Automation Rules", "Energy Monitoring", "Security Cameras"]
    }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their technology goals
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">🔍</span>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or category filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">{projects.length}</div>
                <div className="text-gray-400">Total Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">{projects.filter(p => p.status === 'completed').length}</div>
                <div className="text-gray-400">Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">{projects.filter(p => p.status === 'in-progress').length}</div>
                <div className="text-gray-400">In Progress</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">{categories.length - 1}</div>
                <div className="text-gray-400">Categories</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Our team is ready to bring your vision to life.
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

export default Portfolio 