import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className="home">
        <h1>Welcome to the Currency Converter</h1>
        <p>Select a converter to get started:</p>
        <div className="button-container">
          <Link to="/currency-converter">
            <button className="nav-btn">Currency Converter</button>
          </Link>
          <Link to="/bitcoin-converter">
            <button className="nav-btn">Bitcoin Converter</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
