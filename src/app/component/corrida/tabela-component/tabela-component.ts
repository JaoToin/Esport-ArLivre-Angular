import { Component, signal} from '@angular/core';
import { CorridaService } from '../../../service/corrida';
import { Corrida } from '../../../models/corrida';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tabela-component',
  imports: [FormsModule],
  templateUrl: './tabela-component.html',
  styleUrl: './tabela-component.css',
})
export class TabelaComponent {

  listaCorridas = signal<Corrida[]>([])

  constructor(private CorridaService: CorridaService){}

  ngOnInit(){
    this.listar()
  }

  listar(){
    this.CorridaService.listarCorridas()
    .subscribe({
      next: (dadosCorrida) => {
        this.listaCorridas.set([...dadosCorrida])
      },
      error: (msgErro) => {
        console.log(msgErro)
      }
    })
  }

  excluir(objCorrida: Corrida){
    if(confirm(`Deseja Excluir A Corrida ${objCorrida.descricao}`)){
      this.CorridaService.excluirCorrida(objCorrida.id)
    }
  }
}
