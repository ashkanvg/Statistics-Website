import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GuidanceInformationComponent } from '../guidance-information/guidance-information.component';
import { MyApi } from '../services/course.service';
import { GuidanceAll } from '../shared/masters';

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
              private _Api: MyApi,
              public dialog: MatDialog) { }

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

    this._Api.getGuidance(id+'').subscribe(
      response=>{
        if(response){
          console.log(response);
      }  
    });

    let guidance: GuidanceAll = {
      id: 0,
      name: 'Mohammad Akbari',
      fields: ['AI','NLP','VISION'],
      role: 'CS',
      email: 'akbari.ma@gmail.com',
      website: 'akbari.aut.ac.ir',
      picture: '',
      address: '314',
      phone: '02131134224'
    }    
    this.guidanceDetails(guidance);
    
  }
  guidanceDetails(g:GuidanceAll){
    const dialogRef = this.dialog.open(GuidanceInformationComponent, {
      width: '600px',
      data: g
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        //console.log(result);        
      }
    });
  }
}
