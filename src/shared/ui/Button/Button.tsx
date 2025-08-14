import React, { Children } from "react";
import styles from "./Button.module.css";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Button = (props: ButtonProps) => {
  return (
    <div>
      <a className={styles.button} onClick={props.onClick}>
        {props.children}
      </a>
    </div>
  );
};

export default Button;
