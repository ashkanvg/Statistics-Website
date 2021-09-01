import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseSectionComponent } from './course-section/course-section.component';
import { HomeComponent } from './home/home.component';
import { SectionDetailsComponent } from './section-details/section-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home',component: HomeComponent  },
  { path: 'Course/:id',component: CourseSectionComponent  },
  { path: 'Section/:course_id/:section_id',component: SectionDetailsComponent  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


