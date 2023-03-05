import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Model/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  Url= 'http://localhost:8000/Ejemplo1/personas';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }
}
