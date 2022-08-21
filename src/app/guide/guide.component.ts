import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyApi } from '../services/course.service';

export interface Guidance {
  id: number;
  name: string;
  first_char: string;
  email: string;
}


@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private _Api: MyApi) { }

  ngOnInit(): void {
    this.getGuidances();
  }

  displayedColumns: string[] = ['number', 'name'];
  dataSource: Guidance[] = [];


  getGuidances(){
    this._Api.getGuidances().subscribe(
      response=>{
        if(response){
          console.log(response)
          for(let item of response){
            let new_item: Guidance ={
              id: item.id,
              name: item.name,
              email: item.email,
              first_char: item.name.charAt(0)
            }
            this.dataSource.push(new_item);
        }
      } 
    });
  }

  guidanceClick(id: number){
    console.log(id);
  }
}
