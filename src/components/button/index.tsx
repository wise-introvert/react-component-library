import * as React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: string;
}
export const Button: React.FC<ButtonProps> = ({
  color,
  children,
  ...rest
}: ButtonProps): React.ReactElement => {
  return <button {...rest}>{children}</button>;
};
