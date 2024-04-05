import { Component, OnInit } from '@angular/core';
import { AuthService } from './authService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData = {
    name: '',
    password: '',
    role:'admin'
  };

  constructor(private authService : AuthService,private route:Router) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('isItem'));
  }
  onSubmit() {
    localStorage.setItem('isLoggedIn','true');
    localStorage.setItem('role',this.formData.role);
    this.route.navigate(['/dashboard']);

    // Here you can add logic to send the form data to a server or perform any other actions.
  }

}
