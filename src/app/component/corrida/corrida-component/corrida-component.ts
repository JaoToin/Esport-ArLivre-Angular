import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Corrida } from '../../../models/corrida';
import { CorridaService } from '../../../service/corrida';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

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

  idCorrida = 0
  editar = false

  constructor(private CorridaService: CorridaService, private ActivatedRoute: ActivatedRoute, private cdr: ChangeDetectorRef){}

  ngOnInit() {
    this.idCorrida = Number(this.ActivatedRoute.snapshot.paramMap.get('id'))

    if (this.idCorrida > 0) {
      this.editar = true
      this.carregaDados(this.idCorrida)
    }

  }
  dadosFormulario(){

    const corrida = new Corrida()

    corrida.descricao = this.descricao
    corrida.data = this.data
    corrida.distancia5km = this.distancia5km
    corrida.distancia10km = this.distancia10km
    corrida.distancia25km = this.distancia25km

    if (this.editar) {
      corrida.id = this.idCorrida

      this.CorridaService.alterarCorrida(corrida)
        .subscribe({
          next: (respostaAPI) => {
            return respostaAPI
          },
          error: (msgErro) => {
            return msgErro
          }
        })

    } else {
      this.CorridaService.salvarCorrida(corrida)
        .subscribe({
          next: (respostaAPI) => {
            return respostaAPI
          },
          error: (msgErro) => {
            return msgErro
          }
        })
    }


    this.limpar()

  }

  carregaDados(idCorrida: number) {
    this.CorridaService.listarCorrida(idCorrida)
      .subscribe({
        next: (dadosCorrida) => {
          this.descricao = dadosCorrida.descricao
          this.data = dadosCorrida.data
          this.distancia5km = dadosCorrida.distancia5km
          this.distancia10km = dadosCorrida.distancia10km
          this.distancia25km = dadosCorrida.distancia25km

          this.cdr.detectChanges()
        },
        error: (msgErro) => {
          return msgErro
        }
      })
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
