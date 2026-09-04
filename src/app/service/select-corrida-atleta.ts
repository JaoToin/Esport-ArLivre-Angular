import { Injectable } from '@angular/core';
import {Atleta} from '../models/atleta';
import {selectCorrida} from '../models/corrida-select';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Inscricao } from '../models/inscricao';


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
    const urlAPi = `http://127.0.0.1:8000/corrida/`
    return this.http.get<selectCorrida[]>(urlAPi);
  }

  adicionarAtleta(inscricao: Inscricao): Observable<Inscricao> {
    const urlApi = `http://127.0.0.1:8000/inscricao`

    return this.http.post<Inscricao>(urlApi, inscricao)
  }
}
