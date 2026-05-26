import styles from "./SectionHeader.module.css";
interface SectionHeaderProps {
  label: string;
  title: string;
}

export const SectionHeader = ({ label, title }: SectionHeaderProps) => {
  return (
    <>
      <p className={styles.sectionLabel}>{label}</p>
      <h2 className={styles.sectionTitle}>{title}</h2>
    </>
  );
};
