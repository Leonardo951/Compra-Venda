import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RecuperacaoSenhaComponent } from './recuperacao-senha/recuperacao-senha.component';
import { Routing } from './app.routing';

import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import {UsuariosService} from './usuarios/usuarios.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecuperacaoSenhaComponent,
    MenuPrincipalComponent,
    UsuariosComponent
  ],
  imports: [
      BrowserModule,
      Routing,
      HttpClientModule,
      FormsModule

  ],
  providers: [ UsuariosService],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
