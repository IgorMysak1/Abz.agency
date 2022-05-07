import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { RegisteredUsers } from "./components/RegisteredUsers";
import { SignUp } from "./components/SignUp";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="_container">
        <Hero />
        <RegisteredUsers />
        <SignUp />
      </div>
    </div>
  );
};

export default App;
