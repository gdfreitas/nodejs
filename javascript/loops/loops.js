let array = [1, 2, 3, 4, 5];

// [for-in] iterando array
for (let index in array) {
    console.log(array[index])
}

// [for-in]  iterando atributos de objeto
let obj = { id: 666, msg: 'hello' }
for (let key in obj) {
    console.log(obj[key])
}

// [for-of] iterando array (*funciona somente com arrays)
for (let val of array) {
    console.log(val)
}