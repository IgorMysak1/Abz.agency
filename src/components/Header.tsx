import React, { FC } from "react";
import "../style/header.scss";
import { Button } from "./Button";
import { scrollTo } from "../utilits/scrollTo";
export const Header: FC = () => {
  return (
    <div className="header">
      <div className="_container">
        <div className="header__wrapper">
          <div className="header__logo">
            <img src="img/cat.svg" alt="Logo" />
            <h1>TestTask</h1>
          </div>
          <div className="header__registration">
            <Button text="Users" handler={() => scrollTo(".registeredUsers")} />
            <Button text="Sign Up" handler={() => scrollTo(".signUp")} />
          </div>
        </div>
      </div>
    </div>
  );
};
