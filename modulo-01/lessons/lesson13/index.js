// Exercício 1:

// const professor = {
//     name: 'João',
//     subject: 'Programação',
//     grades: {
//         aluno1: 10.0,
//         aluno2: 9.2,
//         aluno3: 8.2,
//         aluno4: 7.3,
//         aluno5: 3.0
//     }
// };

// let sumGrades = 0;
// let numberStudents = 0;

// for(let alunos in professor.grades){
//     sumGrades+= professor.grades[alunos];
//     numberStudents++;
// };

// const media = sumGrades / numberStudents;

// if(media >= 6){
//     console.log(`Com media ${media.toFixed(2)} os aunos do professor ${professor.name}, esta acima da media de aprovação`)
// }else{
//     console.log(`Com media ${media.toFixed(2)} os aunos do professor ${professor.name}, esta abaixo da media de aprovação`)
// };

// Exercício 2

// const libarry = [
//     {title: "O Hobbit", author: "J.R.R. Tolkien", year: 1937},
//     {title: "Harry Potter e a pedra filosofal", author: "J.K. Rowling", year: 1997},
//     {title: "Entendendo Algoritmos", author: "Brian Christian", year: 2016},
//     {title: "C#", author: "J.R.R. Tolkien", year: 1950},
//     {title: "C++", author: "Bjarne Stroustrup", year: 1979},
//     {title: "Java", author: "Herbert Schildt", year: 1995},
//     {title: "Python", author: "Guido van Rossum", year: 1989},
// ]

// for(let book of libarry){
//     if(book.year < 2000){
//         console.log(`O Livro ${book.title} escrito por ${book.author} foi publicado em ${book.year}`)
//     }
// }


//exercício 3
/*
    Objetivo: Contar a quantidade de filmes por gênero.
    Use o método forEach para iterar sobre o array filmes.
    Para cada filme, verifique se o gênero já existe no objeto de contagem. 
    Se existir, incremente a contagem; se não, adicione o gênero ao objeto com a contagem inicial de 1.
*/


const movies = [{
    title: "Harry Potter e a pedra filosofal",genero:"Fantasia",},
    {title: "Harry Potter e a camara secreta",genero:"Fantasia",},
    {title: "Matrix",genero:"Ficcão Cientifica",},
    {title: "O Hobbit",genero:"Fantasia",},
    {title: "Duro de matar",genero:"Ação",},
    {title: "Eragon",genero:"Fantasia",},
    {title: "O menino e a garça",genero:"Animação",},
];
let genreCount = {};

movies.forEach((movie) => {
    if(genreCount[movie.genero]){
        genreCount[movie.genero]++;
    }else{
        genreCount[movie.genero] = 1;
    }
});

for(let genre in genreCount){
    console.log(`Existem ${genreCount[genre]}  filmes com gênero ${genre}`)
}
