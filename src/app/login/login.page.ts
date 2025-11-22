import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
login() {
  const { email, password } = this.loginForm.value;

  // Aquí simulás un login "correcto"
  if (email === 'admin' && password === '1234') {
    localStorage.setItem('usuarioLogueado', 'true'); // 👈 guardar sesión
    window.location.href = '/eventos'; // 👈 redirigir al home
  } else {
    alert('Usuario o contraseña incorrectos');
  }
}
  }
