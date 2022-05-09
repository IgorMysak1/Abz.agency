import React, { FC } from "react";
import {
  fieldsProperties,
  FieldsProperties,
} from "../constants/fieldsProperties";
import "../style/input.scss";

interface InputProps {
  valid: boolean;
  placeholder: "name" | "email" | "phone";
  hint?: string;
  formProperties: FieldsProperties;
  onChangeInputValue: (
    e: React.ChangeEvent<HTMLInputElement>,
    placeholder: string
  ) => void;
}
export const Input: FC<InputProps> = ({
  valid,
  placeholder,
  hint,
  formProperties,
  onChangeInputValue,
}) => {
  return (
    <div className="input">
      {!!formProperties[placeholder].length && (
        <span className="input__title">{placeholder}</span>
      )}
      <input
        type="text"
        placeholder={fieldsProperties[placeholder]}
        value={formProperties[placeholder]}
        onChange={(e) => onChangeInputValue(e, placeholder)}
        className={`input__input ${!valid ? "invalid" : ""}`}
      />
      {!valid && <span className="input__hint">{hint}</span>}
    </div>
  );
};
