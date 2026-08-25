import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtletaService } from '../../../service/atleta-service';
import { AtletaListaComponent } from './atleta-lista-component';
import {provideHttpClient} from '@angular/common/http'

describe('AtletaListaComponent', () => {
  let component: AtletaListaComponent;
  let fixture: ComponentFixture<AtletaListaComponent>;

  let service: AtletaService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtletaListaComponent],
      providers: [
        AtletaService, provideHttpClient
      ]
    }).compileComponents();

    service = TestBed.inject(AtletaService)

    fixture = TestBed.createComponent(AtletaListaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('Resultado Esperado é Calcular Corretamente a Idade', () => {
    const resultado = service.calcularIdade('2008-06-24')
    expect(resultado).toBe(18);
  });
});
