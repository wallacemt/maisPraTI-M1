//Crie um objeto e intere com o for(in) sobre as propriedades é exibindo os valores no console.

const car = {
    marca: 'Volkswagen',
    modelo: 'Fusca',
    ano: 1972,
    cor: 'preto'
};

for(let attributes in car){
    console.log(`${attributes}:  ${car[attributes]}:`)
}