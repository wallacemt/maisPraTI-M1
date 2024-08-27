//Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.


let stock = [
    {
        product: "Cafe - Pilão",
        quantity: 10,
        minimun: 15
    },
    {
        product: "Feijão - Kicaldo",
        quantity: 12,
        minimun: 15
    },
    {
        product: "Leite - Piracanjuba",
        quantity: 11,
        minimun: 15
    },
    {
        product: "Açucar - Cristal",
        quantity: 9,
        minimun: 15
    },
    {
        product: "Arroz - Emoções",
        quantity: 25,
        minimun: 15
    }
]

stock.forEach((sto) => {
    if(sto.quantity < sto.minimun){
        sto.quantity *= 2;
    }
})

for(let prod in stock){
    console.log(`${stock[prod].product}: ${stock[prod].quantity}`);
}