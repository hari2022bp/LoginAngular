import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errMsg: string[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    this.errMsg = [];
    if (this.loginForm.valid) {
      const user = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };

      // Here you would typically call a service to validate the user credentials
      // For demonstration, let's assume a simple check
      if (user.username === 'testuser' && user.password === 'testpassword') {
        console.log('Login successful');
      } else {
        this.errMsg.push('Invalid username or password.');
      }
    } else {
      this.errMsg.push('Form is invalid. Please check the input values.');
    }
  }

  
}