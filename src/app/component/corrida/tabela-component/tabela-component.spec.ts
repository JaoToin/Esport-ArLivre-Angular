import { TestBed } from '@angular/core/testing';
import { Corrida } from '../../../models/corrida';
import { CorridaService } from '../../../service/corrida';
import { TabelaComponent } from './tabela-component';
import { provideHttpClient } from '@angular/common/http'
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing'

describe('TabelaComponent', () => {

  let service: CorridaService
  let httpMock: HttpTestingController


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [TabelaComponent, provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    service = TestBed.inject(CorridaService)

    httpMock = TestBed.inject(HttpTestingController)
  });

  ///////// LISTAR ///////////////

  it('Resultado esperado para Listar Corrida', () => {
    const corrida: Corrida[] = [
      {
      "id": 2,
      "data": "24-06-0080",
      "descricao": "oi",
      "distancia5km": true,
      "distancia10km": false,
      "distancia25km": false
    }
  ]
    service.listarCorridas().subscribe(result => {
      expect(result).toEqual(corrida)
    })

    const requisicao = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida')

    expect(requisicao.request.method).toBe('GET')

    requisicao.flush(corrida)
  });


  ///////////// ALTERAR ///////////////


  it('Resultado esperado para Alterar Corrida', () => {
    const corrida: Corrida =
      {
      "id": 2,
      "data": "24-06-0080",
      "descricao": "oi",
      "distancia5km": true,
      "distancia10km": false,
      "distancia25km": false
    }

    service.alterarCorrida(corrida).subscribe(result => {
      expect(result).toEqual(corrida)
    })

    const requisicao = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/2')

    expect(requisicao.request.method).toBe('PUT')

    requisicao.flush(corrida)
  });

  //////// EXCLLUIR ////////////

  it('Resultado esperado para Excluir Corrida', () => {
    const corrida: Corrida =
      {
      "id": 2,
      "data": "24-06-0080",
      "descricao": "oi",
      "distancia5km": true,
      "distancia10km": false,
      "distancia25km": false
    }

    service.excluirCorrida(2).subscribe(result => {
      expect(result).toEqual(corrida)
    })

    const requisicao = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/2')

    expect(requisicao.request.method).toBe('DELETE')

    requisicao.flush(corrida)
  });


  //////// LISTAR UMA CORRIDA ////////

  it('Resultado esperado para Listar Uma Corrida', () => {
    const corrida: Corrida =
      {
      "id": 2,
      "data": "24-06-0080",
      "descricao": "oi",
      "distancia5km": true,
      "distancia10km": false,
      "distancia25km": false
    }

    service.listarCorrida(2).subscribe(result => {
      expect(result).toEqual(corrida)
    })

    const requisicao = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/2')

    expect(requisicao.request.method).toBe('GET')

    requisicao.flush(corrida)
  });

  ///////////// SALVAR ////////////

  it('Resultado esperado para Salvar Corrida', () => {
    const corrida: Corrida =
      {
      "id": 2,
      "data": "24-06-0080",
      "descricao": "oi",
      "distancia5km": true,
      "distancia10km": false,
      "distancia25km": false
    }

    service.salvarCorrida(corrida).subscribe(result => {
      expect(result).toEqual(corrida)
    })

    const requisicao = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida')

    expect(requisicao.request.method).toBe('POST')

    requisicao.flush(corrida)
  });
});
  