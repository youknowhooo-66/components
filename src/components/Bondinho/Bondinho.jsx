import React, { useState } from 'react';

function Bondinho() {
  const [alunos, setAlunos] = useState('');
  const [monitores, setMonitores] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularViagem = () => {
    const totalAlunos = parseInt(alunos);
    const totalMonitores = parseInt(monitores);
    const capacidadeMaxima = 50; // Limite máximo na viagem

    if (totalAlunos + totalMonitores <= capacidadeMaxima) {
      setResultado('S');
    } else {
      setResultado('N');
    }
  };

  return (
    <div>
      <h1>Verificar Viagem</h1>
      <div>
        <label>Quantidade de Alunos:</label>
        <input 
          type="text" 
          value={alunos} 
          onChange={(e) => setAlunos(e.target.value)} 
        />
      </div>
      <div>
        <label>Quantidade de Monitores:</label>
        <input 
          type="text" 
          value={monitores} 
          onChange={(e) => setMonitores(e.target.value)} 
        />
      </div>
      <button onClick={calcularViagem}>Calcular</button>
      {resultado && (
        <h2>Resultado: {resultado}</h2>
      )}
    </div>
  );
}

export default Bondinho;