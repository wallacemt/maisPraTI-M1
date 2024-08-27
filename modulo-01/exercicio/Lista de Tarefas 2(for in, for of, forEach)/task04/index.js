// Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console.

const people = [
    {
        name: 'Enzo',
        age: 25,
        city: 'São Paulo'
    },
    {
        name: 'Clodoaldo',
        age: 30,
        city: 'Rio de Janeiro'
    },
    {
        name: 'Leisebele',
        age: 20,
        city: 'Salvador'
    },
    {
        name: "Lucivan",
        age: 22,
        city: 'Maranhão'
    }
];

for(const person of people){
    console.log(`Nome: ${person.name}, Idade: ${person.age}, Cidade: ${person.city}`);
}