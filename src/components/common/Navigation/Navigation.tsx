import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "../../../hooks/useScrollSpy";
import { useSmoothScroll } from "../../../hooks/useSmoothScroll";
import { navItems } from "../../../data/navigation";
import styles from "./Navigation.module.css";

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useScrollSpy();
  const { scrollToSection } = useSmoothScroll();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        <div className={styles.navBrand}>
          <span className={styles.brandText}>MP</span>
        </div>

        <div className={`${styles.navMenu} ${isMenuOpen ? styles.active : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`${styles.navLink} ${
                activeSection === item.id ? styles.active : ""
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className={styles.navToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};
