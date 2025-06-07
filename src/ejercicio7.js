function calcularAreaTriangulo(base, altura) {
    return (base * altura )/2
}

function mostrarSaludo(nombre) {
    console.log (`Hola, ${nombre}. Bienvenido al sistema de geometria`)    
}

const readline = require ('readline-sync')

const baseUsuario = readline.questionFloat ("Ingrese el valor de la base: ")
const alturaUsuario = readline.questionFloat ("Ingrese el valor de la altura: ")
const nombreUsuario = readline.question ("Ingrese su nombre: ")

mostrarSaludo(nombreUsuario)
console.log(`El área del triángulo es: ${calcularAreaTriangulo(baseUsuario, alturaUsuario)}`)