//Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico


const employees = [
    {
        name: 'Bryan',
        position: 'Junior',
        salary: 2500
    },
    {
        name: 'Dominic',
        position: 'Senior',
        salary: 25000
    },
    {
        name: 'Lilian',
        position: 'Pleno',
        salary: 10000
    },
    {
        name: 'Nora',
        position: 'Junior',
        salary: 2500
    },
    {
        name: 'Kendric',
        position: 'Senior',
        salary: 25000
    }
];

for(emp of employees){
    if(emp.salary > 5000){
        console.log(`Nome: ${emp.name}, Salario: ${emp.salary}US$`);
    }
}
