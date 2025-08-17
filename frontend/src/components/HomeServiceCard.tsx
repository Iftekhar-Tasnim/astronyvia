interface HomeServiceCardProps {
  icon: string
  title: string
  description: string
  features: string[]
}

const HomeServiceCard = ({ icon, title, description, features }: HomeServiceCardProps) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-all duration-500 transform hover:-translate-y-2 border border-gray-600 hover:border-blue-500/50 group cursor-pointer relative overflow-hidden">
      {/* Service Icon Container */}
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-125 group-hover:w-16 group-hover:h-16 relative overflow-hidden">
        <span className="text-white text-xl transition-all duration-500 group-hover:text-2xl z-10">{icon}</span>
        
        {/* Partial Dark Overlay from Top-Right */}
        <div className="absolute top-0 right-0 w-0 h-0 bg-black/50 rounded-bl-full transition-all duration-500 ease-in-out 
        group-hover:w-24 group-hover:h-24 group-hover:rounded-bl-2xl"></div>
      </div>

      {/* Service Content */}
      <div className="transition-all duration-500 group-hover:pt-2">
        <h3 className="text-white font-semibold text-lg mb-2 transition-all duration-500 group-hover:translate-y-2 group-hover:text-blue-400">{title}</h3>
        <p className="text-gray-300 transition-all duration-500 group-hover:translate-y-2">{description}</p>
        
        {/* Hidden Details on Hover */}
        <div className="mt-4 transition-all duration-500 group-hover:opacity-0 group-hover:h-0 group-hover:mt-0 overflow-hidden">
          {features.map((feature, index) => (
            <p key={index} className="text-gray-400 text-sm">• {feature}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeServiceCard 