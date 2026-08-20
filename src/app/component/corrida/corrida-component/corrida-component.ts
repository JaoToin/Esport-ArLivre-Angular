import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Corrida } from '../../../models/corrida';
import { CorridaService } from '../../../service/corrida';

@Component({
  selector: 'app-corrida-component',
  imports: [FormsModule],
  templateUrl: './corrida-component.html',
  styleUrl: './corrida-component.css',
})
export class CorridaComponent {

  id = 0
  descricao = ''
  data = ''
  distancia5km = false
  distancia10km = false
  distancia25km = false

  constructor(private CorridaService: CorridaService){}

  dadosFormulario(){

    const corrida = new Corrida()

    corrida.descricao = this.descricao
    corrida.data = this.data
    corrida.distancia5km = this.distancia5km
    corrida.distancia10km = this.distancia10km
    corrida.distancia25km = this.distancia25km

    this.CorridaService.salvarCorrida(corrida)

    this.limpar()

  }


  limpar(){
   this.id = 0
   this.descricao = ''
   this.data = ''
   this.distancia5km = false
   this.distancia10km = false
   this.distancia25km = false

  }
}
