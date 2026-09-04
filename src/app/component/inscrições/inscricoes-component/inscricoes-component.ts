import { selectCorrida } from './../../../models/corrida-select';
import { Atleta } from './../../../models/atleta';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SelectCorridaAtletaService} from '../../../service/select-corrida-atleta';
import {Inscricao} from '../../../models/inscricao';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inscricoes-component',
  imports: [FormsModule],
  templateUrl: './inscricoes-component.html',
  styleUrl: './inscricoes-component.css',
})
export class InscricoesComponent {

  atletas: Atleta[] = [];
  corridas: selectCorrida[] = [];
  atleta = '';
  corrida = '';
  tamanho = '';
  categoria = '';
  distancia = '';

  constructor(private selectCorridaAtletaService: SelectCorridaAtletaService,
   private router: ActivatedRoute) {}

ngOnInit() {
  const idPessoa = this.router.snapshot.paramMap.get('id');

  this.carregarAtletas()
  this.carregarCorridas()
  }

  limpar(){
    this.atleta = '';
    this.corrida = '';
    this.tamanho = '';
    this.categoria = '';
    this.distancia = '';
  }

  carregarAtletas() {
    this.selectCorridaAtletaService.getAtletas()
    .subscribe({
      next: (atletas) => {
        this.atletas = [...atletas].sort((a, b) => (a.nome || '').localeCompare(b.nome));
      },
      error: (error) => {
        console.log('Erro ao carregar atletas:', error);
      }
    })


}

  carregarCorridas() {
    this.selectCorridaAtletaService.getCorridas()
    .subscribe({
      next: (corridas) => {
        this.corridas = [...corridas].sort((a, b) =>(a.descricao_corrida || '').localeCompare(b.descricao_corrida));
      },
      error: (error) => {
        console.log('Erro ao carregar corridas:', error);
      }
    })
  }

    salvarInscricao(){
      const inscricao = new Inscricao();
      inscricao.atleta = this.atleta;
      inscricao.descricao_corrida = this.corrida;
      inscricao.tamanho_camisa = this.tamanho;
      inscricao.categoria = this.categoria;
      inscricao.distancia = this.distancia;

      console.log('Inscrição salva:', inscricao);
      this.limpar();
    }
    }

