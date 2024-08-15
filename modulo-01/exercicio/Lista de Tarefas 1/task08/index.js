const prompt = require('prompt-sync')();

//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

let numberTwo
let numberOne
do{
    numberOne = Number(prompt("Digite um numero: "));
    numberTwo = Number(prompt("Digite o segundo número: "));
    if(numberOne === numberTwo){
        console.log("Digite numeros Diferentes!");
    }
}while(numberOne === numberTwo);

if(numberOne > numberTwo){
    console.log(` Os valores na ordem crescente: ${numberOne}, ${numberTwo}`);
}else{
    console.log(`Os valores na ordem crescente: ${numberTwo}, ${numberOne}`)
}