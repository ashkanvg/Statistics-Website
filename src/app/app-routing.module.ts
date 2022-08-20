import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseSectionComponent } from './course-section/course-section.component';
import { CoursesComponent } from './courses/courses.component';
import { GuideComponent } from './guide/guide.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SectionDetailsComponent } from './section-details/section-details.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes: Routes = [
  { path: '', redirectTo: '/Main', pathMatch: 'full'},
  { path: 'Main',component: MainpageComponent  },
  { path: 'Subjects',component: SubjectsComponent  },
  { path: 'Subject/:id',component: CoursesComponent  },
  { path: 'Course/:id',component: CourseSectionComponent  },
  { path: 'Section/:id',component: SectionDetailsComponent  },
  { path: 'Guide',component: GuideComponent  }  
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


