import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { CoursesComponent } from './courses/courses.component';
import { CourseSectionComponent } from './course-section/course-section.component';
import { SectionDetailsComponent } from './section-details/section-details.component';


// api:
import { HttpClientModule } from '@angular/common/http';
import { MyApi } from './services/course.service'

import { enableProdMode } from '@angular/core';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { GuideComponent } from './guide/guide.component';
import { GuidanceInformationComponent } from './guidance-information/guidance-information.component';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseSectionComponent,
    SectionDetailsComponent,
    MainpageComponent,
    SubjectsComponent,
    GuideComponent,
    GuidanceInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    NgbModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatChipsModule
  ],
  providers: [MyApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
