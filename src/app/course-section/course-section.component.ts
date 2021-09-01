import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Section, sections } from '../shared/Course';

@Component({
  selector: 'app-course-section',
  templateUrl: './course-section.component.html',
  styleUrls: ['./course-section.component.scss']
})
export class CourseSectionComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        //console.log(params);
        if(params){
          this.courseId = params['id'];

          // if not valid send back to /home

        }else{
          this.router.navigate(['/Home']);
        }
        
      }
    );

    for(let section of this.sectionsList){
      section.description = this.trimStringLength(section.description,80);
    }
  }

  courseId: number = -1;
  sectionsList: Section[] = sections;
  sectionDetail(sectionId: number){
    let param = this.courseId + '-' + sectionId;
    this.router.navigate(['/Section',param ]);

  }



  trimStringLength(text: string, maxLength: number): string{
    if (text.length > maxLength) {
      text = text.substr(0,maxLength) + '...';
    }
    return text;
  }

  
}
