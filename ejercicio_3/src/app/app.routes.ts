import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ErrorComponent } from './components/error/error.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path: 'bienvenido', component: BienvenidoComponent},
    {path: 'error', component: ErrorComponent},
    { path: '**', component: PageNotFoundComponent }
];
