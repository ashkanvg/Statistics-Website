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

export interface Category{
  value: string;
  id: string;
  isCheck: boolean;
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
    this.getTags();
  }

  displayedColumns: string[] = ['number', 'name'];
  dataSource: Guidance[] = [];

  tagsList: Category[] = [];
  tagsListName: string[] = [];
  searchQuestion: string = "";
  getTags(){
    this._Api.getTags().subscribe(
      response=>{
        if(response){
          let tag: Category = {value:'',id:'',isCheck:false};
          for(let cat of response){
            tag.id = cat.key;
            tag.value = cat.name;
            tag.isCheck = false;
            this.tagsList.push(tag);
            //clear category:
            tag = {value:'',id:'',isCheck:false};
          }
        } 
    });
  }


  checkedTagsCount = 0;
  valueChange(tag: Category) {
    //set the two-way binding here for the specific unit with the event
    if(tag.isCheck){
      tag.isCheck=false;
      this.checkedTagsCount--;
    }else{
      tag.isCheck=true;
      this.checkedTagsCount++;
    }

    if(this.checkedTagsCount>0){
      this.disable=false;
    }
  }

  disable = true;
  getGuidances(){
    if(this.disable==false){
      for(let item of this.tagsList){
        if(item.isCheck==true){
          this.tagsListName.push(item.value);
        }
      }
      let searchItem = {question:this.searchQuestion,tags:this.tagsListName};
      // console.log(searchItem);
      this.dataSource = [];
      this._Api.postFindGuidances(searchItem).subscribe
        (result => {
            if(result){
              for(let item of result){
                let new_item: Guidance ={
                  id: item.id,
                  name: item.name,
                  email: item.email,
                  first_char: item.name.charAt(0)
                }
                this.dataSource.push(new_item);
              }
            }
        }
      );
  
    }else{
      // alert --> you need at least one tag
    }
  }
  guidanceClick(id: number){
    this._Api.getGuidance(id+'').subscribe(
      response=>{
        if(response){
          console.log(response);
          let guidance: GuidanceAll = {
            id: response.id,
            name: response.name,
            //fields: response.tags,
            role: 'CS',
            email: response.email,
            website: response.website,
            picture: '',
            address: response.address,
            phone: response.phone
          }    
          this.guidanceDetails(guidance);

      }  
    });

    
    
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



  isLinear = true;
}
