import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  libroURL = 'http://localhost:8080/libros'
  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<Libro[]>{
    return this.HttpClient.get<Libro[]>(this.libroURL);
  }

  public GetId(idlibro: number): Observable<any>{
    return this.HttpClient.get(this.libroURL + "/libro/" + idlibro)
  } 

  public eliminar(productId: number): Observable<any> {
    return this.HttpClient.delete(this.libroURL + "/cod/" + productId);
  } 

  public guardar(libro:any): Observable<any> {
    return this.HttpClient.post(this.libroURL + "/nuevoLib", libro);
  }

  public actualizar(libro: number,libroAct:any): Observable<any>{
    return this.HttpClient.put(this.libroURL + "/actualizar/" + libro, libroAct);
  }
}
