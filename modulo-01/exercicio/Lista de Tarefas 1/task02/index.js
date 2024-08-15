const prompt = require("prompt-sync")();
//Recebe a idade do usuario e Clasifica a idade (criança < 14; adolescente > 14; adulto > 18; idoso > 60);
let classification = ['criança', 'adolescente', 'adulto', 'idoso'];

let ageUser = Number(prompt("Digite sua idade: "));

if(ageUser <= 14 ){
    console.log(`Com ${ageUser} anos: Classificação(${classification[0]})`);
}else if( ageUser > 14 && ageUser <= 18){
    console.log(`Com ${ageUser} anos: Classificação(${classification[1]})`);
}else if(ageUser >= 18 && ageUser <= 60){
    console.log(`Com ${ageUser} anos: Classificação(${classification[2]})`);
}else{
    console.log(`Com ${ageUser} anos: Classificação(${classification[3]})`);
}
