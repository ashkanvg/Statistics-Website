import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class MyApi {
    baseUrl = 'https://statistics-website.herokuapp.com/';
    //baseUrl = 'http://localhost:8000/';
    
    coursesUrl = this.baseUrl + 'api/v0/courses/';
    sessionsUrl = this.baseUrl + 'api/v0/sessions/';
    contentsUrl = this.baseUrl + 'api/v0/contents/';
    subjectsUrl = this.baseUrl + 'api/v0/subjects/';
    
    /*
    api/v0/courses/
    api/v0/sessions/
    api/v0/contents/
    */

    constructor(private httpClient:HttpClient){
        //this.BaseUrl = window['apiUrl'];
    }
    
    getSubjects():Observable<any>{
        return this.httpClient.get<any>(this.subjectsUrl);
    }
    getCourses(subject: string):Observable<any>{
        let params: any = {};
        params['subject'] = subject;
        return this.httpClient.get<any>(this.coursesUrl, {params});
    }
    getSections(course: string):Observable<any>{
        let params: any = {};
        params['course'] = course;
        return this.httpClient.get<any>(this.sessionsUrl, {params});
    }
    getContents(section: string):Observable<any>{
        let params: any = {};
        params['session'] = section;
        return this.httpClient.get<any>(this.contentsUrl, {params});
    }
    
}



