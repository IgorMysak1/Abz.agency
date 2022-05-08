import React, { FC } from "react";
import "../style/signUp.scss";
import { Button } from "./Button";
import { Form } from "./Form";

export const SignUp: FC = () => {
  return (
    <div className="signUp">
      <h1 className="signUp__title">Working with POST request</h1>
      <Form />
      {/* <Button text="Sign up" handler={() => console.log("Sign up")} /> */}
    </div>
  );
};
