import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MyApi } from '../services/course.service';
import { Course } from '../shared/Course';

@Component({
  selector: 'app-course',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  
  constructor(private router: Router,
              private route: ActivatedRoute,
              private _Api: MyApi) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        if(params){
          this.subjectId = params['id'];
        }else{   // if not valid send back to /Subjects
          this.router.navigate(['/Subjects']);
        }
      }
    );

    this.getCourses();

  }

  subjectId: string = '-1';
  listCourses: Course[] = [];
  courseClick(id: number){
    let params = id;
    this.router.navigate(['/Course',params]);
  }


  getCourses(){
    this._Api.getCourses(this.subjectId).subscribe(
      response=>{
        if(response){
          for(let item of response){
            let new_item: Course ={
              id: item.id,
              title: item.title,
              description: item.description,
              lastPublished: item.updated_at,
              instructor: 'عادل محمدپور',
              cover: null,
              label: item.label,
              institution: item.institution,
              sections: []
            }
            this.listCourses.push(new_item);
          }
        } else{
            this.router.navigate(['/Subject']); 
        }
    });
  }

}
