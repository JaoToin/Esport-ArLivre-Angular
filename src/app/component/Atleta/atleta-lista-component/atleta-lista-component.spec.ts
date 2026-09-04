import { Pessoa } from './../../../models/pessoa';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtletaService } from '../../../service/atleta-service';
import { AtletaListaComponent } from './atleta-lista-component';
import {provideHttpClient} from '@angular/common/http'
import {provideHttpClientTesting, HttpTestingController} from '@angular/common/http/testing'
import { describe, it, expect, beforeEach } from 'vitest';

describe('AtletaListaComponent', () => {
  let component: AtletaListaComponent;
  let fixture: ComponentFixture<AtletaListaComponent>;

  let service: AtletaService
  let httpMock: HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtletaListaComponent],
      providers: [
        AtletaService, provideHttpClient(), provideHttpClientTesting()
      ]
    }).compileComponents();

    service = TestBed.inject(AtletaService)

    httpMock = TestBed.inject(HttpTestingController)


  });

  it('Resultado Esperado é Calcular Corretamente a Idade', () => {
    const resultado = service.calcularIdade('2008-06-24')
    expect(resultado).toBe(18);
  });

  it('Resultado Esperado a Lista de Atletas', ()=> {
    const atletas: Pessoa[] = [{
        "nome": "Rute",
        "cpf": 78945612300,
        "sexo": "",
        "cep": 49001456,
        "rua_logradouro": "Rua Capela",
        "bairro": "Centro",
        "cidade": "Aracaju",
        "uf": "SE",
        "data_nascimento": "1980-02-12",
        "id": 1,
        "peso": 10,
        "altura": 10
      },
    {
        "nome": "Rute",
        "cpf": 78945612300,
        "sexo": "",
        "cep": 49001456,
        "rua_logradouro": "Rua Capela",
        "bairro": "Centro",
        "cidade": "Aracaju",
        "uf": "SE",
        "data_nascimento": "1980-02-12",
        "id": 1,
        "peso": 10,
        "altura": 10
      }]

      service.listarAtletas().subscribe(result =>{
        expect(result).toEqual(atletas)
      })

      const requisicao = httpMock.expectOne('http://127.0.0.1:8000/pessoa')

      expect(requisicao.request.method).toBe('GET')

      requisicao.flush(atletas)

    })

    it('Resultado Esperado Adicionar Atleta', () => {
      const atleta: Pessoa = {
        "nome": "Rute",
        "cpf": 78945612300,
        "sexo": "",
        "cep": 49001456,
        "rua_logradouro": "Rua Capela",
        "bairro": "Centro",
        "cidade": "Aracaju",
        "uf": "SE",
        "data_nascimento": "1980-02-12",
        "id": 1,
        "peso": 10,
        "altura": 10
      }

      service.adicionarAtleta(atleta).subscribe(result =>{
        expect(result).toEqual(atleta)
      })

      const requisicao = httpMock.expectOne('http://127.0.0.1:8000/pessoa')

      expect(requisicao.request.method).toBe('POST')
      requisicao.flush(atleta)
    })


    it('Resultado Esperado Excluir Atleta', () => {
      const atleta: Pessoa = {
        "nome": "Rute",
        "cpf": 78945612300,
        "sexo": "",
        "cep": 49001456,
        "rua_logradouro": "Rua Capela",
        "bairro": "Centro",
        "cidade": "Aracaju",
        "uf": "SE",
        "data_nascimento": "1980-02-12",
        "id": 1,
        "peso": 10,
        "altura": 10
      }

      service.exluirAtleta(atleta).subscribe(result =>{
        expect(result).toEqual(atleta)
      })

      const requisicao = httpMock.expectOne('http://127.0.0.1:8000/pessoa/1')

      expect(requisicao.request.method).toBe('DELETE')
      requisicao.flush(atleta)
    })

    it('Resultado Esperado Alterar Atleta', () => {
      const atleta: Pessoa = {
        "nome": "Rute",
        "cpf": 78945612300,
        "sexo": "",
        "cep": 49001456,
        "rua_logradouro": "Rua Capela",
        "bairro": "Centro",
        "cidade": "Aracaju",
        "uf": "SE",
        "data_nascimento": "1980-02-12",
        "id": 1,
        "peso": 10,
        "altura": 10
      }

      service.alterarAtleta(atleta).subscribe(result =>{
        expect(result).toEqual(atleta)
      })

      const requisicao = httpMock.expectOne('http://127.0.0.1:8000/pessoa/1')

      expect(requisicao.request.method).toBe('PUT')
      requisicao.flush(atleta)
    })

});
