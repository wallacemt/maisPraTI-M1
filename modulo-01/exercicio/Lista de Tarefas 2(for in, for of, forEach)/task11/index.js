//Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.

const orders = [
    {
        cliente: 'Benjamin',
        produto: 'Maçã',
        quantidade: 3
    },
    { 
        cliente: 'Pedro', 
        produto: 'Banana', 
        quantidade: 2 
    },
    { 
        cliente: 'Maria', 
        produto: 'Laranja', 
        quantidade: 1 
    },
    { 
        cliente: 'Pedro', 
        produto: 'Maçã', 
        quantidade: 4 
    },
    { 
        cliente: 'Maria', 
        produto: 'Pera', 
        quantidade: 5 }
];

const totForClient = {};
orders.forEach(order => {
    if (!totForClient[order.cliente]) {
        totForClient[order.cliente] = 0;
    }
    totForClient[order.cliente] += order.quantidade;
});
console.log(totForClient);
