# 🚀 Frsk Development Portfolio

A modern, responsive portfolio website built with React and TypeScript, showcasing full-stack development skills with a professional split-screen design and interactive animations.

![Portfolio Preview](./public/assets/images/portfolio-preview.png)

## 🎯 Live Demo

Visit the live portfolio: [https://your-portfolio-url.com](https://your-portfolio-url.com)

## ✨ Features

- **Split-Screen Hero Section** - Modern agency-style layout with animated 𐕣 brand symbol
- **Interactive Animations** - Particle systems, floating elements, and smooth transitions
- **Responsive Design** - Optimized for all devices and screen sizes
- **TypeScript Integration** - Full type safety and better development experience
- **CSS Modules** - Scoped styling to prevent conflicts
- **Modern Tech Stack** - React 18, TypeScript, Lucide Icons, React Icons
- **Performance Optimized** - Efficient animations and optimized rendering

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, CSS Modules
- **Icons**: Lucide React, React Icons (for tech stack badges)
- **Styling**: CSS Custom Properties, Flexbox, Grid
- **Animations**: CSS Keyframes, Transforms, Transitions
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📁 Project Structure

```
frsk-portfolio/
├── public/                          # Static assets and HTML template
│   ├── assets/
│   │   ├── images/                  # Project screenshots and images
│   │   └── icons/                   # Static icon files
│   ├── index.html                   # Main HTML template
│   └── favicon.ico                  # Website favicon
├── src/
│   ├── components/                  # React components
│   │   ├── common/                  # Reusable components
│   │   │   ├── Button/              # Custom button component
│   │   │   │   ├── Button.tsx       # Button logic and props
│   │   │   │   ├── Button.module.css # Button styling
│   │   │   │   └── index.ts         # Clean exports
│   │   │   ├── Layout/              # Main layout wrapper
│   │   │   │   ├── Layout.tsx       # Layout logic and navigation integration
│   │   │   │   ├── Layout.module.css # Layout styling
│   │   │   │   └── index.ts         # Clean exports
│   │   │   └── Navigation/          # Fixed navigation component
│   │   │       ├── Navigation.tsx   # Navigation logic and active states
│   │   │       ├── Navigation.module.css # Navigation styling
│   │   │       └── index.ts         # Clean exports
│   │   └── sections/                # Page sections
│   │       ├── Hero/                # Landing section
│   │       │   ├── Hero.tsx         # Split-screen hero with animations
│   │       │   ├── Hero.module.css  # Hero styling and animations
│   │       │   └── index.ts         # Clean exports
│   │       ├── About/               # About me section
│   │       │   ├── About.tsx        # Skills and tech stack display
│   │       │   ├── About.module.css # About section styling
│   │       │   └── index.ts         # Clean exports
│   │       ├── Portfolio/           # Projects showcase
│   │       │   ├── Portfolio.tsx    # Project cards and filtering
│   │       │   ├── Portfolio.module.css # Portfolio styling
│   │       │   └── index.ts         # Clean exports
│   │       ├── Resume/              # Experience and education
│   │       │   ├── Resume.tsx       # Timeline and certifications
│   │       │   ├── Resume.module.css # Resume styling
│   │       │   └── index.ts         # Clean exports
│   │       └── Contact/             # Contact form and info
│   │           ├── Contact.tsx      # Contact form and social links
│   │           ├── Contact.module.css # Contact styling
│   │           └── index.ts         # Clean exports
│   ├── data/                        # Static data and content
│   │   ├── projects.ts              # Project information and links
│   │   ├── skills.ts                # Technical skills and descriptions
│   │   ├── navigation.ts            # Navigation menu items
│   │   └── contact.ts               # Contact information and social links
│   ├── hooks/                       # Custom React hooks
│   │   ├── useScrollSpy.ts          # Track active section on scroll
│   │   ├── useSmoothScroll.ts       # Smooth scrolling functionality
│   │   └── useActiveSection.ts      # Manage active navigation states
│   ├── styles/                      # Global styles and variables
│   │   ├── global.css               # Global styles and resets
│   │   └── variables.css            # CSS custom properties and design tokens
│   ├── types/                       # TypeScript definitions
│   │   └── index.ts                 # Interface definitions for props and data
│   ├── App.tsx                      # Main app component
│   ├── App.module.css               # App-level styling
│   └── index.tsx                    # React app entry point
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: `#a83a44` (Red brand color)
- **Background**: `#121212` (Dark background)
- **Background Light**: `#1a1a1a` (Secondary background)
- **Text Primary**: `#ffffff` (White text)
- **Text Secondary**: `#cccccc` (Gray text)

### Typography
- **Primary Font**: Roboto (Body text)
- **Heading Font**: Montserrat (Headlines)
- **Brand Symbol**: 𐕣 (Ancient symbol used as brand identifier)

### Spacing System
- **XS**: 0.25rem (4px)
- **SM**: 0.5rem (8px)
- **MD**: 1rem (16px)
- **LG**: 1.5rem (24px)
- **XL**: 2rem (32px)
- **2XL**: 3rem (48px)
- **3XL**: 4rem (64px)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MikePea1993/frsk-portfolio.git
   cd frsk-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px

## 🎯 Key Components

### Hero Section
- **Split-screen layout** with content on left, visuals on right
- **Animated brand symbol** (𐕣) with rotating effects
- **Typewriter effect** for dynamic job titles
- **Particle system** for background animation
- **Interactive cursor follower**

### About Section
- **Skills showcase** with categorized tech stack
- **Real brand icons** for technologies (React, TypeScript, Laravel, etc.)
- **Hover animations** and visual effects
- **Responsive grid layout**

### Portfolio Section
- **Project filtering** (All projects vs Featured)
- **Interactive project cards** with hover effects
- **External links** to live demos and GitHub repos
- **Technology badges** for each project

### Navigation
- **Fixed sidebar navigation** with smooth scrolling
- **Active section highlighting** based on scroll position
- **Tooltips** showing section names on hover

## 🔧 Customization

### Adding New Projects
Edit `src/data/projects.ts` and add your project information:

```typescript
{
  id: 6,
  title: "Your Project Name",
  description: "Project description...",
  technologies: ["React", "TypeScript", "Node.js"],
  link: "https://your-project-url.com",
  github: "https://github.com/username/repo",
  image: "/assets/images/your-project.jpg",
  featured: true
}
```

### Updating Skills
Modify `src/data/skills.ts` to reflect your technical abilities:

```typescript
{
  id: 13,
  title: "Your New Skill",
  description: "Description of your skill...",
  icon: "IconName", // Lucide React icon name
  category: "frontend" // or "backend", "tools", "other"
}
```

### Changing Colors
Update CSS custom properties in `src/styles/variables.css`:

```css
:root {
  --color-primary: #your-color;
  --color-background: #your-background;
  /* ... other variables */
}
```

## 📈 Performance Optimizations

- **CSS Modules** for scoped styling and better performance
- **Lazy loading** for images and components
- **Optimized animations** using CSS transforms and opacity
- **Efficient re-renders** with React hooks and memoization

## 🌐 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure domain and SSL

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Michael Peacock**
- Website: [https://your-portfolio-url.com](https://your-portfolio-url.com)
- GitHub: [@MikePea1993](https://github.com/MikePea1993)
- LinkedIn: [Your LinkedIn](https://linktr.ee/mikepea1993)
- Email: Michaelpeacock1993@gmail.com

## 🙏 Acknowledgments

- [Lucide React](https://lucide.dev/) for beautiful icons
- [React Icons](https://react-icons.github.io/react-icons/) for tech stack icons
- [Create React App](https://create-react-app.dev/) for the initial setup
- Modern web design inspiration from various design systems

---

⭐ **Star this repository if you found it helpful!**