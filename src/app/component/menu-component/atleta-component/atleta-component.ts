import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atleta-component',
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
export class AtletaComponent {

  //DECLARAÇÃO DOS ATRIBUTOS DO COMPONENT
  nome = ''
  cpf = ''
  sexo = ''
  cep = ''
  ruaLogradouro = ''
  bairro = ''
  cidade = ''
  uf = ''

  //DECLARAÇÃO DE FUNÇÕES
  exibeDados(){
    console.log(this.nome, this.cpf, this.sexo, this.cep, this.ruaLogradouro, this.bairro, this.cidade, this.uf)
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
