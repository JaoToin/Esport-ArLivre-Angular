import { Router } from '@angular/router';
import { Component, signal} from '@angular/core';
import { CorridaService } from '../../../service/corrida';
import { Corrida } from '../../../models/corrida';


@Component({
  selector: 'app-tabela-component',
  imports: [],
  templateUrl: './tabela-component.html',
  styleUrl: './tabela-component.css',
})
export class TabelaComponent {

  listaCorridas = signal<Corrida[]>([])

  constructor(private CorridaService: CorridaService, private router: Router){}

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

      .subscribe({
        next: (respostaAPI) => {
          this.listaCorridas.update(elem => elem.filter(a => a.id !== objCorrida.id))
          console.log('Atleta Excluído Com Sucesso', respostaAPI)
        },
      error: (msgErro) => {
        return msgErro
      }

      })
    }
    this.ngOnInit
  }

  CarregandoDados(objCorrida: Corrida){
    this.router.navigate(["/cadastrocorrida", objCorrida.id])
  }
}
