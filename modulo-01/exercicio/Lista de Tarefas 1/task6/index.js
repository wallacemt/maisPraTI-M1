const prompt = require("prompt-sync")();

// Ler três valores de um triângulo e dizer o tipo do triângulo
let a = Number(prompt('Digite o 1° lado: '));
let b = Number(prompt('Digite o 2° lado: '));
let c = Number(prompt('Digite o 3° lado: '));

if(a < b + c && b < a + c && c < a + b){
    if(a === b && b === c){
        console.log("Os dados fornecidos formam um Triângulo Equilátero");
    } else if(a === b || b === c || a === c){
        console.log("Os dados fornecidos formam um Triângulo Isósceles");
    } else {
        console.log("Os dados fornecidos formam um Triângulo Escaleno");
    }
}else{
    console.log("Os valores não formam um triângulo!");
}
