import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EgresadosService {

  constructor(private http: HttpClient) {}

  getEgresados(){
    return this.http.get('localhost:3000/datos');
  }

}
