import React, { useState, useEffect } from "react";
import { ChevronDown, Mail, ArrowRight } from "lucide-react";
import { Button } from "../../common/Button";
import { useSmoothScroll } from "../../../hooks/useSmoothScroll";
import styles from "./Hero.module.css";

// Words array outside component
const words = [
  "Aspiring Full-Stack Developer",
  "Bot Developer",
  "Game Scripter",
  "Problem Solver",
];

export const Hero: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Word rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className={`${styles.heroSection} ${isLoaded ? styles.loaded : ""}`}
    >
      <div
        className={styles.heroBackground}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`,
        }}
      />

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <div className={styles.greeting}>
            <span className={styles.greetingLine}></span>
            <p>Hello, I'm</p>
          </div>

          <h1 className={styles.heroName}>
            <span className={styles.firstName}>Michael</span>
            <span className={styles.lastName}>Peacock</span>
          </h1>

          <div className={styles.heroRole}>
            <span className={styles.roleText} key={currentWord}>
              {words[currentWord]}
            </span>
            <div className={styles.roleUnderline}></div>
          </div>

          <p className={styles.heroDescription}>
            Highly motivated IT professional with a solid foundation in web
            development and game scripting.
            <br />
            Creating innovative solutions and contributing to dynamic projects
            with passion for continuous learning.
          </p>

          <div className={styles.heroActions}>
            <Button
              variant="primary"
              rightIcon={<ArrowRight size={20} />}
              onClick={() => scrollToSection("portfolio")}
            >
              View My Projects
            </Button>
            <Button
              variant="secondary"
              leftIcon={<Mail size={20} />}
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          <div className={styles.heroStatus}>
            <div className={styles.statusDot}></div>
            <span>Currently building interactive web applications</span>
          </div>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.imageContainer}>
            <div className={styles.profileImage}>
              <img src="/assets/images/profile.jpg" alt="Michael Peacock" />
            </div>
            <div className={styles.imageGlow}></div>
          </div>
        </div>
      </div>

      <div
        className={styles.scrollIndicator}
        onClick={() => scrollToSection("about")}
      >
        <span>Scroll to explore</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
};
