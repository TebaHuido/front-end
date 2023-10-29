import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/interfaces/personas';
@Injectable({
  providedIn: 'root'
})
export class EgresadosService {
  private url = 'http://localhost:3000/datos';

  constructor(private http: HttpClient) {}

  getEgresados(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url);
  }
}
