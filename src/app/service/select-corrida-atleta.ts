import { Injectable } from '@angular/core';
import {Atleta} from '../models/atleta';
import {selectCorrida} from '../models/corrida-select';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectCorridaAtletaService {
  constructor(private http: HttpClient) {}

  getAtletas(): Observable<Atleta[]> {
    const urlAPi = `http://127.0.0.1:8000/pessoa/`
    return this.http.get<Atleta[]>(urlAPi);
  }

  getCorridas(): Observable<selectCorrida[]> {
    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`
    return this.http.get<selectCorrida[]>(urlAPi);
  }
}
