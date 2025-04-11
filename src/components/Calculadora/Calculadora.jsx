import { useState } from "react";

function Calculadora(){
    const [inputUm, setInputUm] = useState('')
    const [inputDois, setInputDois] = useState('')
    const [resultado, setResultado] = useState('')

    function TratarN2(event){
        setInputDois(event.target.value)
        setResultado('')
    }
    function somar(){
        setResultado(Number(inputUm) + Number(inputDois))
        limpar()
      }
      function subtrair(){
        setResultado(Number(inputUm) - Number(inputDois))
      }
      function multiplicar(){
        setResultado(Number(inputUm) * Number(inputDois))
      }
      function dividir(){
        setResultado(Number(inputUm) / Number(inputDois))
      }
      function limpar(){
        setInputUm('')
        setInputDois('')
      }
    return(

        <div id="container">

        <input 
        type="number"
        placeholder="Digite um numero: "
        value={inputUm}
        onChange={(event) => setInputUm(event.target.value)}
        />  #️⃣
        <input 
        type="text"
        placeholder="Digite outro numero: "
        value={inputDois}
        onChange={TratarN2}
        />
      <div>
        <button onClick={somar}>➕</button>
        <button onClick={subtrair}>➖</button>
        <button onClick={multiplicar}>✖️</button>
        <button onClick={dividir}>➗</button>
        <button onClick={limpar}>🔱</button>
      </div>
      <div>
      🟰{resultado}
      </div>
    </div>

    ) 
}
export default Calculadora;