import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Meteo} from '../models/meteo.model';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get('https://prevision-meteo.ch/services/json/paris');
  }
  getNomVille(){
    return this.http.get<Meteo[]>('https://prevision-meteo.ch/services/json/paris');

  }
}
