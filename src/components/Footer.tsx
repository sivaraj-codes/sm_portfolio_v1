import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`${styles.inner} max-content-wrapper`}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Sivaraj M
          <span className={styles.dot}> · </span>
          Built with React & TypeScript
        </p>
        <p className={styles.location}>Chennai, Tamil Nadu, India</p>
      </div>
    </footer>
  );
}
