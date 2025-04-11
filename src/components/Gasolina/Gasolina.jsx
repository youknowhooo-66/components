import React, { useState } from 'react';

function Gasolina() {
  const [alcool, setAlcool] = useState(0);
  const [gasolina, setGasolina] = useState(0);
  const [diesel, setDiesel] = useState(0);
  const [mensagem, setMensagem] = useState('');

  const Entrada = (tipo) => {
    if (tipo === 1) {
      setAlcool(alcool + 1);
    } else if (tipo === 2) {
      setGasolina(gasolina + 1);
    } else if (tipo === 3) {
      setDiesel(diesel + 1);
    } else if (tipo === 4) {
      setMensagem('MUITO OBRIGADO');
    }
  };
 
  return (
    <div>
      <h1>Contador de Combustível</h1>
{/* Renderização condicional: Se o tipo final for selecionado (4), exibimos os resultados; caso contrário, 
os botões continuam disponíveis para registrar os abastecimentos. */}
        {mensagem ? (
        <>
          <h2>{mensagem}</h2>
          <p>Alcool: {alcool}</p>
          <p>Gasolina: {gasolina}</p>
          <p>Diesel: {diesel}</p>
        </>
      ) : (
        <div>
          <button onClick={() => Entrada(1)}>Alcool</button>
          <button onClick={() => Entrada(2)}>Gasolina</button>
          <button onClick={() => Entrada(3)}>Diesel</button>
          <button onClick={() => Entrada(4)}>Finalizar</button>
        </div>
      )}
    </div>
  );
}

export default Gasolina;