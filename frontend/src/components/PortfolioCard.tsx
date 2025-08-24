interface PortfolioCardProps {
  project: {
    id: number
    title: string
    category: string
    categoryName: string
    image: string
    description: string
    technologies: string[]
    client: string
    duration: string
    status: string
    features: string[]
    liveUrl?: string
  }
}

const PortfolioCard = ({ project }: PortfolioCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
      case 'in-progress': return 'bg-amber-500/10 text-amber-400 border-amber-500/20'
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'in-progress': return 'In Progress'
      default: return 'Planning'
    }
  }

  return (
    <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-blue-500/30 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/10">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-700 ease-out"></div>
      
      {/* Content Container */}
      <div className="relative p-6 z-10">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
          {/* Category Badge */}
          <div className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-400 text-xs font-medium tracking-wide uppercase">
              {project.categoryName}
            </span>
          </div>
          
          {/* Status Badge */}
          <div className={`px-3 py-1.5 rounded-full border text-xs font-medium ${getStatusColor(project.status)}`}>
            {getStatusText(project.status)}
          </div>
        </div>

        {/* Project Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
          <span className="text-2xl">{project.image}</span>
        </div>

        {/* Title and Description */}
        <div className="mb-6">
          <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1.5 bg-gray-800/60 text-gray-300 text-xs rounded-lg border border-gray-700/50 group-hover:border-gray-600/50 group-hover:bg-gray-800/80 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2.5 py-1.5 bg-gray-800/60 text-gray-500 text-xs rounded-lg border border-gray-700/50">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="flex items-center justify-between mb-6 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
            {project.client}
          </span>
          <span className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
            {project.duration}
          </span>
        </div>

        {/* Key Features - Always Visible */}
        <div className="mb-6">
          <h4 className="text-gray-400 text-xs font-medium mb-3 uppercase tracking-wider">Key Features</h4>
          <div className="space-y-2">
            {project.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-300 text-xs">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span className="leading-relaxed">{feature}</span>
              </div>
            ))}
            {project.features.length > 3 && (
              <div className="text-gray-500 text-xs italic">
                +{project.features.length - 3} more features
              </div>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          {project.liveUrl ? (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] inline-block text-center"
            >
              View Live Project
            </a>
          ) : (
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
              View Project
            </button>
          )}
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  )
}

export default PortfolioCard 