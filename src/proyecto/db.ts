import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync } from 'fs'
import { join } from 'path'

const rutaDB = 'db.json'
const carpetaBackups = 'backups'

export function cargarDB(): any {
  if (!existsSync(rutaDB)) writeFileSync(rutaDB, JSON.stringify({ clientes: [] }, null, 2))
  const contenido = readFileSync(rutaDB, 'utf-8')
  return JSON.parse(contenido)
}

export function guardarCambiosDB(data: any): void {
  writeFileSync(rutaDB, JSON.stringify(data, null, 2))
}

export function hacerBackupDB(): void {
  if (!existsSync(carpetaBackups)) mkdirSync(carpetaBackups)
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  const nombreBackup = `db_${timestamp}.json`
  copyFileSync(rutaDB, join(carpetaBackups, nombreBackup))
}
