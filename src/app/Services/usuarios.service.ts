import { Injectable } from '@angular/core';
import { Usuario } from '../usuarios/Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }
  usuarios: Usuario[] = [
    {
      Nombre: "Miguel Angel",
      Apellidos: "Gutierrez Gomez",
      Telefono: 9671905994,
      Correo: "233382@ids.upchiapas.edu.mx",
      Contraseña: "123456789",
      id: 1,
      rol: 1
    },{
      Nombre: "Angel",
      Apellidos: "Gutierrez Gomez",
      Telefono: 9671905994,
      Correo: "233382@ids.upchiapas.edu.mx",
      Contraseña: "12345678",
      id: 1,
      rol: 0
    }
  ]
  validarDatos(nombre: string, password: string): boolean{
    for (let index = 0; index < this.usuarios.length; index++) {
      if(this.usuarios[index].Nombre == nombre && this.usuarios[index].Contraseña == password){
        sessionStorage.setItem("rolUsuario", this.usuarios[index].rol)
        return true
      }
    }
    return false
  }
  
}
