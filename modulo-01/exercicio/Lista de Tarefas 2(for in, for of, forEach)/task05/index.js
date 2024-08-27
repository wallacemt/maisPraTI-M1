//Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.


const students = [
    {
        name: 'Enzo',
        nota1: 6,
        nota2: 7,
        nota3: 5
    },
    {
        name: 'Caio',
        nota1: 8,
        nota2: 9,
        nota3: 1
    },
    {
        name: 'Beatriz',
        nota1: 10,
        nota2: 9,
        nota3: 10
    },
    {
        name: "Natalia",
        nota1: 6,
        nota2: 9,
        nota3: 7
    },
    {
        name: "Wallace",
        nota1: 10,
        nota2: 10,
        nota3: 10
    }
];

for(let student of students){
    let media = (student.nota1 + student.nota2 + student.nota3)  / 3
    console.log(`Aluno: ${student.name}, Media: ${media.toFixed(1)}`)
}
