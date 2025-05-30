import React, { useState } from "react";
import { Github, ExternalLink, Construction } from "lucide-react";
import { Button } from "../../common/Button";
import { TechIcon } from "../../common/TechIcon";
import { projects } from "../../../data/projects";
import { Project } from "../../../types";
import styles from "./Portfolio.module.css";

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "featured">("featured");

  const filteredProjects =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({
    project,
    index,
  }) => {
    const isUnderConstruction = project.results.includes("Under Construction");

    return (
      <div
        className={`${styles.projectCard} ${
          isUnderConstruction ? styles.underConstruction : ""
        }`}
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        {/* Construction Badge */}
        {isUnderConstruction && (
          <div className={styles.constructionBadge}>
            <Construction size={16} />
            <span>Under Construction</span>
          </div>
        )}

        <div className={styles.projectImage}>
          <img src={project.image} alt={project.title} />
          <div className={styles.projectOverlay}>
            <div className={styles.projectLinks}>
              {!isUnderConstruction ? (
                <>
                  <a
                    href={project.github}
                    className={styles.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View source code"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className={styles.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </>
              ) : (
                <div className={styles.constructionMessage}>
                  <Construction size={24} />
                  <span>Coming Soon</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.projectContent}>
          <h3 className={styles.projectTitle}>
            {project.title}
            {isUnderConstruction && (
              <span className={styles.constructionIcon}>🚧</span>
            )}
          </h3>
          <p className={styles.projectDescription}>{project.description}</p>

          <div className={styles.projectResults}>
            {project.results.map((result, i) => (
              <span
                key={i}
                className={`${styles.resultTag} ${
                  result === "Under Construction" ? styles.constructionTag : ""
                }`}
              >
                {result}
              </span>
            ))}
          </div>

          <div className={styles.projectCaseStudy}>
            <div className={styles.caseStudyItem}>
              <strong>
                {isUnderConstruction ? "Planned Challenge:" : "Challenge:"}
              </strong>
              <p>{project.challenge}</p>
            </div>
            <div className={styles.caseStudyItem}>
              <strong>
                {isUnderConstruction ? "Planned Solution:" : "Solution:"}
              </strong>
              <p>{project.solution}</p>
            </div>
          </div>

          {/* UPDATED: Tech Stack with Icons */}
          <div className={styles.projectTech}>
            <span className={styles.techLabel}>Built with:</span>
            <div className={styles.techIcons}>
              {project.technologies.map((tech, i) => (
                <TechIcon key={i} technology={tech} size="md" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionSubtitle}>
            Real-world solutions that solve problems and deliver results
          </p>
        </div>

        <div className={styles.filterButtons}>
          <button
            className={`${styles.filterBtn} ${
              filter === "featured" ? styles.active : ""
            }`}
            onClick={() => setFilter("featured")}
          >
            Featured Projects
          </button>
          <button
            className={`${styles.filterBtn} ${
              filter === "all" ? styles.active : ""
            }`}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className={styles.viewAllProjects}>
          <Button
            variant="secondary"
            leftIcon={<Github size={20} />}
            onClick={() =>
              window.open("https://github.com/MikePea1993", "_blank")
            }
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
