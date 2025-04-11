import { useState } from "react";

function Classificacao(){
    const [notaA, setNotaA] = useState('')
    const [notaB, setNotaB] = useState('')
    const [resultado, setResultado] = useState('')
    const [classif, setClassif] = useState('')
    
    function TratarN2(event){
        setNotaB(event.target.value)
        setResultado('')
    }

    function verificar(){

        const resultadoATZ = ( (Number(notaA) + Number(notaB)) / 2 )
        setResultado(resultadoATZ)

        if(resultadoATZ <= 10 && resultadoATZ >= 7.5){
            setClassif('Aprovado')
        }
        if(resultadoATZ < 7.5 && resultadoATZ >= 5){
            setClassif('Reprovado')
        }
        if(resultadoATZ < 5 && resultadoATZ >= 0){
            setClassif(' de Recuperação')
        }

    }



    return(
        <>
        <input
        type="number"
       value={notaA}
       onChange={(event) => setNotaA(event.target.value)}
       placeholder="Digite sua Primeira nota: "
       />
        <br />
        <input
        type="number"
       value={notaB}
       onChange={TratarN2}
       placeholder="Digite sua Segunda nota: "
       />
        <br />
       <button onClick={verificar}>Somar</button>
       
       <br />

       A soma das notas, corresponde á: {resultado}, logo voce está: {classif}
        
        </>
    )
}

export default Classificacao;