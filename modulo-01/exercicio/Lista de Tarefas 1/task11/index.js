const prompt = require("prompt-sync")();

//Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

let sum = 0;
let num = 0
for(let i = 1; i <= 5; i++){
    num = Number(prompt(`Digite o ${i}° Número: `));
    sum += num;
}
console.log(`A soma total foi: ${sum}`);