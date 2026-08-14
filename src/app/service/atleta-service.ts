import { Pessoa } from '../models/pessoa';
import { Injectable } from '../../../node_modules/@angular/core/types/core';

@Injectable({
  providedIn: 'root',
})
export class AtletaService {
  private atleta: Pessoa[] =[]

  adicionar (pessoa: Pessoa){
    //ARMENGUE PARA GERAR ID
    pessoa.id = this.atleta.length + 1

    this.atleta.push(pessoa)
  }

  listar(){
    console.table(this.atleta)
    return this.atleta
  }

  private localizarAtleta(idAtleta: number){
    return this.atleta.findIndex(elem => elem.id === idAtleta)
  }

  remover(posicaoArray: number){
    this.atleta.splice(1,posicaoArray)
  }

  alterar(pessoa : Pessoa){
    let posArray = this.localizarAtleta(pessoa.id)

    if(posArray >= 0){
      this.atleta[posArray] = pessoa
    }
  }
}
