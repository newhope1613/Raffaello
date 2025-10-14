import React from "react";
import styles from "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  fw?: 600 | 400;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fw = 600,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      style={{ fontWeight: fw }}
      {...props}
    >
      {children}
    </button>
  );
};
