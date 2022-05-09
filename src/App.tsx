import React, { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { RegisteredUsers } from "./components/RegisteredUsers";
import { Form } from "./components/Form";

const App = () => {
  const [successfullyRegistered, setSuccessfullyRegistered] =
    useState<boolean>(false);
  return (
    <div className="App">
      <Header />
      <div className="_container">
        <Hero />
        <RegisteredUsers successfullyRegistered={successfullyRegistered} />
        <Form
          successfullyRegistered={successfullyRegistered}
          setSuccessfullyRegistered={setSuccessfullyRegistered}
        />
        <Footer />
      </div>
    </div>
  );
};

export default App;
