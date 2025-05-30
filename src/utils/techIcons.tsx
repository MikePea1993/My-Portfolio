/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from "react";
import {
  SiReact,
  SiVuedotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPhp,
  SiLaravel,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiDocker,
  SiGit,
  SiLinux,
  SiNpm,
  SiDiscord,
  SiLua,
} from "react-icons/si";

import {
  TbBrandFramerMotion,
  TbTerminal2,
  TbApi,
  TbRobot,
  TbDeviceGamepad2,
} from "react-icons/tb";

import { FaCloud, FaGamepad, FaServer, FaTools } from "react-icons/fa";

// Type for tech icon data
interface TechIconData {
  icon: () => React.ReactElement;
  name: string;
  color: string;
}

// Tech icons database
const techIcons: Record<string, TechIconData> = {
  // Frontend
  React: {
    icon: () => <SiReact />,
    name: "React",
    color: "#61DAFB",
  },
  "Vue.js": {
    icon: () => <SiVuedotjs />,
    name: "Vue.js",
    color: "#4FC08D",
  },
  JavaScript: {
    icon: () => <SiJavascript />,
    name: "JavaScript",
    color: "#F7DF1E",
  },
  TypeScript: {
    icon: () => <SiTypescript />,
    name: "TypeScript",
    color: "#3178C6",
  },
  HTML: {
    icon: () => <SiHtml5 />,
    name: "HTML5",
    color: "#E34F26",
  },
  CSS: {
    icon: () => <SiCss3 />,
    name: "CSS3",
    color: "#1572B6",
  },
  "Tailwind CSS": {
    icon: () => <SiTailwindcss />,
    name: "Tailwind CSS",
    color: "#06B6D4",
  },
  Bootstrap: {
    icon: () => <SiBootstrap />,
    name: "Bootstrap",
    color: "#7952B3",
  },
  "Responsive Design": {
    icon: () => <TbBrandFramerMotion />,
    name: "Responsive Design",
    color: "#FF6B6B",
  },

  // Backend
  "Node.js": {
    icon: () => <SiNodedotjs />,
    name: "Node.js",
    color: "#339933",
  },
  Express: {
    icon: () => <SiExpress />,
    name: "Express",
    color: "#000000",
  },
  Python: {
    icon: () => <SiPython />,
    name: "Python",
    color: "#3776AB",
  },
  PHP: {
    icon: () => <SiPhp />,
    name: "PHP",
    color: "#777BB4",
  },
  Laravel: {
    icon: () => <SiLaravel />,
    name: "Laravel",
    color: "#FF2D20",
  },
  FastAPI: {
    icon: () => <FaCloud />,
    name: "FastAPI",
    color: "#009688",
  },
  GraphQL: {
    icon: () => <SiGraphql />,
    name: "GraphQL",
    color: "#E10098",
  },

  // Databases
  MongoDB: {
    icon: () => <SiMongodb />,
    name: "MongoDB",
    color: "#47A248",
  },
  PostgreSQL: {
    icon: () => <SiPostgresql />,
    name: "PostgreSQL",
    color: "#336791",
  },
  MySQL: {
    icon: () => <SiMysql />,
    name: "MySQL",
    color: "#4479A1",
  },
  Redis: {
    icon: () => <SiRedis />,
    name: "Redis",
    color: "#DC382D",
  },
  Firebase: {
    icon: () => <SiFirebase />,
    name: "Firebase",
    color: "#FFCA28",
  },

  // DevOps & Tools
  Docker: {
    icon: () => <SiDocker />,
    name: "Docker",
    color: "#2496ED",
  },
  Git: {
    icon: () => <SiGit />,
    name: "Git",
    color: "#F05032",
  },
  Linux: {
    icon: () => <SiLinux />,
    name: "Linux",
    color: "#FCC624",
  },
  NPM: {
    icon: () => <SiNpm />,
    name: "NPM",
    color: "#CB3837",
  },

  // Specialized
  "Discord.py": {
    icon: () => <SiDiscord />,
    name: "Discord.py",
    color: "#5865F2",
  },
  "Discord API": {
    icon: () => <SiDiscord />,
    name: "Discord API",
    color: "#5865F2",
  },
  Lua: {
    icon: () => <SiLua />,
    name: "Lua",
    color: "#2C2D72",
  },
  CLI: {
    icon: () => <TbTerminal2 />,
    name: "CLI",
    color: "#4A90E2",
  },
  "Canvas API": {
    icon: () => <TbApi />,
    name: "Canvas API",
    color: "#FF6B6B",
  },
  Automation: {
    icon: () => <TbRobot />,
    name: "Automation",
    color: "#9C27B0",
  },
  "Game Development": {
    icon: () => <FaGamepad />,
    name: "Game Development",
    color: "#FF5722",
  },
  "Server Scripting": {
    icon: () => <FaServer />,
    name: "Server Scripting",
    color: "#607D8B",
  },
  "Phaser.js": {
    icon: () => <TbDeviceGamepad2 />,
    name: "Phaser.js",
    color: "#FF6B35",
  },

  // Fallback for unknown technologies
  default: {
    icon: () => <FaTools />,
    name: "Technology",
    color: "#6366F1",
  },
};

// Function to get tech icon data
export const getTechIcon = (technology: string): TechIconData => {
  const normalizedTech = technology.trim();
  return techIcons[normalizedTech] || techIcons.default;
};
