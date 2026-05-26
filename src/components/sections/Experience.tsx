import type { ExperienceItem } from "../../types";
import styles from "./Experience.module.css";
import { SectionHeader } from "./SectionHeader";

interface ExperienceProps {
  data: ExperienceItem[];
}
export const Experience = ({ data }: ExperienceProps) => {
  return (
    <section
      id="experience"
      className={`max-content-wrapper `}
      aria-labelledby="experience-heading"
    >
      <SectionHeader label="Career" title="Work experience" />
      <ul className={styles.contentWrapper}>
        {data.map((item, i) => (
          <li key={i} className={styles.experienceItem}>
            {/* <div className={styles.dot} aria-hidden="true" /> */}
            <article>
              <header className={styles.header}>
                <h3 className={styles.role}>{item.role}</h3>
                <time className={styles.date}>{item.date}</time>
              </header>
              <p className={styles.company}>
                {item.company}
                <span className={styles.location}> — {item.location}</span>
              </p>
              <ul className={styles.points} role="list">
                {item.points.map((pt, j) => (
                  <li key={j} className={styles.point}>
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
