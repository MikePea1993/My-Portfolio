import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "dev-hub-cli",
    description:
      "NPM Development Tool - Command-line interface for streamlined development workflow. A comprehensive CLI tool designed to enhance developer productivity and simplify project management tasks.",
    technologies: ["Node.js", "NPM", "JavaScript", "CLI"],
    github: "https://github.com/MikePea1993/dev-hub-cli",
    demo: "https://www.npmjs.com/package/dev-hub-cli",
    image: "/assets/images/dev-hub-cli.jpg",
    featured: true,
    results: ["NPM Published", "CLI Tool", "Developer Productivity"],
    challenge:
      "Creating a user-friendly command-line interface that streamlines complex development workflows",
    solution:
      "Built an intuitive CLI with modular commands and comprehensive documentation, making development tasks more efficient",
  },
  {
    id: 2,
    title: "LazyTX Discord Bot",
    description:
      "Automated TX ban/warning template system for server moderation. A Discord bot that provides automated moderation tools with customizable warning templates and ban management for gaming communities.",
    technologies: ["Discord.py", "Python", "Discord API", "Automation"],
    github: "https://github.com/MikePea1993/LazyTX",
    demo: "https://dev-hub-cli.gitbook.io/lazytx/",
    image: "/assets/images/lazytx-bot.jpg",
    featured: true,
    results: ["Server Moderation", "Automated Warnings", "Template System"],
    challenge:
      "Creating an automated moderation system that could handle complex warning templates and ban management",
    solution:
      "Developed a sophisticated template system with automated responses, reducing manual moderation work by 80%",
  },
  {
    id: 3,
    title: "Favicon Generator Pro",
    description:
      "Modern favicon generator with live previews and advanced customization. A React-based tool that improves upon existing favicon generators with better UX, real-time preview, and comprehensive export options.",
    technologies: ["React", "TypeScript", "Canvas API", "Tailwind CSS"],
    github: "https://github.com/MikePea1993/favicon-generator-pro",
    demo: "https://favicon-generator-pro.vercel.app",
    image: "/assets/images/favicon-generator-pro.jpg",
    featured: true,
    results: ["Under Construction", "Live Preview", "Better UX"],
    challenge:
      "Existing favicon generators have outdated UIs and lack real-time preview functionality",
    solution:
      "Designing a modern React-based tool with live preview, advanced customization, and intuitive user experience",
  },
  {
    id: 4,
    title: "Gaming Community Website",
    description:
      "Full-featured gaming community website with modern design. A comprehensive platform for gaming communities featuring user management, forums, and interactive elements.",
    technologies: ["React", "JavaScript", "CSS", "Responsive Design"],
    github: "https://github.com/MikePea1993/gaming-community-site",
    demo: "https://gaming-community-demo.com",
    image: "/assets/images/gaming-website.jpg",
    featured: false,
    results: ["Modern Design", "Community Features", "Mobile Responsive"],
    challenge:
      "Building a comprehensive community platform that serves multiple gaming groups with different needs",
    solution:
      "Created a modular design system that allows easy customization while maintaining consistent user experience",
  },
  {
    id: 5,
    title: "E-commerce Jewelry Website",
    description:
      "React-based e-commerce jewelry website developed as part of Meta Front-End Developer Course. Features modern design, product catalog, and responsive layout.",
    technologies: ["React", "JavaScript", "CSS", "Bootstrap"],
    github: "https://github.com/MikePea1993/jewelry-ecommerce",
    demo: "https://jewelry-ecommerce-demo.com",
    image: "/assets/images/jewelry-ecommerce.jpg",
    featured: false,
    results: [
      "Meta Course Project",
      "E-commerce Features",
      "React Implementation",
    ],
    challenge:
      "Implementing a complete e-commerce solution with modern React best practices",
    solution:
      "Utilized React hooks and modern patterns to create a scalable, maintainable e-commerce platform",
  },
  {
    id: 6,
    title: "RedM/FiveM Lua Scripts",
    description:
      "Collection of Lua scripts for RedM and FiveM game servers. Interactive browser games and server modifications using Phaser.js and Lua scripting.",
    technologies: ["Lua", "Phaser.js", "Game Development", "Server Scripting"],
    github: "https://github.com/MikePea1993/redm-scripts",
    demo: "https://redm-scripts-demo.com",
    image: "/assets/images/redm-scripts.jpg",
    featured: false,
    results: ["Game Mechanics", "Server Modifications", "Interactive Elements"],
    challenge:
      "Creating engaging game mechanics that enhance the multiplayer experience",
    solution:
      "Developed custom scripts with physics and interactive elements that improved player engagement significantly",
  },
];
