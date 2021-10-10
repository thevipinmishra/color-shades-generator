import React, { useState } from "react";
import Color from "color";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { v4 as uuidv4 } from "uuid";

import loading from "./plate.svg";
import "./main.scss";

const App = () => {
  const [input, setInput] = useState("");
  const [shades, setShades] = useState([]);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (event) => {
    setShades([]);
    setInput(event.target.value);
  };

  const isHex = (str) => {
    const regex = /^#(?:[0-9a-fA-F]{3}){1,2}$/i;
    return regex.test(str);
  };

  const handleFormSubmit = (event, color) => {
    event.preventDefault();
    const variants = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
    const lightShades = variants.map((num) => Color(input).lighten(num).hex());
    const darkShades = variants.map((num) => Color(input).darken(num).hex());
    const shades = [...lightShades, ...darkShades];
    setShades(shades);
  };

  const handleCopyStatus = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  };

  return (
    <div className="app">
      <header className="page-header">
        <h1 className="headline">Color Shades Generator 🍕</h1>
        <p className="description">
          Put any Hex Color Code (3 or 6 digit) and you&#39;ll get 20 different
          shades!
        </p>
      </header>

      <div className="color-input" onSubmit={handleFormSubmit}>
        <form>
          <div className="input-group">
            <input
              type="text"
              value={input}
              placeholder="#2c3e50"
              onChange={handleInputChange}
              spellCheck={false}
              autoFocus
            />

            <input type="submit" value="Get Shades" disabled={!isHex(input)} />
          </div>
          <p className="input-helper-text">
            Only Hex Colors Allowed, eg. #ddd, #2c3e50 etc.
          </p>
        </form>
      </div>
      {shades.length > 0 ? (
        <>
          <div className="color-info wrapper">
            <div className="color-type info-box">
              <h5>Color Type</h5>
              <p>{input && Color(input).isDark() ? "Dark" : "Light"}</p>
            </div>

            <div className="color-hsl info-box">
              <h5>HSL Value</h5>
              <p>{input && Color(input).hsl().string(0)}</p>
            </div>

            <div className="color-rgb info-box">
              <h5>RBG Value</h5>
              <p> {input && Color(input).rgb().toString()}</p>
            </div>
          </div>
          <div className="shades-grid wrapper">
            {shades.map((shade) => (
              <CopyToClipboard
                text={shade}
                onCopy={() => handleCopyStatus()}
                key={uuidv4()}
              >
                <div className="shade-item">
                  <div className="preview" style={{ background: shade }}></div>
                  <span className="color-code">{shade}</span>
                </div>
              </CopyToClipboard>
            ))}
          </div>
        </>
      ) : (
        <div className="loading-placeholder wrapper">
          <img src={loading} alt="" width="100" height="100" />
          <h3>Waiting for a Color Input...</h3>
        </div>
      )}

      <footer className="site-footer">
        <p>
          Made using ⌨️ and 🐭 by{" "}
          <a href="https://github.com/thevipinmishra">Vipin Mishra</a>
        </p>
      </footer>

      {copied && <p className="copy-status">🎉 Copied</p>}
    </div>
  );
};

export default App;
