import styles from "./Tag.module.css";

interface TagProps {
  label: string;
  variant?: "accent" | "subtle";
}

export function Tag({ label, variant = "accent" }: TagProps) {
  return <span className={`${styles.tag} ${styles[variant]}`}>{label}</span>;
}
