import { ReactNode } from "react";

interface IButton {
  disabled: boolean;
  children: ReactNode;
  onClick: (number: number) => void;
}

export const Button = ({ disabled, children, onClick }: IButton) => {
  return (
    <button
      onClick={() => onClick(10)}
      style={{ backgroundColor: disabled ? "red" : "blue" }}
    >
      {children}
    </button>
  );
};
