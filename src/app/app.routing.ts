import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent} from './login/login.component';
import  { RecuperacaoSenhaComponent } from './recuperacao-senha/recuperacao-senha.component';


const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'recuperacao-senha', component: RecuperacaoSenhaComponent }
];

    export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);