import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Corrida } from '../models/corrida';

@Injectable({
  providedIn: 'root',
})
export class CorridaService {
  constructor(private http: HttpClient) {}

  salvarCorrida(corrida: Corrida) {
    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`;

    this.http.post<Corrida>(urlAPi, corrida)
      .subscribe({
        next: (respostaAPI) => {
          return respostaAPI
        },
        error: (msgErro) => {
          return msgErro
        }
      })
  }

  listarCorridas():Corrida[] {
    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`;

    this.http.get<Corrida[]>(urlAPi)
      .subscribe({
        next: (corridasAPI) => {
          return corridasAPI
        },
        error: (msgErro) => {
          return msgErro
        }
      })

      return[]
  }


  listarCorrida(idCorrida: Number): Partial<Corrida>{
    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`;

   return this.http.get<Corrida>(urlAPi)


  }

  excluirCorrida(idCorrida: Number){
    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`;

    this.http.delete<Corrida>(urlAPi)
      .subscribe({
        next: (repostaAPI) => {
          return repostaAPI
        },
        error: (msgErro) => {
          return msgErro
        }
      })
  }

  alterarCorrida( corrida: Corrida){
    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${corrida.id}`;

    this.http.put<Corrida>(urlAPi, Corrida)
      .subscribe({
        next: (repostaAPI) => {
          return repostaAPI
        },
        error: (msgErro) => {
          return msgErro
        }
      })
  }
}
