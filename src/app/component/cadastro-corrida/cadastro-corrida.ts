import { Component } from '@angular/core';
import { Corrida } from '../../models/corrida';
import { CorridaService } from '../../service/corrida';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-corrida',
  imports: [FormsModule],
  templateUrl: './cadastro-corrida.html',
  styleUrl: './cadastro-corrida.css',
})
export class CadastroCorrida {

  descricao = ''
  data = ''
  distancia = ''

  constructor(private corridaService: CorridaService){}

  exibirCorrida(){
    console.log(this.descricao, this.data, this.distancia)
  }

  salvarCorrida(){
    const CorridaCad = new Corrida()
    CorridaCad.descricao = this.descricao
    CorridaCad.data = this.data
    CorridaCad.distancia = this.distancia

    this.corridaService.listarCorrida()
    this.limparCorrida()
  }

  limparCorrida(){
    this.descricao = ''
    this.data = ''
    this.distancia = ''
  }


}
