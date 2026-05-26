import type { Certification } from "../../types";
import styles from "./Certifications.module.css";
import { SectionHeader } from "./SectionHeader";

interface CertificationsProps {
  data: Certification[];
}

export const Certifications = ({ data }: CertificationsProps) => {
  return (
    <section
      className={`max-content-wrapper `}
      id="certifications"
      aria-labelledby="certifications-heading"
    >
      <SectionHeader label="Learning" title="Certifications" />
      <div className={styles.cardsWrapper}>
        {data.map((cert) => (
          <article key={cert.name} className={styles.card}>
            <p className={styles.issuer}>{cert.issuer}</p>
            <h3 className={styles.name}>{cert.name}</h3>
            <a
              href={cert.url}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${cert.name} certificate`}
            >
              View certificate ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};
