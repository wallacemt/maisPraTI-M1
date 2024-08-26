let prompt = require("prompt-sync")();
// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

let value = 0;
let cont = 0;
let sum = 0;
do{
    value = Number(prompt("Digite um número (>press 0 for stop<): "))
    if(value != 0 ){
        sum += value;
        cont++;
    }
}while(value != 0);

let med = sum / cont;
console.log(`A media dos valores digitado é ${med.toFixed(2)}`);

