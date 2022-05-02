import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyApi } from '../services/course.service';
import { Subject } from '../shared/Course';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor(private router: Router,
              private _Api: MyApi) { }

  ngOnInit(): void {
    this.getSubjects();
  }

  listSubjects: Subject[] = [];
  subjectClick(id: number){
    console.log(id);
    let param = id;
    this.router.navigate(['/Subject',param]);
  }

  getSubjects(){
    this._Api.getSubjects().subscribe(
      response=>{
        if(response){
          for(let item of response){
            let new_item: Subject ={
              id: item.id,
              title: item.title,
              description: item.description,
              lastPublished: item.updated_at,
              courses: []
            }
            this.listSubjects.push(new_item);
          }
        }
    });
  }

}
