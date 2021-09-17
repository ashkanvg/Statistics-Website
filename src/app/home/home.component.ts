import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyApi } from '../services/course.service';
import { courses, Course } from '../shared/Course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private _Api: MyApi) { }
  ngOnInit(): void {
    this.getCourses();
  }

  homeCourses: Course[] = [];

  courseClick(id: number){
    this.router.navigate(['/Course',id ]);
  }
/*
description: "توضیحات"
id: 1
instructor: 1
title: "روش تخقیق"
updated_at: "2021-09-17T14:37:32.402243+04:30"

*/
  getCourses(){
    this._Api.getCourses().subscribe(
      response=>{
        if(response){
          //console.log(response);
          for(let item of response){
            let new_item: Course ={
              id: item.id,
              title: item.title,
              description: item.description,
              lastPublished: item.updated_at,
              instructor: 'عادل محمدپور',
              cover: null,
              sections: []
            }
            this.homeCourses.push(new_item);
            //console.log(item);
          }
        }
    });
  }

}
