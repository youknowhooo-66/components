import React, { useState } from 'react';

function Pum() {
  const [valorN, setValorN] = useState('');
  const [resultado, setResultado] = useState([]);

  const gerarSequencia = () => {
    const N = parseInt(valorN);
    const sequencia = [];
    let contador = 1;

    for (let i = 0; i < N; i++) {
      const linha = `${contador} ${contador + 1} ${contador + 2} PUM`;
      sequencia.push(linha);
      contador += 4;
    }

    setResultado(sequencia);
  };

  return (
    <div>
      <h1>Sequência PUM</h1>
      <div>
        <label>Digite o valor N:</label>
        <input 
          type="text" 
          value={valorN} 
          onChange={(e) => setValorN(e.target.value)} 
        />
      </div>
      <button onClick={gerarSequencia}>Gerar Sequência</button>
      <div>
        <h2>Resultado:</h2>
        {resultado.map((linha, index) => (
          <p key={index}>{linha}</p>
        ))}
      </div>
    </div>
  );
}

export default Pum;