
function demo_filter(){
    const numeros = [1, 2, 3, 4, 5]
    const numerosPares = numeros.filter(function(numero){

    
        return numero % 2 === 0;
    
  
        }
    )
console.log(numerosPares);
}

export default demo_filter;
