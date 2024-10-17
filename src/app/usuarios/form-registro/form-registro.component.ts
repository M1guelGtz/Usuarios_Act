import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../Services/usuarios.service';
import { Usuario } from '../Interfaces/usuario';
import { text } from 'stream/consumers';
@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrl: './form-registro.component.css'
})
export class FormRegistroComponent {

  @Input() valor = false
  @Input() form:string = ""
  @Input() title: string = ""
  @Input () st : string = ""
  constructor(public usuarios: UsuariosService, private router : Router){}
  contacto: Usuario = {
    Nombre: '',
    Apellidos: '',
    Telefono: undefined,
    Correo: "",
    Contraseña: "",
    id:0,
    rol: 0
  }
  agregarUsuario(){
    this.contacto.id = this.usuarios.usuarios.length + 1
    if(this.contacto.Apellidos != "" && this.contacto.Contraseña != "" && this.contacto.Correo!= "" && this.contacto.Nombre!= "" && this.contacto.Telefono!= ""){
      console.log(this.usuarios.usuarios);
      this.usuarios.usuarios.push(this.contacto)
      if(this.valor == false){
        this.router.navigate(["/login"])
      }
      
        
    }else{
      alert("Datos incompletos")
    }
    
  }
}
