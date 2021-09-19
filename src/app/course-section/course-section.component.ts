import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MyApi } from '../services/course.service';
import { Section, sections } from '../shared/Course';
import {Location} from '@angular/common';

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
          // if not valid send back to /home
        }else{
          this.router.navigate(['/Home']);
        }
        
      }
    );

    this.getSession();
/*
    for(let section of this.sectionsList){
      section.description = this.trimStringLength(section.description,80);
    }
  */
  }

  getSession(){
    this._Api.getSections(this.courseId).subscribe(
      response=>{
        if(response){
          //console.log(response);
          for(let item of response){
            let new_item: Section ={
              id: item.id,
              title: item.title,
              description: this.trimStringLength(item.description,80),
              date: item.created_at,
              links: [],
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
