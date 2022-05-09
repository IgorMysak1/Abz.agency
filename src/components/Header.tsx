import React, { FC } from "react";
import { Button, scrollTo } from "./index";
import "../style/header.scss";

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
            <Button text="Sign Up" handler={() => scrollTo(".form")} />
          </div>
        </div>
      </div>
    </div>
  );
};
