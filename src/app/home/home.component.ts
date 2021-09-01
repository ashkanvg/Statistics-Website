import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { courses, Course } from '../shared/Course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {

  }

  homeCourses: Course[] = courses;


  courseClick(id: number){
    this.router.navigate(['/Course',id ]);
  }

}
