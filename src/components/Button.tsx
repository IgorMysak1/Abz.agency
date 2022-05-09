import React, { FC } from "react";
import "../style/button.scss";
interface ButtonProps {
  disabled?: boolean;
  text: string;
  handler: () => void;
}
export const Button: FC<ButtonProps> = ({ text, handler, disabled }) => {
  const invokeHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    handler();
  };
  return (
    <button disabled={disabled} className="button" onClick={invokeHandler}>
      {text}
    </button>
  );
};
