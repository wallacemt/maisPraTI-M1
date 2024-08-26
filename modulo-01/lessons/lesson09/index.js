let thingsListst = Array()

// thingsLists["hardware"] = Array()
// thingsLists['fruits'] = Array()
// thingsLists["Poeple"] = Array("Piton", "Welber")

// thingsLists['hardware'][0] = "Notebook"
// thingsLists['hardware'][1] = "Mouse"
// thingsLists['hardware'][2] = "Teclado"
// thingsLists["fruits"][0] = "Orange"
// thingsLists["fruits"] = "Apple"

// let fruitsList = Array()

// fruitsList[0] = "Maça"
// fruitsList[1] = "Banana"
// fruitsList[2] = "Melancia"
// fruitsList[3] = "Uva"
// fruitsList[4] = "Morango"

// console.log(fruitsList.sort())
// let index = fruitsList.indexOf("Maça")

// if(index === -1){
//     console.log("O Elemento nao existe")
// }else{
//     console.log(`Elemento achado na posição ${index}`)
// }

// let numberList = []

// numberList[0] = 10
// numberList[1] = 12
// numberList[2] = 0
// numberList[3] = 16
// numberList[4] = 7
// numberList[5] = 9

// console.log(numberList.sort())
// console.log(numberList.sort((a, b) => a - b))

// function calculateArea(a, b){
//     return a * b
// }

// console.log(calculateArea(10, 200))


function orderArray(arr){
    return arr.sort()
}


let hardwareArr = ["Cpu", "Mem.ram", "Placa de Video", "Led", "Gabinete", "Walter Cooler"]



console.table(orderArray(hardwareArr))