import { Injectable } from '@angular/core';
import { Corrida } from '../models/corrida';

@Injectable({
  providedIn: 'root',
})
export class CorridaService{
  private corrida: Corrida[] = []

  adicionarCorrida (run: Corrida){

    run.id = this.corrida.length + 1

    this.corrida.push(run)
  }

  listarCorrida (){
    console.table(this.corrida)
  }

}
