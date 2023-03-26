import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import ClientTestimonials from "./components/client testimonials/ClientTestimonials";
import OurServices from "./components/our services/OurServices";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <OurServices />
      <ClientTestimonials />
    </div>
  );
};

export default App;
