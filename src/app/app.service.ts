import { RequestModel } from './../model/request.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResponseModel } from '../model/response.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class AppService {


  constructor(private http: HttpClient) {
  }


  verificaAutomato(form:FormGroup){
    const dados: RequestModel = {
      input: form.get('valor')!.value
    } as RequestModel

    return this.http.post<ResponseModel>("http://localhost:8080/api/verifica", dados, httpOptions);
  }

  ola(): Observable<any>{
    return this.http.get("http://localhost:8080/api/teste");
  }
}
