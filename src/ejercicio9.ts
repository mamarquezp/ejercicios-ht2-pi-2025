interface Usuario {
    nombre: string
    edad: number
    activo: boolean
    correo?: string
}

interface InformacionLogin {
    correo: string
    clave: string
    recaptcha: boolean
}

const usuarioActual: Usuario = {
    nombre: "Juan Perez",
    edad: 30,
    activo: true,
    correo: "juan.perez@email.com"
}

function loguear (informacion : InformacionLogin) : void {
    if (informacion.correo.includes("@") && informacion.correo.includes(".") ) {
        if (informacion.clave.length >= 6) {
            if (informacion.recaptcha) {
                console.log("Usuario logueado correctamente")
            }
        }
    } else {
        console.log("Error: Datos inválidos")
    }
}

const datosLogin: InformacionLogin = {
correo: 'correo@example.com',
clave: '123456',
recaptcha: true
}

loguear(datosLogin)