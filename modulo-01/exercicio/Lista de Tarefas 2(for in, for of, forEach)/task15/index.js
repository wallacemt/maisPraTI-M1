//Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.


const transactions = [
    {
        type: 'entrada',
        value: 100
    },
    {
        type: 'saiáda',
        value: 50
    },
    {
        type: 'entrada',
        value: 200
    },
    {
        type: 'saiáda',
        value: 100
    },
    {
        type: 'entrada',
        value: 100
    },
    {
        type: 'entrada',
        value: 1500
    }
];

let balance = 0
transactions.forEach(transaction => {
    if(transaction.type === 'entrada'){
        balance += transaction.value
    }else{
        balance -= transaction.value
    }
})
console.log(`O valor final foi: ${balance.toFixed(2)}R$`)