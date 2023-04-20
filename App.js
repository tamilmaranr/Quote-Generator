import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuoteGenerator from "./QuoteGenerator";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route index element={<QuoteGenerator/>} />
          <Route path="about" element={<About/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;