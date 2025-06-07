const readline = require ('readline-sync')

let segundos = readline.questionInt ("Ingrese cuántos segundos quiere temporizar: ")
while (segundos!==0) {
    console.log(`Faltan ${segundos} segundos`)
    segundos --
}
console.log(`El tiempo finalizó`)

do {
    console.log("1. Saludar ")
    console.log("2. Mostrar hora actual ")
    console.log("3. Salir ")  
    eleccion = readline.questionInt ("Elije una opción: ")
} while (eleccion !=3)