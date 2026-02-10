import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Converter.css";
import symbols from "./bitsymbols.json";
// import "./BitcoinConverter.css";

const BitcoinConverter = () => {
  const [bitcoinAmount, setBitcoinAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [fromBitcoin, setFromBitcoin] = useState("BTC");
  const [toBitcoin, setToBitcoin] = useState("ACT");
  const [currencies, setCurrencies] = useState([]);
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    from: false,
    to: false,
  });
  const [isFromAmount, setIsFromAmount] = useState(true);

  const fromDropdownRef = useRef(null);
  const toDropdownRef = useRef(null);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await axios.get("/bitdata.json");
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
    if (bitcoinAmount && isFromAmount) {
      handleConvert("from");
    } else if (convertedAmount && !isFromAmount) {
      handleConvert("to");
    }
  }, [bitcoinAmount, convertedAmount, fromBitcoin, toBitcoin]);

  const handleConvert = async (direction) => {
    const valueToConvert =
      direction === "from" ? bitcoinAmount : convertedAmount;
    if (!valueToConvert) return;
    try {
      const response = await axios.get("http://localhost:8080/bitconvert", {
        params: {
          bitcoinAmount: valueToConvert,
          fromBitcoin: direction === "from" ? fromBitcoin : toBitcoin,
          toBitcoin: direction === "from" ? toBitcoin : fromBitcoin,
        },
      });
      const convertedValue = response.data;
      if (direction === "from") {
        setConvertedAmount(convertedValue);
      } else {
        setBitcoinAmount(convertedValue);
      }
    } catch (error) {
      console.error("Error converting Bitcoin:", error);
    }
  };

  const handleAmountChange = (e) => {
    setBitcoinAmount(e.target.value);
    setIsFromAmount(true);
  };

  const handleConvertedAmountChange = (e) => {
    setConvertedAmount(e.target.value);
    setIsFromAmount(false);
  };
  const handleFetchBitData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/fetchBitData");
      alert(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCurrencyChange = (type, value) => {
    if (type === "from") {
      setFromBitcoin(value);
      setSearchFrom("");
    } else {
      setToBitcoin(value);
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

  const getCurrencySymbol = (currencyCode) => {
    const symbolData = symbols.find((symbol) => symbol.code === currencyCode);
    return symbolData ? symbolData.symbol : "";
  };

  return (
    <div className="container">
      <div className="header">
        <header>Bitcoin Converter</header>
        <div className="fetch-btn" id="btn" onClick={handleFetchBitData}>
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
                      src={`https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/${fromBitcoin.toLowerCase()}.svg`}
                      alt={`${fromBitcoin} flag`}
                      onError={handleImageError}
                      width="24"
                    />
                  </div>
                  <h7>
                    {symbols.map((Symbol) => {
                      if (Symbol.code === fromBitcoin) {
                        return Symbol.name;
                      }
                      return "";
                    })}
                  </h7>
                  <h7>{fromBitcoin}</h7>
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
                          src={`https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/${currency.toLowerCase()}.svg`}
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
                  type="button"
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
                      src={`https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/${toBitcoin.toLowerCase()}.svg`}
                      alt={`${toBitcoin} flag`}
                      onError={handleImageError}
                      width="24"
                    />
                  </div>
                  <h7>
                    {symbols.map((Symbol) => {
                      if (Symbol.code === toBitcoin) {
                        return Symbol.name;
                      }
                      return "";
                    })}
                  </h7>
                  <h7>{toBitcoin}</h7>
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
                          src={`https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/${currency.toLowerCase()}.svg`}
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
            <div className="amount-container">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <div className="input-group">
                <input
                  type="number"
                  id="amount"
                  value={bitcoinAmount}
                  onChange={handleAmountChange}
                  className="input-amount"
                  required
                />
                <span className="input-group-text">
                  {getCurrencySymbol(fromBitcoin)}
                </span>
              </div>
            </div>
            <div className="arrowbox"></div>
            <div className="amount-container">
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
                  {getCurrencySymbol(toBitcoin)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinConverter;
