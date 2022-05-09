import React from "react";
import { Footer } from "./components/Footer";
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
        <Footer />
      </div>
    </div>
  );
};

export default App;
