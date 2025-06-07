import { cargarDB, guardarCambiosDB, hacerBackupDB } from './db'
import { registrarLog } from './logger'

export function listar(nombreTabla: string): any[] {
  const db = cargarDB();
  return db[nombreTabla] || []
}

export function insertar(nombreTabla: string, campoId: string, data: any): void {
  const db = cargarDB()
  if (!db[nombreTabla]) db[nombreTabla] = []

  const nuevoId = Date.now()
  const nuevoRegistro = { [campoId]: nuevoId, ...data }
  db[nombreTabla].push(nuevoRegistro)

  guardarCambiosDB(db)
  registrarLog(`Insertado en ${nombreTabla}: ${JSON.stringify(nuevoRegistro)}`)
}

export function eliminar(nombreTabla: string, campoId: string, valor: any): void {
  const db = cargarDB()
  if (!db[nombreTabla]) return

  const original = db[nombreTabla].length
  db[nombreTabla] = db[nombreTabla].filter((item: any) => item[campoId] !== valor)

  if (db[nombreTabla].length < original) {
    guardarCambiosDB(db)
    registrarLog(`Eliminado de ${nombreTabla}: ${campoId} = ${valor}`)
  }
}

export function crearBackUp(): void {
  hacerBackupDB();
  registrarLog(`Backup de la DB creado exitosamente!`);
}
