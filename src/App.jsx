// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import Animal from "./Components/Animal";
import Birds from "./Components/Birds";
import About from "./Components/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/Animal" exact element={<Animal />} />
          <Route path="/Birds" exact element={<Birds />} />
          <Route path="/About" exact element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
