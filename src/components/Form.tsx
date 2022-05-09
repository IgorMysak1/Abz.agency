import React, {
  FC,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { Input } from "./Input";
import { FieldsProperties } from "../constants/fieldsProperties";
import { RadioButton } from "./RadioButton";
import { Button } from "./Button";
import { getJobs, setUser } from "../services/api";
import { name, email, phone } from "../constants/regExp";
import { ValidFields } from "../constants/ValidFields";
import "../style/form.scss";
interface FormProps {
  successfullyRegistered: boolean;
  setSuccessfullyRegistered: Dispatch<SetStateAction<boolean>>;
}
export const Form: FC<FormProps> = ({
  successfullyRegistered,
  setSuccessfullyRegistered,
}) => {
  const [formProperties, setFormProperties] = useState<FieldsProperties>({
    name: "",
    phone: "",
    email: "",
    job: "",
    file: { name: "Upload your photo" } as File,
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
    e.target.files &&
      setFormProperties({
        ...formProperties,
        file: e.target.files[0] ?? { name: "Upload your photo" },
      });
  };
  const onChangeRadioButton: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    setFormProperties({ ...formProperties, job: e.target.value });
  };
  const submitForm = async () => {
    const validProperties = {
      validName: !!formProperties.name.match(name),
      validEmail: !!formProperties.email.match(email),
      validPhone: !!formProperties.phone.match(phone),
      validFile: !!formProperties.file.size,
    };
    setIsValidFields(validProperties);
    if (!Object.values(validProperties).every(Boolean)) return;
    const response = await setUser(formProperties);
    response?.ok && setSuccessfullyRegistered(true);
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
            <span>{formProperties.file?.name}</span>
            <input
              id="files"
              type="file"
              size={5242880}
              accept=".jpg,.jpeg"
              onChange={onChangeInputFile}
            ></input>
          </div>
          <Button text="Sign Up" handler={submitForm} />
        </div>
      )}
    </form>
  );
};
