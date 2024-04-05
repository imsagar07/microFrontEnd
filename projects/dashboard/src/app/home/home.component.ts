import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  role: any;
  constructor(private route: Router) { }
  ngOnInit() {
    this.role = localStorage.getItem('role');
  }
  callStudentList() {
    this.route.navigate(['/students']);
  }

  callTeachersList() {
    this.route.navigate(['/teachers']);
  }
  logout() {
    if (confirm("Are you sure do you want to logout!") == true) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('role');
      setTimeout(() => {
        this.route.navigate(['/dashboard']);
      }, 500)
    }
  }

}
