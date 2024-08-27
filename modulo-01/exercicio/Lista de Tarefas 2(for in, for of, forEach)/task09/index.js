//Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.

const clients = [
    {
        name: "Joao",
        age: 22,
        city: "Acre"
    },
    {
        name: "Waldisney",
        age: 32,
        city: "Ceara"
    },
    {
        name: "Jenivalda",
        age: 42,
        city: "São Paulo"
    },
    {
        name: "Viktor",
        age: 19,
        city: "Belem"
    },
    {
        name: "Katrina",
        age: 52,
        city: "Piauí"
    }
];

let cont = 0;
clients.forEach((cli) => {
    if(cli.age > 30){
        cont++;
    }
});

console.log(`O numero de cliente com mais de 30 anos é: ${cont}`)


