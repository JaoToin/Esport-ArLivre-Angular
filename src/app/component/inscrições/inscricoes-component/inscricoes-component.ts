import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SelectCorridaAtletaService} from '../../../service/select-corrida-atleta';
import {Atleta} from '../../../models/atleta';
import {selectCorrida} from '../../../models/corrida-select';
import {Inscricao} from '../../../models/inscricao';

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

  constructor(private selectCorridaAtletaService: SelectCorridaAtletaService) {}

ngOnInit() {
    this.carregarAtletas();
    this.carregarCorridas();
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
        this.atletas = [...atletas].sort((a, b) => a.nome.localeCompare(b.nome));
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
        this.corridas = [...corridas].sort((a, b) => a.nome.localeCompare(b.nome));
      },
      error: (error) => {
        console.log('Erro ao carregar corridas:', error);
      }
    })

    salvarInscricao() {
      const inscricao: Inscricao = new Inscricao();
      inscricao.atleta = this.atleta;
      inscricao.corrida = this.corrida;
      inscricao.tamanho = this.tamanho;
      inscricao.categoria = this.categoria;
      inscricao.distancia = this.distancia;

      // Aqui você pode fazer algo com a inscrição, como enviá-la para um serviço ou armazená-la em algum lugar.
      console.log('Inscrição salva:', inscricao);
    }
    this.carregarAtletas();
    this.carregarCorridas();
    this.limpar();
      };


}

