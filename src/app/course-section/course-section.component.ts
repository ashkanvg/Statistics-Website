import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MyApi } from '../services/course.service';
import { Section } from '../shared/Course';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-section',
  templateUrl: './course-section.component.html',
  styleUrls: ['./course-section.component.scss']
})
export class CourseSectionComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private _Api: MyApi,
              private _location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        //console.log(params);
        if(params){
          this.courseId = params['id'];
          // if not valid send back to /Subjects
        }else{
          this.router.navigate(['/Subjects']);
        }
      }
    );

    this.getSections();
  }


  pageTitle: string = '';
  pageDescription: string = '';
  getSections(){
    this._Api.getSections(this.courseId).subscribe(
      response=>{
        if(response){
          this.pageTitle = response.course_title;
          this.pageDescription = response.course_description;
          for(let item of response.sessions){
            let new_item: Section ={
              id: item.id,
              title: item.title,
              description: this.trimStringLength(item.description,80),
              date: item.created_at,
              links: [],
              views: item.views,
              number: item.number
            }
            this.sectionsList.push(new_item);
          }
        }
    });
  }

  courseId: string = '-1';
  sectionsList: Section[] = [];
  sectionDetail(sectionId: number){
    let param = sectionId;
    this.router.navigate(['/Section',param ]);
  }


  trimStringLength(text: string, maxLength: number): string{
    if (text.length > maxLength) {
      text = text.substr(0,maxLength) + '...';
    }
    return text;
  }


  backClicked() {
    this._location.back();
  }
  
}
