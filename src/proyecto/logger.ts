import { appendFileSync } from 'fs'

export function registrarLog(mensaje: string): void {
  const timestamp = new Date().toISOString()
  appendFileSync('log.txt', `[${timestamp}] ${mensaje}\n`)
}
