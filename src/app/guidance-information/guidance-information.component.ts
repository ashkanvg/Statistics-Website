import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GuideComponent } from '../guide/guide.component';
import { MyApi } from '../services/course.service';
import { GuidanceAll } from '../shared/masters';

@Component({
  selector: 'app-guidance-information',
  templateUrl: './guidance-information.component.html',
  styleUrls: ['./guidance-information.component.scss']
})
export class GuidanceInformationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GuideComponent>,
              @Inject(MAT_DIALOG_DATA) public data: GuidanceAll,
              private _Api: MyApi) {
    //console.log(data);
  }
  ngOnInit(): void {
    this.getQuestions();
  }

  selectedQuestions : string[] = [];
  selectedQuestionsId : string[] = [];
  getQuestions(){
    this._Api.getQuestionsGuides().subscribe(
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

  votingPanelDisplay = true;
  votingClicked(id: string){
    if(id == '-1'){
      this.votingPanelDisplay = false;
      return;
    }else{
      var voted = {guide: Number(this.data.id), vote: Number(id) }
      this.votingPanelDisplay = false;
      this._Api.postVotingGuidance(voted).subscribe
        (result => {
          console.log(result);
        }
      );
    } 
  }
}
