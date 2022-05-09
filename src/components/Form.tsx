import React, { FC, useState, useEffect } from "react";
import { Input } from "./Input";
import { FieldsProperties } from "../constants/fieldsProperties";
import { RadioButton } from "./RadioButton";
import { Button } from "./Button";
import { getJobs } from "../services/ap";
import { name, email, phone } from "../constants/regExp";
import { ValidFields } from "../constants/ValidFields";
import "../style/form.scss";

export const Form: FC = () => {
  const [successfullyRegistered, setSuccessfullyRegistered] =
    useState<boolean>(false);
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
  const [kindJobs, setKindJobs] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await getJobs();
      setKindJobs(response);
      setFormProperties({ ...formProperties, job: response[0].name });
    })();
  }, []);
  const onChangeInputValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    placeholder: string
  ) => {
    setFormProperties({
      ...formProperties,
      [placeholder]: e.target.value,
    });
  };
  const onChangeInputFile: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    const fileName = e.target.files?.[0]?.name;
    setFormProperties({
      ...formProperties,
      file: {
        name: fileName ?? "Upload your photo",
        length: fileName === undefined ? 0 : 1,
      },
    });
  };
  const onChangeRadioButton: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
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
    setSuccessfullyRegistered(true);
  };
  return (
    <form className="form">
      {successfullyRegistered ? (
        <div className="form__registered">
          <h1>User successfully registered</h1>
          <img src="img/success-registered.jpg" alt="Successfully registered" />
        </div>
      ) : (
        <div className="form__unregistered">
          <h1 className="form__title">Working with POST request</h1>
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
            {kindJobs.map(({ id, name }, index) => (
              <RadioButton
                key={id}
                defaultChecked={index === 0}
                text={name}
                onChangeRadioButton={onChangeRadioButton}
              />
            ))}
          </div>
          <div
            className={`form__photo ${
              !isValidFields.validFile ? "invalid" : ""
            }`}
          >
            <label htmlFor="files">Upload</label>
            <span>{formProperties.file.name}</span>
            <input id="files" type="file" onChange={onChangeInputFile}></input>
          </div>
          <Button text="Sign Up" handler={submitForm} />
        </div>
      )}
    </form>
  );
};
