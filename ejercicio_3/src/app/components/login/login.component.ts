import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario = {
    nombre: '',
    clave: ''
  }

  constructor(private router: Router) {}

  login() {
    this.router.navigateByUrl('/bienvenido');
  }
}
