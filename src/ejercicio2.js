const readline = require ('readline-sync')

const precio = readline.question ("Ingrese el precio del producto: ")
const descuento = readline.questionFloat ("Ingrese el porcentaje del descuento: ")

let totalAPagar = precio * (1-descuento/100)

console.log(`El precio final con descuento es: Q${totalAPagar.toFixed(2)}`)

const altura = readline.questionFloat ("Ingrese su altura en centimetros: ")
let cumpleAltura = altura>=120 && altura<=200 ? true : false 
console.log(`${cumpleAltura ? "Si ": "No "}puede ingresar`)