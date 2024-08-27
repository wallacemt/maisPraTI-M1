//Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.


const sales = [
    {
        product: 'Monitor - Samsungo',
        quantity: 10,
        price: 1200
    },
    {
        product: 'CPU - Ryzen 7',
        quantity: 7,
        price: 1300
    },
    {
        product: 'Teclado - Redragon Mitra',
        quantity: 15,
        price: 350
    },
    {
        product: 'Mouse - Logitech',
        quantity: 21,
        price: 470
    },
    {
        product: 'Gabinete - Lianli',
        quantity: 6,
        price: 1050
    },
    {
        product: 'Placa de Video - RTX4080',
        quantity: 20,
        price: 13000
    }
];


let contSales = 0;
sales.forEach((sale) => {
    contSales = sale.price * sale.quantity;
    contSales += contSales;
})
console.log(`O valor total de vendas foi ${contSales}US$`);