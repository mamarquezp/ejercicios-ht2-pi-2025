const readline = require ('readline-sync')

const numero = readline.questionInt ("Ingrese un número (1-7): ")

switch (numero) {
    case 1:
        console.log("Lunes")
        break
    case 2:
        console.log("Martes")
        break
    case 3:
        console.log("Miercoles")
        break
    case 4:
        console.log("Jueves")
        break
    case 5:
        console.log("Viernes")
        break
    case 6:
        console.log("Sábado")
        break
    case 7:
        console.log("Domingo")
        break
    default:
        console.log("Número no válido, debe estar entre 1 y 7")
        break
}

const color = readline.question ("Ingrese un color del semáforo (verde, amarillo, rojo): ")

switch (color.toLocaleLowerCase()) {
    case "verde":
        console.log("Puede avanzar")
        break
    case "amarillo":
        console.log("Paso con precaución")
        break
    case "rojo":
        console.log("Deténgase")
        break   
    default:
        console.log("Color no válido")
        break
}