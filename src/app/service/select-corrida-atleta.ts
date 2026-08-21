import {injectable} from '@angular/core';
import {Atleta} from '../models/atleta';
import {selectCorrida} from '../models/corrida-select';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@injectable({
  providedIn: 'root'
})
export class SelectCorridaAtletaService {
  constructor(private http: HttpClient) {}

  getAtletas(atleta: Atleta): Observable<Atleta[]> {
    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${atleta.id}`
    return this.http.get<Atleta[]>(urlAPi);
  }

  getCorridas(corrida: selectCorrida): Observable<selectCorrida[]> {
    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${corrida.id}`
    return this.http.get<selectCorrida[]>(urlAPi);
  }
}
