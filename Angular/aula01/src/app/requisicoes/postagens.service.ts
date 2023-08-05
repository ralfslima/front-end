import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postagem } from '../modelo/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagensService {

  // Variável
  link:string = 'https://jsonplaceholder.typicode.com/postsq';

  // Construtor
  constructor(private http:HttpClient) { }

  // Método para listar postagens
  listar():Observable<Postagem[]>{
    return this.http.get<Postagem[]>(this.link);
  }

}
