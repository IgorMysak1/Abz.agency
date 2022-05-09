import React, { FC } from "react";
import "../style/radioButton.scss";
interface RadioButtonProps {
  defaultChecked?: boolean;
  text: string;
  onChangeRadioButton: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton: FC<RadioButtonProps> = ({
  text,
  defaultChecked,
  onChangeRadioButton,
}) => {
  return (
    <label className="radioButton">
      {text}
      <input
        onChange={onChangeRadioButton}
        type="radio"
        value={text}
        defaultChecked={defaultChecked}
        name="checkJobs"
      />
      <span className="checkmark"></span>
    </label>
  );
};
