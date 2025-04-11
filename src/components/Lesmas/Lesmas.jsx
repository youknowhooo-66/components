import React, { useState } from 'react';

function Lesmas() {
  const [numLesmas, setNumLesmas] = useState('');
  const [velocidades, setVelocidades] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularNivel = () => {
    // - O método split(' ') divide a string em um array de substrings, usando o espaço como delimitador.
    // - O método map(Number) converte cada substring em um número.
    const velocidadesArray = velocidades.split(' ').map(Number);
    const maisVeloz = Math.max(...velocidadesArray);
    // - Math.max(...):- A função Math.max encontra o maior valor de um conjunto de números.
    // O operador ... é chamado de "spread operator" e serve para espalhar os valores de um array.

    let nivel = '';
    if (maisVeloz < 10) {
      nivel = '1';
    } else if (maisVeloz >= 10 && maisVeloz < 20) {
      nivel = '2';
    } else {
      nivel = '3';
    }

    setResultado(nivel);
  };

  return (
    <div>
      <h1>Corrida de Lesmas</h1>
      <div>
        <label>Quantidade de Lesmas:</label>
        <input
          type="text"
          value={numLesmas}
          onChange={(e) => setNumLesmas(e.target.value)}
        />
      </div>
      <div>
        <label>Velocidades (separadas por espaço):</label>
        <input
          type="text"
          value={velocidades}
          onChange={(e) => setVelocidades(e.target.value)}
        />
      </div>
      <button onClick={calcularNivel}>Calcular Nível</button>
      {resultado && (
        <h2>Nível da Lesma Mais Veloz: {resultado}</h2>
      )}
    </div>
  );
}

export default Lesmas;