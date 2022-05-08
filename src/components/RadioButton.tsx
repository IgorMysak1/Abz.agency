import React, { FC } from "react";
import "../style/radioButton.scss";
interface RadioButtonProps {
  defaultChecked?: boolean;
  text: string;
}
export const RadioButton: FC<RadioButtonProps> = ({ text, defaultChecked }) => {
  const onChangeRadioButton: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    console.log(e.target.value);
  };
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
