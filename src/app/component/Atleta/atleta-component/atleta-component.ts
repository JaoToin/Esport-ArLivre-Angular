import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtletaService } from '../../../service/atleta-service';
import { Pessoa } from '../../../models/pessoa';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-atleta-component',
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
export class AtletaComponent {



    //DELCARAÇÃO DOS ATRIBUTOS DO COMPONENTE
    id = 0
    nome = ''
    cpf = 0
    sexo = ''
    cep = 0
    rua_logradouro = ''
    bairro = ''
    cidade = ''
    uf = ''
    data = ''
    altura = 0 //
    peso = 0 //
    editar = false
    idAtleta = 0
    classificacao = '' //
    resultado: number | null = null
    imcAtleta = 0 //

  //DECLARAÇÃO DO CONSTRUTOR
    constructor(private atletaService: AtletaService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }

    //DECLARAÇÃO DE FUNÇÕES
    exibeDados() {
      console.log(this.nome, this.data, this.cpf, this.sexo, this.rua_logradouro, this.bairro, this.cidade, this.uf)
    }

    ngOnInit() {
      this.idAtleta = Number(this.route.snapshot.paramMap.get('id'))

      if (this.idAtleta > 0) {
        this.editar = true
        this.carregaCampo(this.idAtleta)
      }

    }

    carregaCampo(idAtleta: number) {
      this.atletaService.listarAtleta(idAtleta)
        .subscribe({
          next: (objAtleta) => {
            this.id = objAtleta.id
            this.nome = objAtleta.nome
            this.cpf = objAtleta.cpf
            this.sexo = objAtleta.sexo
            this.cep = objAtleta.cep
            this.rua_logradouro = objAtleta.rua_logradouro
            this.bairro = objAtleta.bairro
            this.cidade = objAtleta.cidade
            this.uf = objAtleta.uf
            this.data = objAtleta.data_nascimento
            this.altura = objAtleta.altura
            this.peso = objAtleta.peso

            this.imcAtleta = this.atletaService.CalcIMC(this.peso, this.altura); //
            this.classificacao = this.atletaService.classificarIMC(this.imcAtleta); //

            this.cdr.detectChanges()
          }, error: (msgErro) => {
            console.log("Erro ao Listar  o atleta ", msgErro)
          }
        })
    }

    enviaDadosAtleta() {
      const pessoaAtleta = new Pessoa()
      pessoaAtleta.nome = this.nome
      pessoaAtleta.cpf = this.cpf
      pessoaAtleta.sexo = this.sexo
      pessoaAtleta.cep = this.cep
      pessoaAtleta.rua_logradouro = this.rua_logradouro
      pessoaAtleta.bairro = this.bairro
      pessoaAtleta.cidade = this.cidade
      pessoaAtleta.uf = this.uf
      pessoaAtleta.data_nascimento = this.data
      pessoaAtleta.altura = this.altura
      pessoaAtleta.peso = this.peso





      if (!this.editar) {
        this.atletaService.adicionarAtleta(pessoaAtleta)
          .subscribe({
            next: (resposta) => {
              console.log(resposta)
            },
            error: (msgErro) => {
              console.log("Erro ao cadastrar  o atleta ", msgErro)
            }
          })
      } else {
        pessoaAtleta.id = this.idAtleta

        this.atletaService.alterarAtleta(pessoaAtleta)
          .subscribe({
            next: (resposta) => {
              console.log(pessoaAtleta)

              console.log(resposta)
            },
            error: (msgErro) => {
              console.log("Erro ao alterar  o atleta ", msgErro)
            }
          })

      }

      this.limpar()

    }

    listaAtleta(idAtleta: number) {
      this.atletaService.listarAtleta(idAtleta)
        .subscribe({
          next: (dados) => {
            console.table(dados)
          },
          error: (msgErro) => {
            console.log("Erro ao listar atletas ", msgErro)
          }
        })
    }



    limpar() {
      this.nome = ''
      this.cpf = 0
      this.sexo = ''
      this.cep = 0
      this.rua_logradouro = ''
      this.bairro = ''
      this.cidade = ''
      this.uf = ''
      this.data = ''
      this.altura = 0
      this.peso = 0
    }


  /*
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

    this.limpar()
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

    this.atletaService.salvarPessoa(pessoaAtleta)
    .subscribe({
      next: (resposta)=>{
        console.log( resposta)
      },
      error:(msgErro)=>{
        console.log( msgErro)
      }
    })
    this.atletaService.listarPessoas()
    this.limpar()
  }


  limpar(){
    this.nome = ''
    this.cpf = 0
    this.cep = 0
    this.bairro = ''
    this.sexo = ''
    this.ruaLogradouro = ''
    this.cidade = ''
    this.uf = ''
  }
*/
}
