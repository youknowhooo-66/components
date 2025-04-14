import React, { useState, useEffect } from "react";
import axios from "axios";

function ConversorMoedas() {
  const [moedaOrigem, setMoedaOrigem] = useState("USD");
  const [moedaDestino, setMoedaDestino] = useState("BRL");
  const [valor, setValor] = useState(0);
  const [resultado, setResultado] = useState(null);
  const [taxas, setTaxas] = useState({});

  useEffect(() => {
    const apiKey = "1b037964a248b5af2ea2a7d4d1c78cca"; // Use diretamente sua chave aqui para teste
    axios
      .get(`https://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`)
      .then((response) => {
        setTaxas(response.data.rates);
      })
      .catch((error) => {
        console.error("Erro ao buscar taxas de câmbio:", error);
      });
  }, []);

  const Converter = (e) => {
    e.preventDefault();

    if (taxas[moedaOrigem] && taxas[moedaDestino]) {
      const taxaOrigem = taxas[moedaOrigem];
      const taxaDestino = taxas[moedaDestino];
      const valorConvertido = (valor / taxaOrigem) * taxaDestino;
      setResultado(valorConvertido.toFixed(2));
    }
  };

  return (
    <div className="container">
      <h1>Conversor de Moedas</h1>
      <form onSubmit={Converter}>
        <div className="mb-3">
          <label htmlFor="valor">Valor:</label>
          <input
            type="number"
            id="valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="moedaOrigem">Moeda de origem:</label>
          <select
            id="moedaOrigem"
            value={moedaOrigem}
            onChange={(e) => setMoedaOrigem(e.target.value)}
            className="form-control"
          >
            {Object.keys(taxas).map((moeda) => (
              <option key={moeda} value={moeda}>
                {moeda}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="moedaDestino">Moeda de destino:</label>
          <select
            id="moedaDestino"
            value={moedaDestino}
            onChange={(e) => setMoedaDestino(e.target.value)}
            className="form-control"
          >
            {Object.keys(taxas).map((moeda) => (
              <option key={moeda} value={moeda}>
                {moeda}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Converter
        </button>
      </form>

      {resultado && (
        <div className="mt-3">
          <h2>Resultado: {resultado} {moedaDestino}</h2>
        </div>
      )}
    </div>
  );
}

export default ConversorMoedas;