import React from "react";

import Bondinho from "./components/Bondinho/Bondinho";
import Calculadora from "./components/Calculadora/Calculadora";
import Cinema from "./components/Cinema/Cinema";
import Classificacao from "./components/Classificacao/Classificacao";
import ConversorMoedas from "./components/DOIS/Moedas";
import Gasolina from "./components/Gasolina/Gasolina";
import Lesmas from "./components/Lesmas/Lesmas";
import Pum from "./components/PUM/Pum";
import Conversor from "./components/UM/Conversor";
import Toggler from "./components/ZERO/Avisador";

function App(){

  return(
    <>

    <Cinema />
    <Gasolina />
    <Pum />
    <Lesmas />
    <Classificacao />
    <Cinema />
    <Calculadora />
    <Bondinho />
    <Toggler />
    <Conversor />
    <ConversorMoedas />

    </>
  )
}
export default App;