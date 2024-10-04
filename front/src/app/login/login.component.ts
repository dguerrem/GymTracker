import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError, of } from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  hidePassword: boolean = true;
  rememberMe: boolean = false;

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) { }
  onLogin() {
    if (this.email && this.password) {
      const params = { email: this.email, password: this.password };

      this.http.get('https://gym-tracker-api-git-main-dguerrems-projects.vercel.app/users/login', { params, responseType: 'text' })
        .pipe(
          tap(response => {
            if (response === 'OK') {
              this.router.navigate(['/inicio']);
            }
          }),
          catchError((error) => {
            let message = 'Ocurrió un error en el servidor. Inténtalo más tarde';
            if (error.status === 401) {
              message = 'Correo electrónico o contraseña incorrectos';
            }
            this.snackBar.open(message, 'Cerrar', {
              duration: 3000,
              panelClass: ['snackbar-error']
            });
            return of(null); // Devuelve un observable vacío para continuar el flujo
          })
        ).subscribe();
    } else {
      this.snackBar.open('Por favor, rellena todos los campos', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-warning']
      });
    }
  }



}

