import { Pessoa } from './../models/pessoa';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AtletaService {
  //DECLARAÇÃO CONSTRUTOR
  constructor(private http: HttpClient) { }

  //ADICIONAR NA API
  adicionarAtleta(atleta: Pessoa): Observable<Pessoa> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta`

    return this.http.post<Pessoa>(urlApi, atleta)
  }

  //LISTAR ATLETAS NA API
  listarAtletas(): Observable<Pessoa[]> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta`

    return this.http.get<Pessoa[]>(urlApi)
  }

  //LISTAR ATLETA
  listarAtleta(idAtleta: number):Observable<Pessoa>{
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${idAtleta}`

    return this.http.get<Pessoa>(urlApi)
  }

  //EXCLUIR NA API
  exluirAtleta(atleta: Pessoa): Observable<Pessoa> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${atleta.id}`

    return this.http.delete<Pessoa>(urlApi)
  }

  //ALTERAR NA API
  alterarAtleta(atleta: Pessoa):Observable<Pessoa>{
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${atleta.id}`

    return this.http.put<Pessoa>(urlApi, atleta)
  }

  /*private Pessoa: Pessoa[] =[]


  adicionar (pessoa: Pessoa){
    //ARMENGUE PARA GERAR ID
    pessoa.id = this.Pessoa.length + 1

    this.Pessoa.push(pessoa)
  }

  listar(){
    console.table(this.Pessoa)
    return this.Pessoa
  }

  private localizarPessoa(idPessoa: number){
    return this.Pessoa.findIndex(elem => elem.id === idPessoa)
  }

  remover(posicaoArray: number){
    this.Pessoa.splice(1,posicaoArray)
  }

  alterar(pessoa : Pessoa){
    let posArray = this.localizarPessoa(pessoa.id)

    if(posArray >= 0){
      this.Pessoa[posArray] = pessoa
    }
  }
*/
}
