const prompt = require("prompt-sync")();

// Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let num = Number(prompt("Quantos números da sequência de Fibonacci quer ver?:  "));
if (num <= 0) {
    console.log("Por favor, insira um número maior que 0.");
} else {
    let a = 0, b = 1; 
    for (let i = 0; i < num; i++) {
        console.log(`${i}° ${a}`);
        let next = a + b;
        a = b;
        b = next;
    }
}
