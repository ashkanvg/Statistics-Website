import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MyApi } from '../services/course.service';
import { Link } from '../shared/Course';
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

  

  // sectionLinks: Link[] = links;
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

    this.getQuestions();
    console.log(this.selectedQuestions);


  }

  pageTitle: string = '';
  pageDescription: string = '';
  getContent(){
    this._Api.getContents(this.sectionId).subscribe(
      response=>{
        if(response){
          this.pageTitle = response.session_title;
          this.pageDescription = response.session_description;
          for(let item of response.contents){
            let new_item: Link ={
              title: item.title,
              date: item.created_at,
              link: item.links,
              type: item.type
            }
            if(new_item.type===1){
              this.slidesSection.push(item);
            }
            else if(new_item.type===2){
              this.videoSection.push(item);
            }
            else{
              this.otherSection.push(item);
            }
          
          }
        }
    });
  }


  selectedQuestions : string[] = [];
  selectedQuestionsId : string[] = [];
  getQuestions(){
    this._Api.getQuestions().subscribe(
      response=>{
        if(response){
          //console.log(response.keys());
          this.selectedQuestionsId = Object.keys(response);
          console.log(this.selectedQuestionsId);

          this.selectedQuestions = Object.values(response);
          console.log(this.selectedQuestions);
        }
    });
  }

  backClicked() {
    this._location.back();
  }

  sectionId: string = '-1';
  titlePage: string = 'اطلاعات جلسه';


  votingPanelDisplay = true;
  votingClicked(id: string){
    if(id == '-1'){
      this.votingPanelDisplay = false;
      return;
    }else{
      var voted = {session: Number(this.sectionId), vote: Number(id) }
      this.votingPanelDisplay = false;
      this._Api.postVoting(voted).subscribe
        (result => {
          console.log(result);
        }
      );
    }
    
  }
}
