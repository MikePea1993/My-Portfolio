import { ContactInfo, Testimonial, Experience } from "../types";

export const contactInfo: ContactInfo = {
  email: "michaelpeacock1993@gmail.com",
  github: "https://github.com/MikePea1993",
  linkedin: "https://linktr.ee/mikepea1993",
};

export const testimonials: Testimonial[] = [
  {
    name: "Gaming Community Admin",
    role: "Server Administrator",
    content:
      "Michael's LazyTX bot transformed our server moderation. The automated warning system and template features saved us countless hours of manual work.",
    rating: 5,
  },
  {
    name: "Development Team Lead",
    role: "Project Manager",
    content:
      "The dev-hub-cli tool Michael created has become an essential part of our development workflow. It's intuitive and incredibly useful for streamlining our processes.",
    rating: 5,
  },
  {
    name: "Fellow Developer",
    role: "Full-Stack Developer",
    content:
      "Michael's dedication to learning and creating innovative solutions is impressive. His projects show real understanding of both technical and user needs.",
    rating: 5,
  },
];

export const experience: Experience[] = [
  {
    period: "2023 - Present",
    role: "Aspiring Full-Stack Developer",
    company: "Self-Directed Learning & Projects",
    description:
      "Currently building interactive web applications and Discord automation tools while expanding backend development skills. Focus on becoming a well-rounded Full Stack Developer through hands-on projects and continuous learning.",
  },
  {
    period: "2022 - 2023",
    role: "Web Development Student",
    company: "Meta Front-End Developer Course",
    description:
      "Completed comprehensive training in modern web development practices. Built React applications and gained solid foundation in frontend technologies and responsive design principles.",
  },
  {
    period: "2021 - 2022",
    role: "Game Development Enthusiast",
    company: "Personal Projects",
    description:
      "Focused on RedM/FiveM Lua scripting and game development. Created interactive browser games with Phaser.js and developed custom server modifications for gaming communities.",
  },
];
