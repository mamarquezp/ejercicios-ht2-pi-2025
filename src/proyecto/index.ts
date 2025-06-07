import { insertar, listar, eliminar, crearBackUp } from './operaciones'


//set de pruebas
insertar('clientes', 'id', { nombre: 'Luis', saldo: 1500 })
console.log('Clientes actuales:', listar('clientes'))

const clientes = listar('clientes')
if (clientes.length > 0) {
  eliminar('clientes', 'id', clientes[0].id)
}

crearBackUp()
