import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EntrenamientosComponent } from './entrenamientos/entrenamientos.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.compontent';
import { DetalleEntrenamientoComponent } from './detalle-entrenamiento/detalle-entrenamiento.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Sin sidebar
  {
    path: 'a',
    component: LayoutComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'entrenamientos', component: EntrenamientosComponent },
      { path: 'detalleEntreamiento', component: DetalleEntrenamientoComponent },
    ],
  },
];