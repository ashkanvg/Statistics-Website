import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseSectionComponent } from './course-section/course-section.component';
import { HomeComponent } from './home/home.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SectionDetailsComponent } from './section-details/section-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/Main', pathMatch: 'full'},
  { path: 'Main',component: MainpageComponent  },
  { path: 'Home',component: HomeComponent  },
  { path: 'Course/:id',component: CourseSectionComponent  },
  { path: 'Section/:id',component: SectionDetailsComponent  } 

];
@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


