const prompt = require("prompt-sync")()


// //somando valores do array
// let sum = 0
// let arr = [10, 20, 30, 40]

// //console.log(arr)

// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }

//console.log(sum)

//Escontrando o maior valor em um array

// let arr = [10, 20, 40, 60, 90]
// let maior = arr[0]
// for(let i = 1; i < arr.length; i++){
//     if(arr[i] > maior){
//         maior = arr[i]
//     }
// }

// console.log(maior);

//Revertendo aray

// let arr = [10, 20, 44, 12]

// for(let i = arr.length - 1; i >= 0; i--){
//     console.log(arr[i])
// }

// Criar um aray contentdo apenas numeros pares

// let arr = [1, 2,  43, 545, 32, 23, 66, 45, 11, 33, 21]

// let parArr = []
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//         parArr.push(arr[i])
//     }
// }

// console.log(parArr)


// Contar Ocorrencias de um valor

// let arr = [10, 20, 33, 10, 21, 12]
// let value = Number(prompt("Insira o valor a ser pesquisado: "))
// let cont = 0

// for(let i = 0; i < arr.length; i++){   
//     if(arr[i] === value){
//         cont++
//     }
// }
// console.log(`O Numero ${value} apareceu ${cont} vezes.`)

// console.log(arr)


//arrays/vetores Multidirecionais

let matrizOne = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let matrizTwo = [
    [1,2,3],
    [4,5,6],
    [7,8,9,]
]

if(matrizOne.length !== matrizTwo.length || matrizOne[0].length !== matrizTwo[0].length){
    throw new Error("Os arrays devem ser iguais")
}

let result = []
for(let x = 0; x< matrizOne.length; x++){
    let somalinha = []
    for(let y= 0; y < matrizOne[x].length; y++){
        somalinha.push(matrizOne[x][y] + matrizTwo[x][y])     
    }
    result.push(somalinha)
}

console.table(result)