import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GuideComponent } from '../guide/guide.component';
import { GuidanceAll } from '../shared/masters';

@Component({
  selector: 'app-guidance-information',
  templateUrl: './guidance-information.component.html',
  styleUrls: ['./guidance-information.component.scss']
})
export class GuidanceInformationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GuideComponent>,
              @Inject(MAT_DIALOG_DATA) public data: GuidanceAll) {
    console.log(data);
  }
  ngOnInit(): void {
  }

}
