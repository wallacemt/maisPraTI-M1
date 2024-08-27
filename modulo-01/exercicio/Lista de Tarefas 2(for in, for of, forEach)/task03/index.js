//Filtrar Propriedades de Objetos

function filProps(obj, valorMinimo) {
    const newObject = {};
    for (const key in obj) {
        if (obj[key] > valorMinimo) {
            newObject[key] = obj[key];
        }
    }
    return newObject;
}


const product = {
    name: 'Notebook',
    price: 1500,
    yearLan:2019,
    brand: 'Positivo',
    ram: 8,
    hd: 1000,
    ssd: 500,
    display: 15,
    os: 'Windows 10',
    color: 'Black',
    quantity: 1,
    inStock: true,
    onSale: false,
};


console.log(filProps(product, 2));
