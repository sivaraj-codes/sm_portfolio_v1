import type { SkillGroup } from "../../types";
import { Tag } from "../ui/Tag";
import { SectionHeader } from "./SectionHeader";
import styles from "./Skills.module.css";
interface SkillsProps {
  data: SkillGroup[];
}

export const Skills = ({ data }: SkillsProps) => {
  return (
    <section
      className={`max-content-wrapper `}
      id="skills"
      aria-labelledby="skills-heading"
    >
      <SectionHeader label="Tech" title="Skills & tools" />
      <div className={styles.cardsWrapper}>
        {data.map((group) => (
          <article className={`${styles.card} reveal-card `}>
            <h3 className={styles.groupTitle}>{group.group}</h3>
            <ul className={styles.tags}>
              {group.tags.map((tag) => (
                <li key={tag}>
                  <Tag label={tag} variant="accent" />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
