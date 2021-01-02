import * as React from "react";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;
export const Button: React.FC<ButtonProps> = ({ children, ...rest }: ButtonProps): React.ReactElement => (
  <button {...rest}>{children}</button>
);
