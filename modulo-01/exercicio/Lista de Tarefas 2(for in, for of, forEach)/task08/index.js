//Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes.

const movies = [
    {
        title: 'Matrix',
        director: 'Wachowski',
        year: 1999
    },
    {
        title: 'Avengers',
        director: 'Joss Whedon',
        year: 2012
    },
    {
        title: 'Star Wars',
        director: 'George Lucas',
        year: 1977
    },
    {
        title: 'Indiana Jones',
        director: 'Steven Spielberg',
        year: 1987
    },
    {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: 1994
    },
    {
        title: "Um drink no inferno",
        director: "Quentin Tarantino",
        year: 1994
    },
    {
        title: 'Lord of the Rings',
        director: 'Peter Jackson',
        year: 2001
    },
    {
        title: "Cidade de Deus",
        director: "Fernando Meirelles",
        year: 2002
    }
]



const movName = [];
movies.forEach((mov) => {
    movName.push(mov.title);
})

for(let index in movName){
    console.log(`Filme[${index}]: ${movName[index]}`)
}