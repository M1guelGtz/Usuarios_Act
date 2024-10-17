import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Usuario } from '../Interfaces/usuario';

@Component({
  selector: 'app-entrada-datos',
  templateUrl: './entrada-datos.component.html',
  styleUrl: './entrada-datos.component.css'
})
export class EntradaDatosComponent implements  OnChanges {

  constructor(){}
  @Output() Valor = new EventEmitter<string>()
  @Input() text = ""
  @Input() model: any
  si : boolean = false
  alerta: boolean = false
  @Input() placeholder = ""
  @Input() contacto: Usuario = {
    Nombre: '',
    Apellidos: '',
    Telefono: undefined,
    Correo: '',
    Contraseña : '',
    id:0,
    rol: 0
  }
  obtenerAtri(atri: string){
    return atri
  }
  ngDoCheck(): void {
      this.validarEmail()
  }
  ngOnChanges(changes: SimpleChanges): void {
      this.validarEmail()
  }
  validarEmail(){
    if(this.type == "email"){
      var expemail = new RegExp('^(.+)@(\\S+)$')
      if(!expemail.test(this.contacto.Correo)){
        
      }
    }
  }
  cambiosEnElNombre(){
    this.Valor.emit(this.contacto[this.obtenerAtri(this.text)])
  }
  @Input() type = ""
}
