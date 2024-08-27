//Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.


const enterprise = {
    departaments: [
        {
            name: "Marketing",
            employees: [
                "Enzo",
                "Caio",
                "Beatriz"
            ]
        },
        {
            name: "Contability",
            employees: [
                "Natalia",
                "Chris"
            ]
        },
        {
            name: "HR",
            employees: [
                "Lilian",
                "Kendric"
            ]
        },
        {
            name: "Finance",
            employees: [
                "Dominic",
                "Lilian"
            ]
        },
        {
            name: "Sales",
            employees: [
                "Bryan"
            ]
        },
        {
            name: "Develpment",
            employees: [
                "Viktor",
                "Wallace"
            ]
        }
    ]
}

for (let department in enterprise.departaments) {
    let departmentName = enterprise.departaments[department].name;
    let employees = enterprise.departaments[department].employees.join(', ');
    console.log(`${departmentName}, Funcionários: [${employees}]`);
}
