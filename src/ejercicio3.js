const readline = require ('readline-sync')

const fechaNacimiento = readline.question ("Ingrese su fecha de nacimiento en formato YYYY-MM-DD: ")
const fechaNacimientoArray = fechaNacimiento.split("-")
const año = fechaNacimientoArray[0]
const añoActual = new Date().getFullYear()
const edad = añoActual - año
console.log(edad)

if (edad<=12) {
    console.log("Eres un niño")    
}else if (edad<=17) {
    console.log("Eres un adolescente")    
}else if (edad<=64) {
    console.log("Eres un adulto")    
}else {
    console.log("Eres un adulto mayor")    
}

const notaExamen = readline.question ("Ingrese tu nota de examen (0 a 100): ")
if (notaExamen>=90) {
    console.log("A")    
}else if (notaExamen>=80) {
    console.log("B")    
}else if (notaExamen>=70) {
    console.log("C") 
}else if (notaExamen>=60) {
    console.log("D")    
}else {
    console.log("F")    
}