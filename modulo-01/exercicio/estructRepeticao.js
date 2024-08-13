const prompt = require("prompt-sync")()
//1- Imprima a sequência de Fibonacci até o 10º termo

// let a = 0
// let b = 1;
// let nTermos = parseInt(prompt("Deseja ver ate qual termo de Fibonacci?: "))
// for(let i = 1; i <= nTermos; i++){
//     console.log(`${i}° = ${a}`)
//     let pos = a + b
//     a = b;
//     b = pos
// }

//2 - Verifique se um número é primo
// let numUser = parseInt(prompt("Digite um Número: "))

// if (numUser <= 1) {
//     console.log(`O número ${numUser} não é primo`);
// } else {
//     let isPrime = true; 
//     for (let i = 2; i <= Math.sqrt(numUser); i++) { 
//         if (numUser % i === 0) {
//             isPrime = false; 
//             break; 
//         }
//     }
//     if (isPrime) {
//         console.log(`O número ${numUser} é primo`);
//     } else {
//         console.log(`O número ${numUser} não é primo`);
//     }
// }


//Calculando e mostrando o MDC

// let num1 = parseInt(prompt("Digite o 1° valor: "))
// let num2 = parseInt(prompt("Digite o 2° valor: "))


// let a = num1
// let b = num2

// do{
//     let temp = b
//     b = a %  b
// }while(b != 0)

// const MDC = a

// console.log(`O maior divisor comum de ${num1} + ${num2} è ${MDC}`)

//50 Primos maiores que 100
// let cont = 0
// let num = 100

// do{
//     let primo = 0
//     for(let i = 0; i <= num; i++){
//         if(num % i === 0){
//             primo++
//         }
//     }
//     if(primo === 2){
//         console.log(num)
//         cont++
//     }
//     num++
// }while(cont < 50)