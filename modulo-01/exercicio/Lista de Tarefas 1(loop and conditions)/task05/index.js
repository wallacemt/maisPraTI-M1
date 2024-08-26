const prompt = require("prompt-sync")();
//Calcular IMC do usuario

let peso = parseFloat(prompt("Digite seu Peso(kg): "));
let altura = parseFloat(prompt("Digite Sua Altura(m): "));
let imc = (peso / (altura * altura)).toFixed(2);

switch(true){
    case(imc <= 18.5):
        console.log(`Seu IMC è ${imc} = Abaixo do peso`);
        break
    case(imc >= 18.6 && imc <= 24.5):
        console.log(`Seu IMC è ${imc} = Peso normal`);
        break
    case(imc >= 24.6 && imc <= 29.9):
        console.log(`Seu IMC è ${imc} = Sobrepeso`);
        break
    case(imc >= 30 && imc <= 34.9):
        console.log(`Seu IMC è ${imc} = Obesidade grau I`);
        break
    case(imc >= 35 && imc <= 39.9):
        console.log(`Seu IMC è ${imc} = Obesidade grau II`);
        break
    case(imc >= 40):
        console.log(`Seu IMC è ${imc} = Obesidade grau III`);
        break
    default:
        console.log("Valor Invalido!");
}