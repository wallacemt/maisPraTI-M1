const prompt = require('prompt-sync')();
//Cria um menu interativo com switch Case

console.log("--Opções--\n[1] Monstrar que dia e hoje\n[2] Monstrar em que ano estamos\n[3] Mostar a hora atual")
let changeOption = Number(prompt("Digite uma opção: "));

let date = new Date()

switch(changeOption){
    case 1:
        console.log(`Hoje é dia ${date.getDate()}`);
        break
    case 2:
        console.log(`O ano atual é ${date.getFullYear()}`);
        break
    case 3:
        console.log(`Agora são ${date.getHours()}h00`);
        break
    default:
        console.log("Valor invalido! tente novamente.");
}

