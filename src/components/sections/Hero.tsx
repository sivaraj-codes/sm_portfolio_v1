import type { HeroData } from "../../types";
import { Button } from "../ui/Button";
import heroStyles from "./Hero.module.css";
interface HeroProps {
  data: HeroData;
}

export const Hero = ({ data }: HeroProps) => {
  return (
    <section id="home" className={`max-content-wrapper ${heroStyles.hero}`}>
      <div className={heroStyles["text-wrapper"]}>
        <p className={heroStyles.eyebrow}>{data.eyebrow}</p>
        <h1 className={heroStyles.name}>{data.name}</h1>
        <p className={heroStyles.title}>{data.title}</p>
        <p className={heroStyles.desc}>{data.desc}</p>
        <div className={heroStyles.cta}>
          <Button
            variant="primary"
            onClick={() => (window.location.href = "#contact")}
          >
            {" "}
            Get in touch
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = "#experience")}
          >
            {" "}
            View Experience
          </Button>
          <Button
            variant="outline"
            as="a"
            href={data.resumeUrl}
            download="Sivaraj_M_Resume.pdf" // ← triggers browser download
            target="_blank"
            rel="noopener noreferrer"
          >
            ↓ Resume
          </Button>
        </div>
        <ul className={heroStyles.links} role="list">
          {data.links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                className={heroStyles.link}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.url.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {link.label} {""}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <aside className={heroStyles["aside"]}>
        <div className={heroStyles.ring}>
          <div className={heroStyles.badge}>
            <span className={heroStyles.years}>{data.years}</span>
            <span className={heroStyles.yearsLabel}>
              years of {"\n"} experience
            </span>
          </div>
        </div>
      </aside>
    </section>
  );
};
