//Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço

let products = [
    {
        name: 'TV - Samsungo',
        price: 2500,
        desc: 10
    },
    {
        name: 'Notebook - Alianware',
        price: 8500,
        desc: 10
    },
    {
        name: 'Smartphone - Nokia',
        price: 600,
        desc: 10
    },
    {
        name: 'PS5',
        price: 1200,
        desc: 10
    },
    {
        name: 'Geladeira - Dako',
        price: 2700,
        desc: 10
    },
]

products.forEach((prod) => {
    let newProd = {}
    newProd.name = prod.name
    newProd.newPrice = prod.price - (prod.price * prod.desc / 100)
    console.log(`${newProd.name}, ${newProd.newPrice}`) 
})





