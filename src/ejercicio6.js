const estudiantes = ['Carlos', 'Ana', 'Luis', 'María', 'José']

estudiantes.forEach(nombre => {
    femenino = nombre.toString ().endsWith('a')
    console.log(`Bienvenid${femenino ? "a" : "o"}, ${nombre}`)    
})

const notas = [70, 85, 55, 90, 60]
let promedio = 0

notas.forEach(nota => {
    promedio = promedio + nota    
})
console.log(`El promedio del grupo es: ${promedio/notas.length}`)