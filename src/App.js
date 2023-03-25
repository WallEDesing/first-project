import React from "react";
import "./App.css";
import ClientTestimonials from "./components/client testimonials/ClientTestimonials";
import OurServices from "./components/our services/OurServices";

const App = () => {
  return (
    <div className="App">
      <OurServices />
      <ClientTestimonials />
    </div>
  );
};

export default App;
