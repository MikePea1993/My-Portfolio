import React from "react";
import { experience } from "../../../data/contact";
import styles from "./Resume.module.css";

export const Resume: React.FC = () => {
  return (
    <section id="resume" className={styles.resumeSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <p className={styles.sectionSubtitle}>
            My professional journey and key achievements
          </p>
        </div>

        <div className={styles.experienceTimeline}>
          {experience.map((exp, index) => (
            <div
              key={index}
              className={styles.timelineItem}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelinePeriod}>{exp.period}</div>
                <h3 className={styles.timelineRole}>{exp.role}</h3>
                <div className={styles.timelineCompany}>{exp.company}</div>
                <p className={styles.timelineDescription}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
