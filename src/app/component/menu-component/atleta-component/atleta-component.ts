import { AtletaService } from './../../../service/atleta-service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtletaService } from '../../../service/atleta-service';
import { Pessoa } from '../../../models/pessoa';

@Component({
  selector: 'app-atleta-component',
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
export class AtletaComponent {

  //DECLARAÇÃO DOS ATRIBUTOS DO COMPONENT
  nome = ''
  cpf = 0
  sexo = ''
  cep = 0
  ruaLogradouro = ''
  bairro = ''
  cidade = ''
  uf = ''

  //DECLARAÇÃO DO CONSTRUTOR
  constructor(private atletaService: AtletaService ){}

  //DECLARAÇÃO DE FUNÇÕES
  exibeDados(){
    console.log(this.nome, this.cpf, this.sexo, this.cep, this.ruaLogradouro, this.bairro, this.cidade, this.uf)
  }

  salvarAtleta(){
    const pessoaAtleta = new Pessoa()
    pessoaAtleta.nome = this.nome
    pessoaAtleta.cpf = this.cpf
    pessoaAtleta.sexo = this.sexo
    pessoaAtleta.cep = this.cep
    pessoaAtleta.rua = this.ruaLogradouro
    pessoaAtleta.bairro = this.bairro
    pessoaAtleta.cidade = this.cidade
    pessoaAtleta.uf = this.uf

    this.atletaService.adicionar(pessoaAtleta)
  }


  limpar(){
    this.nome
    this.cpf
    this.cep
    this.bairro
    this.sexo
    this.ruaLogradouro
    this.cidade
    this.uf
  }
}
