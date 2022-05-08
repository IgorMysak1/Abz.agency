import React, { FC } from "react";
import "../style/hero.scss";
import { Button } from "./Button";
import { scrollTo } from "../utilits/scrollTo";
export const Hero: FC = () => {
  return (
    <div className="hero">
      <div className="hero__title">Test assignment for front-end developer</div>
      <div className="hero__subtitle">
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </div>
      <Button text="Sign Up" handler={() => scrollTo(".signUp")} />
    </div>
  );
};
