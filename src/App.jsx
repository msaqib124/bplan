import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer/>
    </>
  );
}

export default App;
