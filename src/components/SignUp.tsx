import React, { FC } from "react";
import "../style/signUp.scss";
import { Button } from "./Button";
import { Form } from "./Form";

export const SignUp: FC = () => {
  return (
    <div className="signUp">
      <Form />
    </div>
  );
};
