import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import ClientTestimonials from "./components/client testimonials/ClientTestimonials";
import OurServices from "./components/our services/OurServices";
import Scales from "./components/Scales/scales";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <OurServices />
      <ClientTestimonials />
      <Scales/>
      <Footer/>
    </div>
  );
};

export default App;
