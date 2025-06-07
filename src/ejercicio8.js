const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
    { nombre: 'Pantalón', precio: 120 },
    { nombre: 'Corbata', precio: 50 },
]

function agregaIva (productos){
    const productosConIVA = productos.map((productos) => {
        productos.precio = (productos.precio * 1.12).toFixed(2)
        return productos
    })
    return productosConIVA
}

const productosConIVA = agregaIva(productos)
console.log(productosConIVA)

const precioMayor = productosConIVA.filter((productos) => productos.precio >= 100)
console.log(precioMayor)

const productosOrdenados = productosConIVA.sort((a,b) => a.precio - b.precio)
console.log(productosOrdenados)