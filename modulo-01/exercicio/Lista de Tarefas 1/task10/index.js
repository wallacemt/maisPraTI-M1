const prompt = require("prompt-sync")();
//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let num = Number(prompt("Digite um numero: "));

for(let i = 1; i < 11; i++){
    console.log(`${num} ${i}° vez`);
}
