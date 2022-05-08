import React, { FC } from "react";
import "../style/button.scss";
interface ButtonProps {
  text: string;
  handler: () => void;
}
export const Button: FC<ButtonProps> = ({ text, handler }) => {
  const invokeHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    handler();
  };
  return (
    <button className="button" onClick={invokeHandler}>
      {text}
    </button>
  );
};
