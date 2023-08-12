import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Construtor
  constructor(private http:HttpClient) { }

  // Método de autenticacao
  autenticar(obj:any):Observable<any>{
    return this.http.post<any>('http://localhost:8080/login', obj);
  }

  // Método para validar o token
  validarToken():Observable<any>{

    const cabecalho = new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':`Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get<any>('http://localhost:8080/login', {headers : cabecalho});
  }

}
