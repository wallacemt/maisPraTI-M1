const prompt = require('prompt-sync')()
//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Ler o numero de maçãs compradas e calcular o valor.

let buyApples = Number(prompt("Quantas maçãs foram compradas: "))

if(buyApples < 12){
    let apples = 0.30
    let res = buyApples * apples
    console.log(`O valor total da compra é ${res.toFixed(2)}`)
}else{
    let apples = 0.25
    let res = buyApples * apples
    console.log(`O valor total da compra é ${res.toFixed(2)}`)
}
