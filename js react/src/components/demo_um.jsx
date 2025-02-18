import './demo_um.css'
const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
function Demo_um(numero){
    const numerosDobrados = numeros.map(function(numero){
    return numero * 2
    
})
console.log(numerosDobrados);
};


export default Demo_um;