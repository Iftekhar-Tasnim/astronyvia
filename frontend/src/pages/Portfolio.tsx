import { useState } from 'react'
import PortfolioCard from '../components/PortfolioCard'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🌟' },
    { id: 'web', name: 'Web Development', icon: '🌐' },
    { id: 'wellness', name: 'Wellness Platforms', icon: '🧘' },
    { id: 'education', name: 'Educational Tools', icon: '🎓' },
    { id: 'entertainment', name: 'Entertainment', icon: '🎬' },
    { id: 'social', name: 'Social Impact', icon: '😊' }
  ]

  const projects = [
    {
      id: 1,
      title: "ChatterPoint",
      category: "web",
      categoryName: "Web Development",
      image: "💬",
      description: "Real-time chat application with modern UI/UX design and seamless communication features.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Real-time Chat","+1"],
      client: "ChatterPoint",
      duration: "3 months",
      status: "completed",
      features: ["Real-time Messaging", "User Authentication", "Responsive Design", "Modern UI/UX"],
      liveUrl: "https://chatterpoint.web.app/"
    },
    {
      id: 2,
      title: "ServiceTrek",
      category: "web",
      categoryName: "Web Development",
      image: "🚀",
      description: "Service management platform for businesses to streamline operations and customer service.",
      technologies: ["React", "Firebase", "Material-UI", "Service Management"],
      client: "ServiceTrek",
      duration: "4 months",
      status: "completed",
      features: ["Service Tracking", "Customer Management", "Analytics Dashboard", "Mobile Responsive"],
      liveUrl: "https://servicetrek-ff5f1.web.app/"
    },
    {
      id: 3,
      title: "CineVerse",
      category: "entertainment",
      categoryName: "Entertainment",
      image: "🎬",
      description: "Movie streaming and entertainment platform with comprehensive content library.",
      technologies: ["React", "Firebase", "Movie API", "Streaming Platform"],
      client: "CineVerse",
      duration: "5 months",
      status: "completed",
      features: ["Movie Streaming", "Content Library", "User Reviews", "Search & Filter"],
      liveUrl: "https://cineverse-dffdc.web.app/"
    },
    {
      id: 4,
      title: "UIXpertise",
      category: "web",
      categoryName: "Web Development",
      image: "🎨",
      description: "Professional UI/UX design agency website showcasing creative design solutions.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Design Portfolio & Portfolio"],
      client: "UIXpertise",
      duration: "2 months",
      status: "completed",
      features: ["Portfolio Showcase", "Service Pages", "Contact Forms", "Modern Design"],
      liveUrl: "https://uixpertise.com/"
    },
    {
      id: 5,
      title: "Lyvaa",
      category: "wellness",
      categoryName: "Wellness Platforms",
      image: "🌿",
      description: "Wellness and lifestyle platform promoting healthy living and personal development.",
      technologies: ["React", "Node.js", "Wellness Platform", "Content Management"],
      client: "Lyvaa",
      duration: "6 months",
      status: "completed",
      features: ["Wellness Content", "User Profiles", "Progress Tracking", "Community Features"],
      liveUrl: "https://lyvaa.com/"
    },
    {
      id: 6,
      title: "Tusqa Wellbeing",
      category: "wellness",
      categoryName: "Wellness Platforms",
      image: "🧘",
      description: "Holistic wellbeing platform focusing on mental health and wellness solutions.",
      technologies: ["React", "Wellness Platform", "Mental Health", "User Experience"],
      client: "Tusqa Wellbeing",
      duration: "4 months",
      status: "completed",
      features: ["Wellness Programs", "Mental Health Support", "User Dashboard", "Resource Library"],
      liveUrl: "https://tusqawellbeing.com/"
    },
    {
      id: 7,
      title: "Being Smile",
      category: "social",
      categoryName: "Social Impact",
      image: "😊",
      description: "Charity and social impact website promoting positive change and community support.",
      technologies: ["React", "Charity Platform", "Social Impact", "Community Building"],
      client: "Being Smile",
      duration: "3 months",
      status: "completed",
      features: ["Charity Donations", "Impact Stories", "Community Events", "Volunteer Portal"],
      liveUrl: "https://beingsmile.org/"
    },
    {
      id: 8,
      title: "NetSpeed Analyzer",
      category: "education",
      categoryName: "Educational Tools",
      image: "📊",
      description: "Network speed testing and analysis tool for performance monitoring.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Network Testing,","Internet Speed Test"],
      client: "NetSpeed Analyzer",
      duration: "2 months",
      status: "completed",
      features: ["Speed Testing", "Performance Metrics", "Data Visualization", "Network Analysis"],
      liveUrl: "https://siamahamed57.github.io/NetSpeedAnalyzer/"
    },
    {
      id: 9,
      title: "Unies",
      category: "education",
      categoryName: "Educational Tools",
      image: "🎓",
      description: "Educational platform connecting students and institutions for better learning experiences.",
      technologies: ["React", "Education Platform", "Student Portal", "Institution Management"],
      client: "Unies",
      duration: "7 months",
      status: "completed",
      features: ["Student Portal", "Course Management", "Institution Directory", "Learning Resources"],
      liveUrl: "https://unies.com.bd/"
    }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  // Ensure specific projects are displayed last
  const deprioritizedTitles = new Set(["ChatterPoint", "ServiceTrek", "CineVerse"])
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const aIsDeprioritized = deprioritizedTitles.has(a.title)
    const bIsDeprioritized = deprioritizedTitles.has(b.title)
    if (aIsDeprioritized === bIsDeprioritized) return 0
    return aIsDeprioritized ? 1 : -1
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
          {sortedProjects.map((project) => (
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