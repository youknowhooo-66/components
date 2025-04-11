import React, { useState } from 'react';

function Cinema() {
  const [valorAntigo, setValorAntigo] = useState('');
  const [valorNovo, setValorNovo] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularAumento = () => {
    const antigo = parseFloat(valorAntigo);
    const novo = parseFloat(valorNovo);

    if (antigo > 0 && novo >= antigo) {
      const aumentoPercentual = ((novo - antigo) / antigo) * 100;
      setResultado(aumentoPercentual.toFixed(2) + '%');
    } else {
      setResultado('Entrada inválida');
    }
  };

  return (
    <div>
      <h1>Calculadora de Aumento Percentual</h1>
      <div>
        <label>Valor antigo:</label>
        <input 
          type="text" 
          value={valorAntigo} 
          onChange={(e) => setValorAntigo(e.target.value)} 
        />
      </div>
      <div>
        <label>Valor novo:</label>
        <input 
          type="text" 
          value={valorNovo} 
          onChange={(e) => setValorNovo(e.target.value)} 
        />
      </div>
      <button onClick={calcularAumento}>Calcular</button>
      <h2>Resultado: {resultado}</h2>
    </div>
  );
}

export default Cinema;