import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EntradaDatosComponent } from './entrada-datos/entrada-datos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    FormRegistroComponent,
    NotFoundComponent,
    EntradaDatosComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsuariosModule { }
