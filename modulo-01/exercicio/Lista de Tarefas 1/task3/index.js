const prompt = require("prompt-sync")();
//Receber uma nota de 0 a 10 e clasificar ( nota > 7 = aprovado; nota < 7 e > 5 = recuperação; nota < 5 = reprovado);

let noteStudent = Number(prompt("Digite a nota no aluno: "));

if(noteStudent >= 7){
    console.log(`Com nota ${noteStudent}: Aluno Aprovado`);
}else if(noteStudent < 7 && noteStudent >= 5){
    console.log(`Com nota ${noteStudent}: Aluno em Recuperação`);
}else{
    console.log(`Com nota ${noteStudent}: Aluno Reprovado`);
}
