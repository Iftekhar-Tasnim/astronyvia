interface HomeServiceCardProps {
  icon: string
  title: string
  description: string
  features: string[]
  index?: number
}

const HomeServiceCard = ({ icon, title, description, features, index = 0 }: HomeServiceCardProps) => {
  return (
    <div 
      className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer overflow-hidden animate-fade-in-up"
      style={{
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Icon */}
      <div className="relative z-10 mb-5">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110">
          <span className="text-white text-2xl">{icon}</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-white font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        {/* Features */}
        <div className="space-y-2">
          {features.slice(0, 2).map((feature, idx) => (
            <div key={idx} className="flex items-center text-gray-400 text-sm">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
          
          {features.length > 2 && (
            <div className="pt-2">
              <span className="text-blue-400 text-sm font-medium">
                +{features.length - 2} more features
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Hover effect line */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-500"></div>
      
      {/* Corner accent */}
      <div className="absolute top-3 right-3 w-2 h-2 bg-blue-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    </div>
  )
}

export default HomeServiceCard 