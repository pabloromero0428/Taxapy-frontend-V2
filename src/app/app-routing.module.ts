import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import {AdministradorComponent } from './components/administrador/administrador.component';

const routes: Routes = [
  {path: 'user' , component: UsuarioComponent},
  {path: '' , component: UsuarioComponent},
  {path: 'admin', component: AdministradorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
