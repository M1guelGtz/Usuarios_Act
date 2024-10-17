import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../Services/usuarios.service';
import { Usuario } from '../Interfaces/usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  modal: boolean= true
  constructor( private router: Router, private usuario: UsuariosService){}
  contacto: Usuario = {
    Nombre: '',
    Apellidos: '',
    Telefono: undefined,
    Correo: "",
    Contraseña: "",
    id:0,
    rol:0
  }

  irAlRegistro(){
    this.router.navigate(['/registro'])
  }
  cerrarModal(){
    this.modal = !this.modal
  }
  iniciarSesion(){
    if(this.usuario.validarDatos( this.contacto.Nombre, this.contacto.Contraseña)){
      this.router.navigate(['/home']);
    }else{
      this.modal= !this.modal
    }
  }
}
