import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  registerForm!: FormGroup;

  myEmail: any
  myPassword: any
  myUsername: any

  submittedEmail: string = '';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      if(email == 'admin@gmail.com' && password == 12345){
      this.router.navigate(['dashboard']);
    } else {
      alert('Invalid Email or Password.');
    }
  }
}

  onLoginSubmit() {
    // Handle login form submission
    console.log('Login form submitted', this.loginForm.value);
    this.router.navigate(['dashboard']);
  }

  onNavigateLogin() {
    this.router.navigate(['']); // Navigate to the root route
  }

  onNavigateRegister() {
    this.router.navigate(['register']); // Navigate to the register route
  }
}