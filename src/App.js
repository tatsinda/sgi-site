import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./composants/Home";
import About from "./composants/about";
import Service from "./composants/service";
import Contact from "./composants/contact";


// Import des composantscontact


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Définir les routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
