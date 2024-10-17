import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../Services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  rol?: any
  constructor(public usuarios: UsuariosService) { }
  ngOnInit(): void {
    this.rol = sessionStorage.getItem("rolUsuario")
  }
  eliminarToken(){
    sessionStorage.removeItem("rolUsuario")
  }

}
