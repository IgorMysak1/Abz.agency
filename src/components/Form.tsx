import React, { FC, useState } from "react";
import { Input } from "./Input";
import { FieldsProperties } from "../constants/fieldsProperties";
import { RadioButton } from "./RadioButton";
import { Button } from "./Button";
import { name, email, phone } from "../utilits/regExpConstants";
import { ValidFields } from "../constants/ValidFields";
import "../style/form.scss";

export const Form: FC = () => {
  const [formProperties, setFormProperties] = useState<FieldsProperties>({
    name: "",
    phone: "",
    email: "",
    job: "Frontend developer",
    file: {
      name: "Upload your photo",
      length: 0,
    },
  });
  const [isValidFields, setIsValidFields] = useState<ValidFields>({
    validName: true,
    validPhone: true,
    validEmail: true,
    validFile: true,
  });
  const onChangeInputValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    placeholder: string
  ) => {
    setFormProperties({
      ...formProperties,
      [placeholder]: e.target.value,
    });
  };
  const onChangeInputFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const nameFile = e.target.files?.[0]?.name;
    setFormProperties({
      ...formProperties,
      file: {
        name: nameFile ?? "Upload your photo",
        length: nameFile === undefined ? 0 : 1,
      },
    });
  };
  const onChangeRadioButton: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setFormProperties({ ...formProperties, job: e.target.value });
  };
  const submitForm = (): void => {
    const validProperties = {
      validName: !!formProperties.name.match(name),
      validEmail: !!formProperties.email.match(email),
      validPhone: !!formProperties.phone.match(phone),
      validFile: !!formProperties.file.length,
    };
    setIsValidFields(validProperties);
    if (!Object.values(validProperties).every(Boolean)) return;
    setFormProperties({
      name: "",
      phone: "",
      email: "",
      job: "Frontend developer",
      file: {
        name: "Upload your photo",
        length: 0,
      },
    });
  };
  return (
    <form className="form">
      <div className="form__inputs">
        <Input
          valid={isValidFields.validName}
          placeholder="name"
          hint="John"
          formProperties={formProperties}
          onChangeInputValue={onChangeInputValue}
        />
        <Input
          valid={isValidFields.validEmail}
          placeholder="email"
          hint="example@gmail.com"
          formProperties={formProperties}
          onChangeInputValue={onChangeInputValue}
        />
        <Input
          valid={isValidFields.validPhone}
          placeholder="phone"
          hint="+38 (XXX) XXX - XX - XX"
          formProperties={formProperties}
          onChangeInputValue={onChangeInputValue}
        />
      </div>
      <div className="form__radio radio-form">
        <h1 className="radio-form__title">Select your position</h1>
        <RadioButton
          defaultChecked
          text="Frontend developer"
          onChangeRadioButton={onChangeRadioButton}
        />
        <RadioButton
          text="Backend developer"
          onChangeRadioButton={onChangeRadioButton}
        />
        <RadioButton
          text="Designer"
          onChangeRadioButton={onChangeRadioButton}
        />
        <RadioButton text="QA" onChangeRadioButton={onChangeRadioButton} />
      </div>
      <div
        className={`form__photo ${!isValidFields.validFile ? "invalid" : ""}`}
      >
        <label htmlFor="files">Upload</label>
        <span>{formProperties.file.name}</span>
        <input id="files" type="file" onChange={onChangeInputFile}></input>
      </div>
      <Button text="Sign Up" handler={submitForm} />
    </form>
  );
};
