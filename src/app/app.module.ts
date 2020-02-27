import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdministradorComponent,
    UsuarioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:  'AIzaSyB_ICsFMLQcKStOBadf3m-aqzyFewqy2Yk'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
