import * as React from "react";
import classNames from "classnames";

import styles from "./button.module.scss";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  dark?: boolean;
}
export const Button: React.FC<ButtonProps> = ({ dark, children, ...rest }: ButtonProps): React.ReactElement => {
  const className = classNames(styles.button, {
    [`${styles.light}`]: !dark,
    [`${styles.dark}`]: dark,
  });

  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};
