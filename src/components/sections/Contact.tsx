import { SectionHeader } from "./SectionHeader";
import styles from "./Contact.module.css";
import type { ContactData } from "../../types";
import type { JSX } from "react";

const contactIcons: Record<string, JSX.Element> = {
  mail: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  phone: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.07 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  linkedin: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  location: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
};
interface ContactProps {
  data: ContactData;
}

export const Contact = ({ data }: ContactProps) => {
  return (
    <section
      className={`max-content-wrapper `}
      id="contact"
      aria-labelledby="contact-heading"
    >
      <SectionHeader label="Let's talk" title="Get in touch" />
      <div className={styles.cardWrapper}>
        <div className={styles.textWrapper}>
          <h3 className={styles.headline}>{data.headline}</h3>
          <p className={styles.subtext}>{data.subtext}</p>
        </div>

        <ul className={styles.links} role="list">
          {data.items.map((item) => (
            <li key={item.label}>
              {item.url ? (
                <a
                  href={item.url}
                  className={styles.link}
                  target={item.url.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.url.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <span className={styles.linkIcon}>
                    {contactIcons[item.type]}
                  </span>
                  {item.label}
                </a>
              ) : (
                <div className={styles.link}>
                  <span className={styles.linkIcon}>
                    {contactIcons[item.type]}
                  </span>
                  {item.label}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
