import React from "react";
import { Mail, Github, Linkedin, Star, Quote } from "lucide-react";
import { Button } from "../../common/Button";
import { contactInfo, testimonials } from "../../../data/contact";
import styles from "./Contact.module.css";

export const Contact: React.FC = () => {
  return (
    <>
      {/* Testimonials Section */}
      <section id="testimonials" className={styles.testimonialsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Client Testimonials</h2>
            <p className={styles.sectionSubtitle}>
              What clients say about working with me
            </p>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={styles.testimonialCard}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={styles.testimonialHeader}>
                  <Quote size={24} className={styles.quoteIcon} />
                  <div className={styles.testimonialRating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className={styles.starFilled} />
                    ))}
                  </div>
                </div>
                <p className={styles.testimonialContent}>
                  {testimonial.content}
                </p>
                <div className={styles.testimonialAuthor}>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contactSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Let's Work Together</h2>
            <p className={styles.sectionSubtitle}>
              Ready to bring your next project to life? Let's discuss how I can
              help.
            </p>
          </div>

          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Mail size={24} />
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${contactInfo.email}`}>
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <Github size={24} />
                <div>
                  <strong>GitHub</strong>
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/MikePea1993
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <Linkedin size={24} />
                <div>
                  <strong>LinkedIn</strong>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linktr.ee/mikepea1993
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.contactCta}>
              <div className={styles.ctaContent}>
                <h3>Ready to start your project?</h3>
                <p>
                  I'm always excited to work on new challenges and bring
                  innovative ideas to life.
                </p>
                <div className={styles.ctaButtons}>
                  <Button
                    variant="primary"
                    leftIcon={<Mail size={20} />}
                    onClick={() =>
                      (window.location.href = `mailto:${contactInfo.email}`)
                    }
                  >
                    Send Email
                  </Button>
                  <Button
                    variant="secondary"
                    leftIcon={<Github size={20} />}
                    onClick={() => window.open(contactInfo.github, "_blank")}
                  >
                    View GitHub
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
