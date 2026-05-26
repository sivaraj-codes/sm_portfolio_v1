import { portfolioData } from "../data/portfolio";
import styles from "./Footer.module.css";

export function Footer() {
  const location = portfolioData.contact.items.find(
    (item) => item.type === "location",
  );
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`${styles.inner} max-content-wrapper`}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} {portfolioData.hero.name}
          <span className={styles.dot}> · </span>
          Built with React & TypeScript
        </p>
        <p className={styles.location}>{location?.label}</p>
      </div>
    </footer>
  );
}
