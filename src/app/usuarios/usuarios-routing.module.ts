import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: "registro",
    component: FormRegistroComponent
  },{
    path: "home",
    component: HomeComponent
  },{
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },{
    path: "login",
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
