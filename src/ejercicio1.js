const readline = require ('readline-sync')

const nombre = readline.question ("Ingrese su nombre: ")
const edad = readline.questionInt ("Ingrese su edad: ")
const activoTexto = readline.question ("Ingrese si está activo: ")
const activo = activoTexto.toLowerCase() === 'si' ? true : false

console.log(`Hola, me llamo ${nombre}, tengo ${edad} años y estoy activo: ${activo}`)
console.log(`La variable nombre es de tipo ${typeof(nombre)}`)
console.log(`La variable edad es de tipo ${typeof(edad)}`)
console.log(`La variable activo es de tipo ${typeof(activo)}`)

let valorNulo = null
let valorNoAsignado

console.log(`La variable valorNulo es de tipo ${typeof(valorNulo)}`)
console.log(`La variable valorNoAsignado es de tipo ${typeof(valorNoAsignado)}`)