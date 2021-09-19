import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { HomeComponent } from './home/home.component';
import { CourseSectionComponent } from './course-section/course-section.component';
import { SectionDetailsComponent } from './section-details/section-details.component';


// api:
import { HttpClientModule } from '@angular/common/http';
import { MyApi } from './services/course.service'

import { enableProdMode } from '@angular/core';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseSectionComponent,
    SectionDetailsComponent
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
    MatButtonModule
  ],
  providers: [MyApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
