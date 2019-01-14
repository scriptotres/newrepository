const assert = require('assert')

const employees = [
  { name: 'Marcel', salary: 3000, freelancer: true },
  { name: 'Sandra', salary: 3100, freelancer: false },
  { name: 'Thomas', salary: 2800, freelancer: false },
  { name: 'Alexander', salary: 3502, freelancer: false },
  { name: 'Els', salary: 3050, freelancer: true },
  { name: 'Igor', salary: 2600, freelancer: true },
  { name: 'Anne', salary: 2600, freelancer: true },
]

function totalSalaries(employees) {
    let a = 0
    for (let i = 0; i <= 6 ; i = i + 1) {
        a += employees[i].salary
      }
      return a
}

assert.equal(totalSalaries(employees), 20652)

function bestPaidFreelancer(employees) {
var employee
var employeeSalary = 0

for (let i = 1; i <= 6 ; i = i + 1) {
    if(employees[i].freelancer === true && employees[i].salary > employeeSalary)
    {
        employeeSalary = employees[i].salary 
        employee = employees[i]
    }
  }
  return employee.name
}

assert.equal(bestPaidFreelancer(employees), 'Els')

function earsMoreThan3k(employees) { 
const moreThan = []

for(let i = 0; i <= employees.Length ; i = i + 1)
{
if(employees[i].salary > 3000)
{    
    moreThan.Push(employees[i].name)    
}
}
return moreThan
}

assert.deepEqual(earsMoreThan3k(employees), ['Sandra', 'Alexander', 'Els'])