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
        let newNode = new Node(data)

        if (this.head === null) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next !== null) {
                current = current.next
            }

            current.next = newNode
        }
        this.size++
    }

    //Insere um elemento em qualquer posição da lista
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return console.log('Index fora dos limites!')
        }

        let newNode = new Node(data)
        let current = this.head
        let previous

        if (index === 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            for (let i = 0; i < index; i++) {
                previous = current
                current = current.next
            }
            newNode.next = current
            previous.next = newNode
        }

        this.size++
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
            this.size = this.size - 1
            return current.data
        }
    }

    indexOf(data){
        let current = this.head
        let index = 0
        while(current !== null){
            if(current.data === data){
                return index
            }
            index++
            current = current.next
        }
        return -1
    }

    sizeOfList(){
        return this.size
    }
    printList() {
        let current = this.head
        while (current !== null) {
            console.log(current.data)
            current = current.next
        }
    }
}

let list = new LinkedList();

list.add("Elemento 0")
list.add("Elemento 1")
list.add("Elemento 2")
list.add("Elemento 3")
list.removeFrom(2)

console.log(list.indexOf("Elemento 0"))
list.printList()

console.log(list.sizeOfList())


