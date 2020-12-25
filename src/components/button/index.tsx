import * as React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: string;
}
export const Button: React.FC<ButtonProps> = ({ color, children, ...rest }: ButtonProps): React.ReactElement => (
  <button {...rest} style={{ background: color ?? "black" }}>
    {children}
  </button>
);
