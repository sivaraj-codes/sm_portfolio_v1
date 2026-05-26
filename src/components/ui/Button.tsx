import styles from "./Button.module.css";

import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "outline";

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonProps = AnchorProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { variant = "outline", children, className = "" } = props;

  const cls = `${styles.btn} ${styles[variant]} ${className}`;

  if (props.as === "a") {
    const { as, ...rest } = props;

    return (
      <a className={cls} {...rest}>
        {children}
      </a>
    );
  }

  const { as, ...rest } = props;

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
