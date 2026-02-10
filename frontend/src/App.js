import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CurrencyConverter from "./components/CurrencyConverter";
import Home from "./components/Home";
import BitcoinConverter from "./components/BitcoinConverter";
import Logo from "./components/Logo";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Logo/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/currency-converter" element={<CurrencyConverter />} />
          <Route path="/bitcoin-converter" element={<BitcoinConverter />} />
        </Routes>
    </Router>
  );
}

export default App;
