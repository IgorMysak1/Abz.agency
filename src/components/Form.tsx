import React, { FC, useState, useRef } from "react";
import { Input } from "./Input";
import { FieldsProperties } from "../constants/fieldsProperties";
import { RadioButton } from "./RadioButton";
import { Button } from "./Button";
import "../style/form.scss";
// import { name, email, phone } from "../utilits/regExpConstants";
export const Form: FC = () => {
  const inputFile = useRef<HTMLInputElement>(null);
  const [inputsValue, setInputsValue] = useState<FieldsProperties>({
    name: "",
    phone: "",
    email: "",
  });
  // inputValue.match(regex);
  const [nameFile, setNameFile] = useState<string>("Upload your photo");
  const onChangeInputFile: React.ChangeEventHandler<HTMLInputElement> = () => {
    const nameFile = inputFile.current?.files?.[0]?.name;
    inputFile.current && setNameFile(nameFile === undefined ? "" : nameFile);
  };

  return (
    <form className="form">
      <div className="form__inputs">
        <Input
          placeholder="name"
          inputsValue={inputsValue}
          setInputsValue={setInputsValue}
        />
        <Input
          placeholder="email"
          inputsValue={inputsValue}
          setInputsValue={setInputsValue}
        />
        <Input
          placeholder="phone"
          hint="+38 (XXX) XXX - XX - XX"
          inputsValue={inputsValue}
          setInputsValue={setInputsValue}
        />
      </div>
      <div className="form__radio radio-form">
        <h1 className="radio-form__title">Select your position</h1>
        <RadioButton defaultChecked text="Frontend developer" />
        <RadioButton text="Backend developer" />
        <RadioButton text="Designer" />
        <RadioButton text="QA" />
      </div>
      <div className="form__photo">
        <label htmlFor="files">Upload</label>
        <span>{nameFile}</span>
        <input
          ref={inputFile}
          id="files"
          type="file"
          onChange={onChangeInputFile}
        ></input>
      </div>
      <Button text="Sign Up" handler={() => console.log("aa")} />
    </form>
  );
};
