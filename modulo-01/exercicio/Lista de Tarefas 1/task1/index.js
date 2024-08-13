const prompt = require('prompt-sync')();

//Recebe um valor é verifica se o numero inteiro e par ou impar

let num = Number(prompt("Digite um número: "));

if(num % 2 == 0){
    console.log(`O número ${num} é par`);
}else{
    console.log(`O número ${num} é impar`);
}