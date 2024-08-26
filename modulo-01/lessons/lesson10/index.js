const prompt = require("prompt-sync")()

//1. Soma de elemento de um array com Function

// let sumArr = (arr) => {
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }

// let arr = [10, 20, 30, 45]

// console.log(sumArr(arr))

//2. Encontrando o maior valor no Array con function

// function findMax(arr){
//     let max = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max
// }

// let num = [0, 12, 443, 543, 5, 12]

// console.log(findMax(num))

//3. Reverter um Array

// function reverseArr(arr) {
//     return arr.reverse()
// }
// let num = [12, 34, 1, 23, 33]

// console.log(reverseArr(num))

//4.Criando um novo array com numeros pares

// function parArr(arr) {
//     let newArr = Array()
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// let num = [1, 3, 2, 4, , 323, 12, 34, 56, 78, 55, 46, 86]

// console.log(parArr(num))

// 5. Contando Ocorrencias de um valor

// function queryValue(arr, query) {
//     let occ = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === query){
//             occ++
//         }
//     }
//     return `O nùmero ${query} apareceu ${occ} vezes`
// }

// let query = Number(prompt("Digite o valor a ser buscado: "))

// let num = [1, 23, 4, 123, 3, 4,5 ,4, 3, 32, 44, 55, 36, 17, 22, 4, 1, 17, 22, 0, 0, 10]

// console.log(queryValue(num, query))

// let nome = "Equipe Olímpica"

// console.log("Equipe".length)
// console.log("Equipe".charAt(0))
// console.log(nome.indexOf('p'))

// //console.log("nome.replace("Eq", "Op")

// console.log(nome.substr(7, 8))

// console.log(nome.toUpperCase())
// console.log(nome.toLowerCase())

// console.log("-" + nome.trim() + '-')

//Matematicos

// console.log(Math.ceil(100.73))
// console.log(Math.floor(100.73))
// console.log(Math.round(100.73))
// console.log(Math.sqrt(100))
// console.log(Math.pow(100, 2))
// console.log(Math.cbrt(100))
// console.log(Math.abs(100, 20))
// console.log(Math.random())

//datas

// let date = new Date()

// console.log(date.getDate())
// console.log(date.getMonth() + 1)
// console.log(date.getFullYear())

// console.log(date.toString())

// date.setDate(date.getDate() + 720)

// console.log(date.toString())

// let date1 = new Date(2024, 7, 6)
// let date2 = new Date(2023, 7, 6)
// console.log(date1.toString())

// console.log(date1.getTime())
// console.log(date2.getTime())

// let miliseconds = Math.abs(date1.getTime() - date2.getTime())

// console.log(miliseconds)

// let mlsPerDay = (1 * 24 * 60 * 60 * 1000)
// console.log(`Um dia tem ${miliseconds} milisegundos`)


// console.log(`A diferença entre as datas e de ${Math.ceil(miliseconds/mlsPerDay)} dias`)



//Gerar número aleatório
//Dias entre duas datas
//Formatar data

//1. Inverter String

// function invertString(str){
//     let reverseStr = []
//     for(let i = str.length; i >= 0; i--){
//         if(str[i] != undefined){
//             reverseStr.push(str[i])
//         }
//     }
//     return reverseStr
// }
// console.log(invertString("Teste"))

//2.Contar vogais

function contVogais(str) {
    let cont = 0
    for (let i = 0; i < str.length; i++) {
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            cont++
        }
    }
    return cont
}

contVogais('Aamigão')