enum Prioridad {
    ALTA = "🔴",
    MEDIA = "🟡",
    BAJA = "🔵"
}

enum EstadoTarea {
    pendiente = "PENDIENTE",
    en_proceso = "EN PROCESO",
    finalizada = "FINALIZADA"
}

interface Tarea {
    id: number,
    titulo: string,
    completada: boolean,
    prioridad: Prioridad,
    estado: EstadoTarea
}

class GestorTareas {
    private tareas: Tarea[] = []

    agregarTarea(titulo: string, prioridad: Prioridad) {
        const nuevaTarea: Tarea = {
            id: Date.now(),
            titulo: titulo,
            completada: false,
            prioridad: prioridad,
            estado: EstadoTarea.pendiente
        }
        this.tareas.push(nuevaTarea)
    }

    listarTareas(arr: Tarea[]) {
        if (arr.length === 0) {
            console.log("No hay tareas pendientes")
        } else {
            console.log("Tareas pendientes:")
            arr.forEach(tarea => {
                console.log(`[${tarea.prioridad}] ${tarea.titulo} - Estado: ${tarea.estado}`)
            })
        }
    }
}
const gestor = new GestorTareas()
gestor.agregarTarea("Estudiar TypeScript", Prioridad.ALTA)
gestor.agregarTarea("Hacer ejercicio", Prioridad.MEDIA)
gestor.agregarTarea("Dormir", Prioridad.BAJA)
gestor.listarTareas(gestor['tareas'])