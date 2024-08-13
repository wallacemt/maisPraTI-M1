let prompt = require("prompt-sync")();
// Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

let f = 1;
let res = 1;
let num = Number(prompt("Digite um numero para calcular o Fatorial:"))

for(f = 1; f <= num; f++){
    res *= f;
}
console.log(`O fatorial de ${num} e: ${res}`);