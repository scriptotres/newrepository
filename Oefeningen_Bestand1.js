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
let moreThan = []

for(let i = 0; i < employees.length ; i = i + 1) {
if(employees[i].salary > 3000) {    
  console.log('adding', i, employees[i])
    moreThan.push(employees[i].name)    
}
}
return moreThan
}

assert.deepEqual(earsMoreThan3k(employees), ['Sandra', 'Alexander', 'Els'])

//* Hoeveel verdient een interne medewerker gemiddeld?
function averageSalaryNonFreeLancer(employees) {
var indexer = 0
var totalSum = 0

for(let i = 0; i < employees.length ; i = i + 1) {

  if(employees[i].freelancer === false) {    
    indexer += 1
    totalSum += employees[i].salary
  }
  console.log(totalSum)
  }
  return totalSum / indexer
}

assert.equal(averageSalaryNonFreeLancer(employees), 3134)

//* Wie heeft de langste naam?
function longestName(employees) {
  var employee
  var longestName = 0
  for(let i = 1; i < 7 ; i = i + 1) {
    if(employees[i].name.length > longestName)
    {
      longestName = employees[i].name.length
      employee = employees[i]
    }
  }
  return employee.name
}

assert.equal(longestName(employees), 'Alexander')

//* Print de namen van alle werknemers, gesorteerd op voornaam.
function sortedNames(employees) {

employees.sort(function(a,b)
{
  if(a.name < b.name)
  {
    return -1
  }
  if(a.name > b.name)
  {
    return 1
  }
})
var namesEmployees = employees.map(x => x.name)
return namesEmployees
}

assert.deepEqual(sortedNames(employees), ['Alexander', 'Anne', 'Els', 'Igor', 'Marcel', 'Sandra', 'Thomas'])

//*/