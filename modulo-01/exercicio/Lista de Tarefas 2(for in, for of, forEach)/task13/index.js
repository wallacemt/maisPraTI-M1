//Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho

let cart = {
    items: [
        {
            name: "Mouse - Redragon",
            quantity: 1,
            unitaryPrice: 200 
        },
        {
            name: "Teclado - Redragon",
            quantity: 1,
            unitaryPrice: 300
        },
        {
            name: "Monitor - Samsungo",
            quantity: 1,
            unitaryPrice: 1000
        },
        {   
            name: "Gabinete - Lianli",
            quantity: 1,
            unitaryPrice: 500
        },
        {
            name: "CPU - Ryzen 7",
            quantity: 1,
            unitaryPrice: 2000
        },
        {
            name: "SSD - Kingston",
            quantity: 1,
            unitaryPrice: 500
        },
        {
            name: "Placa Mãe - MSI",
            quantity: 1,
            unitaryPrice: 2000
        },
        {
            name: "Memória RAM - Corsair",
            quantity: 1,
            unitaryPrice: 500
        },
        {
            name: "Cooler - Gamdias",
            quantity: 1,
            unitaryPrice: 400
        },
        {
            name: "Fonte - Corsair",
            quantity: 1,
            unitaryPrice: 660
        },
        {
            name: "Cadeira - Corsair",
            quantity: 1,
            unitaryPrice: 200
        },
        {
            name: "Placa de Video - MSI",
            quantity: 1,
            unitaryPrice: 2000
        }
    ]
}

let totValue = 0;
cart.items.forEach((item) => {
    totValue += item.unitaryPrice;
})

console.log(`O valor total no carrinho é ${totValue.toFixed(2)}R$`);