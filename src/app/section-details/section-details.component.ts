import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Link, links } from '../shared/Course';

@Component({
  selector: 'app-section-details',
  templateUrl: './section-details.component.html',
  styleUrls: ['./section-details.component.scss']
})
export class SectionDetailsComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  

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
          // if not valid send back to /home

        }else{
          this.router.navigate(['/Home']);
        }
        
      }
    ); 



    // section separator:
    for(let item of this.sectionLinks){
      if(item.type===1){
        this.slidesSection.push(item);
      }
      else if(item.type===2){
        this.videoSection.push(item);
      }
      else{
        this.otherSection.push(item);
      }
    }

  }

  sectionId: string = '-1';
}
