import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyApi } from '../services/course.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor(private router: Router,
              private _Api: MyApi) { }

  ngOnInit(): void {
  }

  partSelector(id: number){
    if(id==1){
      this.router.navigate(['/Subjects']);
    }else{
      // this.router.navigate(['/']);
    }
  }

}
