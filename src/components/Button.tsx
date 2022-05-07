import React, { FC } from "react";
import "../style/button.scss";
interface ButtonProps {
  text: string;
  handler: () => void;
}
export const Button: FC<ButtonProps> = ({ text, handler }) => {
  return (
    <button className="button" onClick={() => handler()}>
      {text}
    </button>
  );
};
