import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../models/tema';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  temaURL = 'http://localhost:8080/temas'
  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<Tema[]>{
    return this.HttpClient.get<Tema[]>(this.temaURL);
  }

  public GetId(idtema: number): Observable<any>{
    return this.HttpClient.get(this.temaURL + "/tema/" + idtema)
  }
}
