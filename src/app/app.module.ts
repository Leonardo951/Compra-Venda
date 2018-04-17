import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RecuperacaoSenhaComponent } from './recuperacao-senha/recuperacao-senha.component';
import { Routing } from './app.routing';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


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
      Routing
  ],
  providers: [],
  bootstrap: [
      AppComponent,
      LoginComponent,
      RecuperacaoSenhaComponent,
      MenuPrincipalComponent
  ]
})
export class AppModule { }
