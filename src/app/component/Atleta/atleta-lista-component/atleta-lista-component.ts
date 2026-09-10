import { Pessoa } from './../../../models/pessoa';
import { Component, signal } from '@angular/core';
import { AtletaService } from '../../../service/atleta-service';
//import { Pessoa } from '../../models/Atleta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atleta-lista-component',
  imports: [],
  templateUrl: './atleta-lista-component.html',
  styleUrl: './atleta-lista-component.css',
})
export class AtletaListaComponent {

  //DECLARAÇÃO ARRAY DO TIPO PESSOA
  //listaAtletas: Atleta[] = []
  listaAtletas = signal<Pessoa[]>([])

  //DECLARAÇÃO CONSTRUTOR
  constructor(private router: Router, private http: AtletaService) { }

  //EXECUTAR INSTRUÇÕES AO CARREGAR CRIAR O COMPONENTE
  ngOnInit() {
    this.listarAtletas()
  } ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //LISTAR OS ATLETAS
  listarAtletas() {
    this.http.listarAtletas()
      .subscribe({
        next: (dados) => {
          //
          const atletasComIMC = dados.map(atleta => {
            atleta.imc = this.http.CalcIMC(atleta.peso, atleta.altura);
            atleta.classificacao = this.http.classificarIMC(atleta.imc);
            return atleta;
          });

          //
          const listaOrdenada = atletasComIMC.sort((a, b) => a.nome.localeCompare(b.nome));
          this.listaAtletas.set(listaOrdenada);
        },
        error: (msgErro) => {
          console.log("Erro ao listar os atletas ", msgErro);
        }
      });
  } ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //EXCLUIR ATLETA
  excluirAtleta(atleta: Pessoa){
    if(confirm(`Deseja excluir ${atleta.nome} da competição? `)){
      this.http.exluirAtleta(atleta)
      .subscribe({
        next:(dados)=>{
           this.listaAtletas.update(elem =>
            elem.filter(a => a.id !== atleta.id)
          );

          console.log('Atleta excluído com Sucesso ', dados)
        },
        error: (msgErro) => {
          console.log("Erro ao Excluir  o atleta ", msgErro)
        }
      })

    }
    this.ngOnInit()
  } ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //ALTERAR DADOS
  buscarPessoa(idAtleta: Pessoa){
    this.router.navigate(['/cadastroatleta', idAtleta])
  } ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Idade de nascimento para Anos

  calcIdade(data_nascimento: string){
    return this.http.calcularIdade(data_nascimento)
  } ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  carregarIMC(){
    this.http.listarAtletas().subscribe({
      next:(dados) => {
        const IMC = dados.map(atleta =>{
          atleta.imc = this.http.CalcIMC(atleta.peso, atleta.altura)
          atleta.classificacao = this.http.classificarIMC(atleta.imc)
          return atleta
        })
        this.listaAtletas.set(IMC)
      },

    })
  }




}//FIM COMPONENT AtletaListaComponent
