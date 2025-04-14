import { useState } from "react";
import React from "react";

function Conversor() {
  const [tempC, setTempC] = useState("");
  const [tempK, setTempK] = useState("");
  const [tempF, setTempF] = useState("");
  const [convertedValues, setConvertedValues] = useState({});

  const Converter = (e) => {
    e.preventDefault();

    let result = {};
    
      const celsius = parseFloat(tempC);
      
        if (!isNaN(celsius)) {
        result = {
          F: (celsius * 9) / 5 + 32,
          K: celsius + 273.15,
        };
      }
    
      const kelvin = parseFloat(tempK);
      
        if (!isNaN(kelvin)) {
        result = {
          C: kelvin - 273.15,
          F: (kelvin - 273.15) * 9 / 5 + 32,
        };
      }
    
      const fahrenheit = parseFloat(tempF);
      
        if (!isNaN(fahrenheit)) {
        result = {
          C: (fahrenheit - 32) * 5 / 9,
          K: ((fahrenheit - 32) * 5) / 9 + 273.15,
        };
      }

    setConvertedValues(result);

  };

  return (
    <div className="container">
      <h1>Conversor de Temperatura</h1>
      <form>
        
          <>
            <div>
              <label htmlFor="temperatureC" className="form-label">
                Temperatura em Celsius:
              </label>
              <input
                value={tempC}
                onChange={(e) => setTempC(e.target.value)}
                className="form-control"
                type="number"
                id="temperatureC"
              />
            </div>
            <div>
              <label htmlFor="temperatureK" className="form-label">
                Temperatura em Kelvin:
              </label>
              <input
                value={tempK}
                onChange={(e) => setTempK(e.target.value)}
                className="form-control"
                type="number"
                id="temperatureK"
              />
            </div>
            <div>
              <label htmlFor="temperatureF" className="form-label">
                Temperatura em Fahrenheit:
              </label>
              <input
                value={tempF}
                onChange={(e) => setTempF(e.target.value)}
                className="form-control"
                type="number"
                id="temperatureF"
              />
            </div>
          </>


        <button type="submit" onClick={Converter}>
          Converter
        </button>
      </form>

      {Object.keys(convertedValues).length > 0 && (
        
        <div>
          <h2>Valores Convertidos:</h2>
          {convertedValues.C !== undefined && <p>Celsius: {convertedValues.C.toFixed(2)}</p>}
          {convertedValues.K !== undefined && <p>Kelvin: {convertedValues.K.toFixed(2)}</p>}
          {convertedValues.F !== undefined && <p>Fahrenheit: {convertedValues.F.toFixed(2)}</p>}
        </div>

      )}

    </div>
  );
}

export default Conversor;