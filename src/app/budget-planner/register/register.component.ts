import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm!: FormGroup;
  myEmail: any
  myPassword: any
  myUsername: any

  // Store email
  submittedEmail: string = '';

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {


    this.registerForm = this.fb.group({
      text: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });


  }




  register() {
    if (this.registerForm.valid) {
      const username = this.registerForm.get('text')?.value;
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;
      if (username == 'admin' && email == 'admin@gmail.com' && password == 12345) {
        this.router.navigate(['']);
      } else {
        alert("Please Enter the Valid Details.");
      }
    }
  }



  onRegisterSubmit(): void {
    this.register();
  }



  onNavigateRegister() {
    this.router.navigate(['register']);
  }
  onNavigateLogin() {
    this.router.navigate(['']);
  }
}