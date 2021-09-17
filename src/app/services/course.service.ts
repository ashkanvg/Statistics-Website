import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class MyApi {
    baseUrl = 'https://statistics-website-test.herokuapp.com/';
    courseUrl = this.baseUrl + 'api/v0/courses/';
    sessionUrl = this.baseUrl + 'api/v0/sessions/';
    contentUrl = this.baseUrl + 'api/v0/contents/';
    //chartsUrl = this.baseUrl + 'chart/';
    
    /*
    api/v0/courses/
    api/v0/sessions/
    api/v0/contents/
    */

    constructor(private httpClient:HttpClient){
        //this.BaseUrl = window['apiUrl'];
    }
    
    getCourses():Observable<any>{
        return this.httpClient.get<any>(this.courseUrl);
    }
    getSections(course: string):Observable<any>{
        let params: any = {};
        params['course'] = course;
        return this.httpClient.get<any>(this.sessionUrl, {params});
    }
    getContents(section: string):Observable<any>{
        let params: any = {};
        params['session'] = section;
        return this.httpClient.get<any>(this.contentUrl, {params});
    }
    
}



