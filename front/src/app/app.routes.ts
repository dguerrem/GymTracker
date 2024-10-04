import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EntrenamientosComponent } from './entrenamientos/entrenamientos.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'entrenamientos', component: EntrenamientosComponent },
];