import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent} from './login/login.component';
import  { RecuperacaoSenhaComponent } from './recuperacao-senha/recuperacao-senha.component';
import {MenuPrincipalComponent} from './menu-principal/menu-principal.component';
import {UsuariosComponent} from './usuarios/usuarios.component';


const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'recuperacao-senha', component: RecuperacaoSenhaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'menu-principal', component: MenuPrincipalComponent },
    { path: 'usuarios', component: UsuariosComponent }
];

    export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);