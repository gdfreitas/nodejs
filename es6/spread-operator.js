const person = { name: 'Maria' }
const attributes = { age: 21, graduation: 'Software Engineering' }

// modo convencional de copiar propriedades entre objetos
person.age = attributes.age
person.graduation = attributes.graduation
console.log(person) // { name: 'Maria', age: 21, graduation: 'Software Engineering' }

// modo convencional de copiar propriedades entre objetos, entretanto perde a referência
const samePerson = Object.assign(person, { mothersName: 'Julia' })
console.log(samePerson) // { name: 'Maria', age: 21, graduation: 'Software Engineering', mothersName: 'Julia' }

// spread operator como forma de transferir, espalhar valores de uma variável em um determinado objeto ou lista
const samePersonAgain = { ...samePerson, fathersName: 'Pedro' }
console.log(samePersonAgain) // { name: 'Maria', age: 21, graduation: 'Software Engineering', mothersName: 'Julia', fathersName: 'Pedro' }

let dailyFoods = ['Banana', 'Cake', 'Orange']

// modo convencional de adicionar um elemento no final da lista
dailyFoods.push('Juice')
console.log(dailyFoods) // [ 'Banana', 'Cake', 'Orange', 'Juice' ]

// modo convencional de adicionar um elemento ao início da lista
dailyFoods.unshift('Meat')
console.log(dailyFoods) // [ 'Meat', 'Banana', 'Cake', 'Orange', 'Juice' ]

// `push` utilizando spread operators
dailyFoods = [...dailyFoods, 'Rice']
console.log(dailyFoods) // [ 'Meat', 'Banana', 'Cake', 'Orange', 'Juice', 'Rice' ]

// `unshift` utilizando spread operators
dailyFoods = ['Fish', ...dailyFoods]
console.log(dailyFoods) // [ 'Fish', 'Meat', 'Banana', 'Cake', 'Orange', 'Juice', 'Rice' ]
