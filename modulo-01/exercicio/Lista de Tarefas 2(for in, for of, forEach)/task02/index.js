//Criar um objeto 'livro' e verificar se a propriedade editra existe, se não adicionar a propriedade ao objeto

let book = {
    title: 'Código Limpo: Habilidades Práticas do Agile Software',
    author: 'Robert C. Martin',
    yearPub: 2012,
    gender: 'Technology'
}

for (let attributes in book) {
    if (attributes !== 'publisher') {
        book['publisher'] = 'Alta Books';
    }
}

for (let att in book) {
    console.log(`${att}: ${book[att]}`)	
}
