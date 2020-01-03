import { Injectable } from '@angular/core';
import { Observable } from 'observable'
import { Cookie } from 'ng2-cookies/ng2-cookies'
import 'rxjs/add/operator/catch';
import'rxjs/add/operator/do';
import'rxjs/add/operator/toPromise';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url='https://chatapi.edwisor.com/api/v1/users'



  constructor(public http:HttpClient) { }

  public signupFunction(data): Observable<any>{

    const params= new HttpParams()
    .set('firstName',data.firstName)
    .set('lastName',data.lastName)
    .set('mobileNumber',data.mobileNumber)
    .set('email',data.email)
    .set('password',data.password)
    .set('apiKey',data.apiKey);

    return this.http.post(this.url+'/signup',params)

  }



  public signinFunction(data):Observable<any>{


  const  params=new HttpParams()
.set('email',data.email)
.set('password',data.password);

return this.http.post(this.url+'/login',params)



  }









}
