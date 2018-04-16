import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RecuperacaoSenhaComponent } from './recuperacao-senha/recuperacao-senha.component';
import { Routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecuperacaoSenhaComponent
  ],
  imports: [
      BrowserModule,
      Routing
  ],
  providers: [],
  bootstrap: [
      AppComponent,
      LoginComponent,
      RecuperacaoSenhaComponent
  ]
})
export class AppModule { }
