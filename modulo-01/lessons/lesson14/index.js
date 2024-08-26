//Listas encadeadas

class Node {
    constructor(data) {
        this.data = data //O dado armazenado pelo nó
        this.next = null // referencia para o proximo nó da lista
    }
}

class LinkedList {
    constructor() {
        this.head = null // O primeiro nó da lista
        this.size = 0 // O numero de nós da lista
    }
    //adiciona um novo nó com o dado 'data' ao final da lista
    add(data) {
        let newNode = new Node(data)//O novo nó a ser adicionado

        if (this.head === null) {
            this.head = newNode//O primeiro nó da lista
        } else {
            let current = this.head//O primeiro nó da lista
            while (current.next !== null) {
                current = current.next//O proximo nó da lista
            }
            current.next = newNode//O proximo nó da lista
        }
        this.size++//O tamanho da lista
    }

    //Insere um elemento em qualquer posição da lista
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return console.log('Index fora dos limites!')//index fora dos limites
        }

        let newNode = new Node(data)//O novo nó a ser adicionado
        let current = this.head//O primeiro nó da lista
        let previous//O nó anterior

        if (index === 0) {
            newNode.next = this.head//O proximo nó da lista
            this.head = newNode//O primeiro nó da lista
        } else {
            for (let i = 0; i < index; i++) {
                previous = current//O nó anterior
                current = current.next//O proximo nó
            }
            newNode.next = current//O proximo nó da lista
            previous.next = newNode//O proximo nó da lista
        }

        this.size++//O tamanho da lista
    }
    removeFrom(index){
        if(index < 0 || index > this.sizeOfList){
            return console.log("Index fora dos limites!")
        }

        let current = this.head
        let previous

        if(index === 0){
            this.head = current.next 
        }else{
            for(let i = 0; i < index; i++){
                previous = current
                current = current.next
            }
            this.size = this.size - 1 //O tamanho da lista
            return current.data //Retorna o dado
        }
    }

    indexOf(data){
        let current = this.head
        let index = 0
        while(current !== null){
            if(current.data === data){
                return index//Retorna o indice
            }
            index++//Incrementa o indice
            current = current.next//O proximo nó
        }
        return -1
    }

    sizeOfList(){
        return this.size //Retorna o tamanho
    }
    printList() {
        let current = this.head//O primeiro nó
        while (current !== null) {
            console.log(current.data)//Imprime o dado
            current = current.next//O proximo nó
        }
    }
}

let list = new LinkedList(); //Cria uma nova lista

list.add("Elemento 0")//Adiciona um novo elemento
list.add("Elemento 1")
list.add("Elemento 2")
list.add("Elemento 3")

list.removeFrom(2)//Remove o elemento de indice 2

console.log(list.indexOf("Elemento 0")) //Retorna o indice
list.printList() //Imprime a lista

console.log(list.sizeOfList()) //Retorna o tamanho


