import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class MyApi {
    baseUrl = 'https://statistics-website.herokuapp.com/';
    
    coursesUrl = this.baseUrl + 'courses/api/v0/courses/';
    sessionsUrl = this.baseUrl + 'courses/api/v0/sessions/';
    contentsUrl = this.baseUrl + 'courses/api/v0/contents/';
    subjectsUrl = this.baseUrl + 'courses/api/v0/subjects/';
    questionsUrl = this.baseUrl + 'courses/api/v0/votes/';
    guidancesUrl = this.baseUrl + 'guides/api/v0/guides/';
    tagsUrl = this.baseUrl + 'guides/api/v0/tags/';
    


    constructor(private httpClient:HttpClient){
        //this.BaseUrl = window['apiUrl'];
    }
    

    // GET:
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
    getQuestions():Observable<any>{
        return this.httpClient.get<any>(this.questionsUrl);
    }
    getGuidances():Observable<any>{
        return this.httpClient.get<any>(this.guidancesUrl);
    }
    getGuidance(id: string):Observable<any>{
        return this.httpClient.get<any>(this.guidancesUrl+id);
    }
    getTags():Observable<any>{
        return this.httpClient.get<any>(this.tagsUrl);
    }


    // POST:
    postVoting(item: any): Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
        };
        return this.httpClient.post(this.questionsUrl, item, httpOptions)   
    }
    postFindGuidances(item: any): Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
        };
        return this.httpClient.post(this.guidancesUrl, item, httpOptions)   
    }

    
}



