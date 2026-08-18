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

  listarCorrida(){
    console.table(this.corrida)
    return this.corrida
  }

  private localizarCorrida(idCorrida: number){
    return this.corrida.findIndex(elem => elem.id === idCorrida)
  }

  remover(posicaoArray: number){
    this.corrida.splice(1,posicaoArray)
  }

  alterar(run : Corrida){
    let posArray = this.localizarCorrida(run.id)

    if(posArray >= 0){
      this.corrida[posArray] = run
    }
  }

}
