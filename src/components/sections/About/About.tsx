import React from "react";
import { Calendar, MapPin, Target, CheckCircle, Download } from "lucide-react";
import { Button } from "../../common/Button";
import styles from "./About.module.css";

export const About: React.FC = () => {
  const stats = [
    { number: "5+", label: "Active Projects" },
    { number: "NPM", label: "Published Package" },
    { number: "100%", label: "Learning Focus" },
  ];

  const highlights = [
    "Clean, maintainable code",
    "Continuous learning mindset",
    "Problem-solving approach",
    "Community-focused solutions",
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.sectionSubtitle}>
            Highly motivated IT professional with a passion for creating
            innovative digital solutions
          </p>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <div className={styles.aboutStats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.stat}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div className={styles.aboutDescription}>
              <p>
                I'm a highly motivated and aspiring IT professional with a solid
                foundation in web development and game scripting. My journey is
                focused on becoming a well-rounded Full Stack Developer through
                continuous learning and hands-on project development.
              </p>
              <p>
                Currently building interactive web applications and Discord
                automation tools while expanding my backend development skills.
                I have a passion for creating innovative solutions and
                contributing to dynamic projects that make a real difference in
                developer and gaming communities.
              </p>
              <p>
                <strong>Fun Fact:</strong> I debug with console.log and I'm not
                ashamed! 🐛
              </p>
            </div>

            <div className={styles.aboutHighlights}>
              {highlights.map((highlight, index) => (
                <div key={index} className={styles.highlight}>
                  <CheckCircle size={20} />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.aboutResume}>
            <div className={styles.resumeCard}>
              <h3>Quick Overview</h3>

              <div className={styles.resumeItem}>
                <Calendar size={18} />
                <div>
                  <strong>Current Focus:</strong>
                  <span>Full Stack Development</span>
                </div>
              </div>

              <div className={styles.resumeItem}>
                <MapPin size={18} />
                <div>
                  <strong>Location:</strong>
                  <span>Newport, Wales, UK</span>
                </div>
              </div>

              <div className={styles.resumeItem}>
                <Target size={18} />
                <div>
                  <strong>Goal:</strong>
                  <span>Becoming a well-rounded Full Stack Developer</span>
                </div>
              </div>

              <Button
                variant="primary"
                leftIcon={<Download size={18} />}
                className={styles.downloadCv}
                onClick={() =>
                  window.open("/assets/cv/michael-peacock-cv.pdf", "_blank")
                }
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
