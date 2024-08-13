const prompt = require('prompt-sync')();
// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

let tabNumber = Number(prompt("Digite o número que quer ver a tabuada: "))
for(let i = 1; i <= 10; i++){
    console.log(`${i} x ${tabNumber} = ${tabNumber * i}`);
}