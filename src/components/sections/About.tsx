import type { AboutData } from "../../types";
import aboutStyles from "./About.module.css";
import { SectionHeader } from "./SectionHeader";

interface AboutProps {
  data: AboutData;
}

export const About = ({ data }: AboutProps) => {
  return (
    <section
      id="about"
      className={`max-content-wrapper `}
      aria-labelledby="about-heading"
    >
      <SectionHeader label="About me" title="Who I am" />
      <div className={aboutStyles.contentWrapper}>
        <div className={aboutStyles.textWrapper}>
          {data.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <ul className={aboutStyles.statsWrapper}>
          {data.stats.map((st) => (
            <li key={st.label} className={aboutStyles.statCard}>
              <span className={aboutStyles.statNum}>{st.num}</span>
              <span className={aboutStyles.statLabel}>{st.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
