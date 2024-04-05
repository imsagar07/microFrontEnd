import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'] 
})
export class StudentsComponent implements OnInit {

  studeentsData = [
    {name:'Sagar', mobile:9021886995, email:'sagar@gmail.com', class:'10th'},
    {name:'Palash', mobile:848484848, email:'palash@gmail.com', class:'9th'},
    {name:'Rajat', mobile:9898989877, email:'rajat@gmail.com', class:'10th'},
    {name:'Karan', mobile:9021886995, email:'karan@gmail.com', class:'10th'},
    {name:'Omkar', mobile:9021886995, email:'Omkar@gmail.com', class:'10th'},
    {name:'Prakash', mobile:787887878, email:'Prakash@gmail.com', class:'10th'},
    {name:'Rakshit', mobile:9021886995, email:'Rakshit@gmail.com', class:'9th'},
    {name:'Justin', mobile:67868678877, email:'justing@gmail.com', class:'10th'},
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
