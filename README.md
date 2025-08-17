# Astronyvia - Full-Stack IT Solutions Platform

A modern, scalable full-stack application built with React + TypeScript frontend and NestJS backend, designed to showcase IT and software development services.

## 🏗️ Project Structure

```
astronyvia/
├── 📁 frontend/                 # React + TypeScript Frontend Application
│   ├── 📁 public/              # Static assets and public files
│   ├── 📁 src/                 # Source code
│   │   ├── 📁 assets/         # Images, icons, and static resources
│   │   ├── 📁 components/     # Reusable UI components
│   │   │   └── HomeServiceCard.tsx
│   │   ├── 📁 pages/          # Page components and routing
│   │   │   ├── Home.tsx       # Landing page
│   │   │   ├── About.tsx      # About page
│   │   │   ├── Services.tsx   # Services page
│   │   │   ├── Portfolio.tsx  # Portfolio page
│   │   │   └── Contact.tsx    # Contact page
│   │   ├── App.tsx            # Main application component
│   │   ├── main.tsx           # Application entry point
│   │   ├── index.css          # Global styles and Tailwind CSS
│   │   └── vite-env.d.ts      # Vite environment types
│   ├── 📁 dist/               # Build output directory
│   ├── 📁 node_modules/       # Frontend dependencies
│   ├── .gitignore             # Git ignore rules for frontend
│   ├── eslint.config.js       # ESLint configuration
│   ├── index.html             # HTML template
│   ├── package.json           # Frontend dependencies and scripts
│   ├── postcss.config.js      # PostCSS configuration
│   ├── tailwind.config.js     # Tailwind CSS configuration
│   ├── tsconfig.json          # TypeScript configuration
│   ├── tsconfig.app.json      # TypeScript app-specific config
│   ├── tsconfig.node.json     # TypeScript Node.js config
│   └── vite.config.ts         # Vite build tool configuration
│
├── 📁 backend/                 # NestJS Backend Application
│   ├── 📁 src/                # Source code
│   │   ├── 📁 controllers/    # API controllers
│   │   │   └── app.controller.ts
│   │   ├── 📁 services/       # Business logic services
│   │   │   └── app.service.ts
│   │   ├── 📁 modules/        # Application modules
│   │   │   └── app.module.ts
│   │   ├── 📁 entities/       # Database entities/models
│   │   ├── 📁 dto/           # Data transfer objects
│   │   ├── 📁 middleware/     # Custom middleware
│   │   ├── 📁 guards/         # Authentication guards
│   │   ├── 📁 interceptors/   # Request/response interceptors
│   │   ├── 📁 pipes/          # Validation pipes
│   │   ├── 📁 decorators/     # Custom decorators
│   │   ├── 📁 config/         # Configuration files
│   │   ├── 📁 utils/          # Utility functions
│   │   ├── app.controller.spec.ts  # Controller tests
│   │   └── main.ts            # Application entry point
│   ├── 📁 test/               # Test files
│   │   ├── 📁 e2e/           # End-to-end tests
│   │   └── 📁 unit/          # Unit tests
│   ├── 📁 node_modules/       # Backend dependencies
│   ├── .gitignore             # Git ignore rules for backend
│   ├── .prettierrc            # Prettier code formatting config
│   ├── eslint.config.mjs      # ESLint configuration
│   ├── nest-cli.json          # NestJS CLI configuration
│   ├── package.json            # Backend dependencies and scripts
│   ├── tsconfig.json          # TypeScript configuration
│   └── tsconfig.build.json    # TypeScript build configuration
│
├── 📁 .git/                    # Git repository
├── LICENSE                     # Project license
└── README.md                   # This file
```

## 🚀 Technologies Used

### Frontend
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **PostCSS** - CSS processing and optimization

### Backend
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe Node.js development
- **Express** - Web application framework
- **Jest** - Testing framework
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatter

## 🛠️ Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

**Available Scripts:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Backend Setup
```bash
cd backend
npm install
npm run start:dev
```

**Available Scripts:**
- `npm run start:dev` - Start development server with hot reload
- `npm run start` - Start production server
- `npm run build` - Build for production
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run lint` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier

## 🌐 Application Features

### Frontend Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern UI/UX** - Clean, professional interface
- **Component Architecture** - Reusable, maintainable components
- **Routing** - Client-side navigation between pages
- **Performance Optimized** - Fast loading with Vite

### Backend Features
- **RESTful API** - Clean, REST-compliant endpoints
- **Modular Architecture** - Scalable NestJS structure
- **Type Safety** - Full TypeScript support
- **Testing** - Comprehensive test coverage
- **Code Quality** - ESLint and Prettier integration

## 📱 Pages & Components

### Core Pages
- **Home** - Landing page with hero section, services preview, and testimonials
- **About** - Company information and team details
- **Services** - Comprehensive service offerings
- **Portfolio** - Project showcase and case studies
- **Contact** - Contact form and information

### Key Components
- **HomeServiceCard** - Service preview cards
- **Navigation** - Header and footer components
- **Service Cards** - Individual service displays
- **Testimonial Cards** - Client feedback display
- **Tech Icons** - Animated technology showcase

## 🔧 Configuration Files

### Frontend Configuration
- **Vite** - Build tool configuration
- **Tailwind** - CSS framework customization
- **TypeScript** - Compiler options and type checking
- **ESLint** - Code quality rules
- **PostCSS** - CSS processing pipeline

### Backend Configuration
- **NestJS** - Framework configuration
- **TypeScript** - Compiler and build settings
- **ESLint** - Code quality and formatting rules
- **Prettier** - Code formatting standards
- **Jest** - Testing framework configuration

## 🧪 Testing Strategy

### Frontend Testing
- Component testing with React Testing Library
- Unit tests for utility functions
- Integration tests for page flows

### Backend Testing
- Unit tests for services and controllers
- Integration tests for API endpoints
- End-to-end tests for complete workflows
- Test coverage reporting

## 🚀 Deployment

### Frontend Deployment
- Build optimization with Vite
- Static file hosting (Netlify, Vercel, AWS S3)
- CDN integration for performance

### Backend Deployment
- Node.js production builds
- Container deployment (Docker)
- Cloud hosting (AWS, Azure, GCP)
- Environment configuration management

## 📊 Performance & Optimization

### Frontend
- Code splitting and lazy loading
- Image optimization
- CSS purging with Tailwind
- Bundle size optimization

### Backend
- API response caching
- Database query optimization
- Rate limiting and security
- Monitoring and logging

## 🔒 Security Features

- Input validation and sanitization
- CORS configuration
- Rate limiting
- Authentication and authorization
- Secure headers configuration

## 📈 Monitoring & Logging

- Application performance monitoring
- Error tracking and reporting
- Request/response logging
- Health check endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the terms specified in the LICENSE file.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ by the Astronyvia Team**
