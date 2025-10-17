import React from "react";
import styles from "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  fw?: 600 | 400;
  fs?: string;
  pad?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fw = 600,
  fs = "2rem",
  pad = "1.6rem  4.8rem",
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      style={{ fontWeight: fw, fontSize: fs, padding: pad }}
      {...props}
    >
      {children}
    </button>
  );
};
