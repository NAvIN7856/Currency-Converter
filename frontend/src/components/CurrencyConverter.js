import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Converter.css";
import symbols from "./symbols.json";

const Converter = () => {
  const [amount, setAmount] = useState(""); // From amount
  const [convertedAmount, setConvertedAmount] = useState(""); // To amount
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [currencies, setCurrencies] = useState([]);
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    from: false,
    to: false,
  });
  const [isFromAmount, setIsFromAmount] = useState(true); // Track if changing amount or convertedAmount

  const fromDropdownRef = useRef(null);
  const toDropdownRef = useRef(null);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await axios.get("/data.json");
        const rates = response.data.rates;
        setCurrencies(Object.keys(rates));
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchCurrencyData();
    // Close dropdowns when clicking outside
    const handleClickOutside = (event) => {
      if (
        fromDropdownRef.current &&
        !fromDropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen((prev) => ({ ...prev, from: false }));
      }
      if (
        toDropdownRef.current &&
        !toDropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen((prev) => ({ ...prev, to: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Automatically convert when amount or convertedAmount changes
  useEffect(() => {
    if (amount && isFromAmount) {
      handleConvert("from");
    } else if (convertedAmount && !isFromAmount) {
      handleConvert("to");
    }
  }, [amount, convertedAmount, fromCurrency, toCurrency]);

  const handleConvert = async (direction) => {
    const valueToConvert = direction === "from" ? amount : convertedAmount;
    if (!valueToConvert) return;

    try {
      const response = await axios.get("http://localhost:8080/convert", {
        params: {
          amount: valueToConvert,
          fromCurrency: direction === "from" ? fromCurrency : toCurrency,
          toCurrency: direction === "from" ? toCurrency : fromCurrency,
        },
      });

      const convertedValue = response.data;
      if (direction === "from") {
        setConvertedAmount(convertedValue);
      } else {
        setAmount(convertedValue);
      }
    } catch (error) {
      console.error("Error converting currency:", error);
    }
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    setIsFromAmount(true);

    if (!value) {
      // Clear the converted amount if the amount is cleared
      setConvertedAmount("");
    }
  };

  const handleConvertedAmountChange = (e) => {
    const value = e.target.value;
    setConvertedAmount(value);
    setIsFromAmount(false);

    if (!value) {
      // Clear the amount if the converted amount is cleared
      setAmount("");
    }
  };

  const handleFetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/fetchData");
      alert(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCurrencyChange = (type, value) => {
    if (type === "from") {
      setFromCurrency(value);
      setSearchFrom("");
    } else {
      setToCurrency(value);
      setSearchTo("");
    }
    setIsDropdownOpen({ ...isDropdownOpen, [type]: false });
  };

  const handleSearch = (e, type) => {
    if (type === "from") {
      setSearchFrom(e.target.value);
      setIsDropdownOpen({ ...isDropdownOpen, from: true });
    } else {
      setSearchTo(e.target.value);
      setIsDropdownOpen({ ...isDropdownOpen, to: true });
    }
  };

  const filteredFromCurrencies = currencies.filter((currency) => {
    const symbol = symbols.find((symbol) => symbol.code === currency);
    const currencyName = symbol ? symbol.name : "";

    return (
      currency.toLowerCase().includes(searchFrom.toLowerCase()) ||
      currencyName.toLowerCase().includes(searchFrom.toLowerCase())
    );
  });

  const filteredToCurrencies = currencies.filter((currency) => {
    const symbol = symbols.find((symbol) => symbol.code === currency);
    const currencyName = symbol ? symbol.name : "";

    return (
      currency.toLowerCase().includes(searchTo.toLowerCase()) ||
      currencyName.toLowerCase().includes(searchTo.toLowerCase())
    );
  });

  const handleImageError = (event) => {
    event.target.src =
      "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
  };

  // Helper function to get the symbol for a currency code
  const getCurrencySymbol = (currencyCode) => {
    const symbolData = symbols.find((symbol) => symbol.code === currencyCode);
    return symbolData ? symbolData.symbol : "";
  };

  return (
    <div className="container">
      <div className="header">
        <header>Currency Converter</header>
        <div className="fetch-btn" id="btn" onClick={handleFetchData}>
          Fetch
        </div>
      </div>
      <div className="contentbox">
        <div className="formbox">
          <div className="currencybox">
            <div className="currency-container">
              <label className="form-label">From</label>
              <div className="custom-dropdown" ref={fromDropdownRef}>
                <div
                  type="div"
                  className="dropdown-btn"
                  onClick={() =>
                    setIsDropdownOpen({
                      ...isDropdownOpen,
                      from: !isDropdownOpen.from,
                    })
                  }
                >
                  <div className="img">
                    <img
                      src={`https://hatscripts.github.io/circle-flags/flags/${fromCurrency
                        .slice(0, 2)
                        .toLowerCase()}.svg`}
                      alt={`${fromCurrency} flag`}
                      onError={handleImageError}
                      width="24"
                    />
                  </div>
                  <h7>
                    {symbols.map((Symbol) => {
                      if (Symbol.code === fromCurrency) {
                        return Symbol.name;
                      }
                      return "";
                    })}
                  </h7>
                  <h7>{fromCurrency}</h7>
                </div>
                {isDropdownOpen.from && (
                  <div className="dropdown-content">
                    <div className="search">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchFrom}
                        onChange={(e) => handleSearch(e, "from")}
                        className="search-input"
                      />
                    </div>
                    {filteredFromCurrencies.map((currency) => (
                      <div
                        key={currency}
                        onClick={() => handleCurrencyChange("from", currency)}
                        className="dropdown-item"
                      >
                        <img
                          src={`https://hatscripts.github.io/circle-flags/flags/${currency
                            .slice(0, 2)
                            .toLowerCase()}.svg`}
                          alt={`${currency} flag`}
                          onError={handleImageError}
                          width="24"
                          style={{ marginRight: "8px" }}
                        />
                        <h7>
                          {symbols.map((Symbol) => {
                            if (Symbol.code === currency) {
                              return Symbol.name;
                            }
                            return "";
                          })}
                        </h7>
                        <h7>{currency}</h7>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="arrowbox">
              <div className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-left-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
                  />
                </svg>
              </div>
            </div>
            <div className="currency-container">
              <label className="form-label">To</label>
              <div className="custom-dropdown" ref={toDropdownRef}>
                <div
                  type="div"
                  className="dropdown-btn"
                  onClick={() =>
                    setIsDropdownOpen({
                      ...isDropdownOpen,
                      to: !isDropdownOpen.to,
                    })
                  }
                >
                  <div className="img">
                    <img
                      src={`https://hatscripts.github.io/circle-flags/flags/${toCurrency
                        .slice(0, 2)
                        .toLowerCase()}.svg`}
                      alt={`${toCurrency} flag`}
                      onError={handleImageError}
                      width="24"
                    />
                  </div>
                  <h7>
                    {symbols.map((Symbol) => {
                      if (Symbol.code === toCurrency) {
                        return Symbol.name;
                      }
                      return "";
                    })}
                  </h7>
                  <h7>{toCurrency}</h7>
                </div>
                {isDropdownOpen.to && (
                  <div className="dropdown-content">
                    <div className="search">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchTo}
                        onChange={(e) => handleSearch(e, "to")}
                        className="search-input"
                      />
                    </div>
                    {filteredToCurrencies.map((currency) => (
                      <div
                        key={currency}
                        onClick={() => handleCurrencyChange("to", currency)}
                        className="dropdown-item"
                      >
                        <img
                          src={`https://hatscripts.github.io/circle-flags/flags/${currency
                            .slice(0, 2)
                            .toLowerCase()}.svg`}
                          alt={`${currency} flag`}
                          onError={handleImageError}
                          width="24"
                          style={{ marginRight: "8px" }}
                        />
                        <h7>
                          {symbols.map((Symbol) => {
                            if (Symbol.code === currency) {
                              return Symbol.name;
                            }
                            return "";
                          })}
                        </h7>
                        <h7>{currency}</h7>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="amount">
          <div className="amountbox">
            <div className="amount-container" id="amount1">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <div className="input-group">
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={handleAmountChange}
                  className="input-amount"
                  required
                />
                <span className="input-group-text">
                  {getCurrencySymbol(fromCurrency)}
                </span>
              </div>
            </div>
            <div className="arrowbox"></div>
            <div className="amount-container" id="amount2">
              <label htmlFor="convertedAmount" className="form-label">
                Amount
              </label>
              <div className="input-group">
                <input
                  type="number"
                  id="convertedAmount"
                  value={convertedAmount}
                  onChange={handleConvertedAmountChange}
                  className="input-amount"
                  required
                />
                <span className="input-group-text">
                  {getCurrencySymbol(toCurrency)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;
