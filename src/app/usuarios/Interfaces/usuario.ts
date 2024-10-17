export interface Usuario {
    Nombre: string
    Apellidos: string
    Telefono: any
    Correo: string
    Contraseña: string
    id: number
    rol: any
    [key: string]: any;
}
