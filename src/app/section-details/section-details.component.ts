import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MyApi } from '../services/course.service';
import { Link, links } from '../shared/Course';
import {Location} from '@angular/common';

@Component({
  selector: 'app-section-details',
  templateUrl: './section-details.component.html',
  styleUrls: ['./section-details.component.scss']
})
export class SectionDetailsComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private _Api: MyApi,
              private _location: Location) { }

  

  sectionLinks: Link[] = links;
  videoSection: Link[] = []; //2
  slidesSection: Link[] = []; //1
  otherSection: Link[] = [];//3

  panelOpenState = false;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        //console.log(params);
        if(params){
          this.sectionId = params['id'];
          // if not valid send back to /Course
        }else{
          this.router.navigate(['/Courses']);
        }
        
      }
    ); 

    this.getContent();

   

  }

  getContent(){
    this._Api.getContents(this.sectionId).subscribe(
      response=>{
        if(response){
          //console.log(response);
          for(let item of response){
            let new_item: Link ={
              title: item.title,
              date: item.created_at,
              link: item.links,
              type: item.type
            }
            //this.sectionId = item.session;
            if(new_item.type===1){
              this.slidesSection.push(item);
            }
            else if(new_item.type===2){
              this.videoSection.push(item);
            }
            else{
              this.otherSection.push(item);
            }
          
            //console.log(item);
          }
        }
    });
  }

  backClicked() {
    this._location.back();
  }

  sectionId: string = '-1';
  titlePage: string = 'اطلاعات جلسه';
}
