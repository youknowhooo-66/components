function demo_reduce(){

    const contasPagar = [
        { nome: "Aluguel", data: "2024-02-10", valor: 1500, situacao: "pendente" },
        { nome: "Energia", data: "2024-02-15", valor: 200, situacao: "pendente" },
        { nome: "Internet", data: "2024-02-20", valor: 100, situacao: "pendente" },
        { nome: "Água", data: "2024-02-25", valor: 80, situacao: "pendente" }
    ];
    
    const totalAPagar = contasPagar.reduce(function(acumulador, conta) {    
        
        return acumulador + conta.valor
    
    }, 0)
    console.log(totalAPagar)
    }
    export default demo_reduce;