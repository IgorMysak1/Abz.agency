import React, { FC, Dispatch, SetStateAction } from "react";
import "../style/input.scss";
import {
  fieldsProperties,
  FieldsProperties,
} from "../constants/fieldsProperties";

interface InputProps {
  placeholder: keyof FieldsProperties;
  hint?: string;
  inputsValue: FieldsProperties;
  setInputsValue: Dispatch<SetStateAction<FieldsProperties>>;
}
export const Input: FC<InputProps> = ({
  placeholder,
  hint,
  inputsValue,
  setInputsValue,
}) => {
  const onChangeInputValue: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setInputsValue((prev) => ({ ...prev, [placeholder]: e.target.value }));
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder={fieldsProperties[placeholder]}
        value={inputsValue[placeholder]}
        onChange={onChangeInputValue}
        className="input__input"
      />
      {hint && <span className="input__hint">{hint}</span>}
    </div>
  );
};
