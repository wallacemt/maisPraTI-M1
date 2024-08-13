const prompt = require("prompt-sync")()

//--------Positivo ou negativo--------
// let num = prompt("Digite aqui: ")
// let positivoOuNegativo = (num < 0) ? "O numero e negativo": "Numero Positivo"
// console.log(positivoOuNegativo)

//--------Ano Bisexto--------
// let ano = prompt("Digite um ano: ")

// if(ano % 100 == 0 && ano % 4 == 0){
//     console.log(`O ano ${ano} e bisexto`)
// }else{
//     console.log(`O ano ${ano} nao é bisexto`)
// }

//--------Media com nota Conceito--------
// let priNota = parseFloat(prompt("Digite a 1° nota: "))
// let segNota = parseFloat(prompt("Digite a 2° nota: "))
// let terNota = parseFloat(prompt("Digite a 3° nota: "))

// let media = ((priNota + segNota + terNota) / 3).toFixed(1)


// if(media >= 9.5 && media < 10){
//         console.log(`Nota ${media} A+`)  
// }else if(media >= 9 && media < 9.5){
//     console.log(`Nota ${media} A`)
// }else if(media >= 8 && media <= 8.9){
//     console.log(`Nota ${media} A-`)
// }else if(media >=7.5 && media < 7.9){
//     console.log(`Nota ${media} B+`)
// }else if(media >= 7 && media <= 7.4){
//     console.log(`Nota ${media} B`)
// }else if(media >= 6.5 && media <= 6.9){
//     console.log(`Nota ${media} B-`)
// }else if(media >= 6.5 && media <= 6.4){
//     console.log(`Nota ${media} C+`)
// }else if(media >= 5.5 && media <= 5.9){
//     console.log(`Nota ${media} C`)
// }else if(media >= 5 && media <= 5.4){
//     console.log(`Nota ${media} C-`)
// }else{
//     console.log(`Nota ${media} D`)
// }

//--------Par ou impar--------

// let num = parseInt(prompt("Digite um numero: "))

// let parOuImpar = (num % 2 == 0)? `O Numero ${num} é Par`: `O Número ${num} è Impar`

// console.log(parOuImpar)

//--------Categoria de um nadador--------
// let idade = parseInt(prompt("Digite a idade: "))

// if(idade >= 5 && idade <= 7){
//     console.log(`Idade ${idade}: Categoria Infantil(A)`)
// }else if(idade >= 8 && idade <= 10){
//     console.log(`Idade ${idade}: Categoria Infantil(B)`)
// }else if(idade >= 11 && idade <= 13){
//     console.log(`Idade ${idade}: Categoria Infantil(B)`)
// }else if(idade >= 14 && idade <= 17){
//     console.log(`Idade ${idade}: Categoria Infantil(B)`)
// }else{
//     console.log(`Idade ${idade}: Categoria Adulto`)
// }


//--------Dia da semana (Switch)--------
// let diaDaSemanda = parseInt(prompt("Digite o dia da Semana (1 - 7) : "))

// switch(diaDaSemanda){
//     case 1:
//         console.log("Dia de Domingo")
//         break
//     case 2:
//         console.log("Dia de Segunda")
//         break
//     case 3:
//         console.log("Dia de Terça")
//         break
//     case 4:
//         console.log("Dia de Quarta")
//         break
//     case 5:
//         console.log("Dia de Quinta")
//         break
//     case 6:
//         console.log("Dia de Sexta")
//         break
//     case 7:
//         console.log("Dia de Sabado")
//         break
//     default:
//         console.log("Valor Invalido")
// }

//--------Calculando expressoes matematicas (Switch)--------

// let valorUm = parseInt(prompt("Digite um valor: "))
// let valorDois = parseInt(prompt("Digite outro valor: "))

// let operacao = prompt("Que operação deseja fazer?")

// switch(operacao){
//     case "+":
//         console.log(`${valorUm} +  ${valorDois} = ${valorUm + valorDois}`)
//         break
//     case "-":
//         console.log(`${valorUm} -  ${valorDois} = ${valorUm - valorDois}`)
//         break
//     case "*":
//         console.log(`${valorUm} *  ${valorDois} = ${valorUm * valorDois}`)
//         break
//     case "/":
//         console.log(`${valorUm} /  ${valorDois} = ${valorUm / valorDois}`)
//         break
//     default:
//         console.log("Valor Invalido!!")
//         break
// }

//--------Estaçoes do ano--------
// let season = parseInt(prompt("Digite qual e a estação(1-4): "))

// switch(season){
//     case 1:
//         console.log("Estação da Primavera")
//         break
//     case 2:
//         console.log("Estação do Verão")
//         break
//     case 3:
//         console.log("Estação do Outono")
//         break
//     case 4:
//         console.log("Estação do Inverno")
//         break
//     default:
//         console.log("Valor Invalido!!")
//         break
// }

//--------Verificando Faixa Etaria--------
// let idade = parseInt(prompt("Digite Sua idade: "))

// switch(true){
//     case (idade > 0 && idade <= 12):
//         console.log(`Idade ${idade} = Criança`)
//         break
//     case(idade >= 13 && idade <= 17):
//         console.log(`Idade ${idade} = Adolescente`)
//         break
//     case(idade >= 18 && idade <= 59):
//         console.log(`Idade ${idade} = Adulto`)
//         break
//     case(idade >= 60):
//         console.log(`Idade ${idade} = Idoso`)
//         break
//     default:
//         console.log("Valor Invalido")
//         break
// }

//--------Calculando IMC--------

// let peso = parseFloat(prompt("Digite seu Peso(kg): "))
// let altura = parseFloat(prompt("Digite Sua Altura(m): "))
// let imc = (peso / (altura * altura)).toFixed(2)

// switch(true){
//     case(imc <= 18.5):
//         console.log(`Seu IMC è ${imc} = Abaixo do peso`)
//         break
//     case(imc >= 18.6 && imc <= 24.5):
//         console.log(`Seu IMC è ${imc} = Peso normal`)
//         break
//     case(imc >= 24.6 && imc <= 29.9):
//         console.log(`Seu IMC è ${imc} = Sobrepeso`)
//         break
//     case(imc >= 30 && imc <= 34.9):
//         console.log(`Seu IMC è ${imc} = Obesidade grau I`)
//         break
//     case(imc >= 35 && imc <= 39.9):
//         console.log(`Seu IMC è ${imc} = Obesidade grau II`)
//         break
//     case(imc >= 40):
//         console.log(`Seu IMC è ${imc} = Obesidade grau III`)
//         break
//     default:
//         console.log("Valor Invalido!")
// }