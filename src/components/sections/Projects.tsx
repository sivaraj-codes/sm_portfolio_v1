import type { Project } from "../../types";
import { Tag } from "../ui/Tag";
import styles from "./Projects.module.css";
import { SectionHeader } from "./SectionHeader";
interface ProjectsProps {
  data: Project[];
}

export const Projects = ({ data }: ProjectsProps) => {
  return (
    <section
      className={`max-content-wrapper `}
      id="projects"
      aria-labelledby="projects-heading"
    >
      <SectionHeader label="Work" title="Featured projects" />
      <div className={styles.cardsWrapper}>
        {data.map((project) => (
          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">
              {project.icon}
            </div>

            <h3 className={styles.projectTitle}>{project.name}</h3>
            <p className={styles.desc}>{project.desc}</p>
            <ul className={styles.tags}>
              {project.tags.map((tag) => (
                <li key={tag}>
                  <Tag label={tag} variant="subtle" />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
