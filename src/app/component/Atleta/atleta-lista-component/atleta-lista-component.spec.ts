import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletaListaComponent } from './atleta-lista-component';

describe('AtletaListaComponent', () => {
  let component: AtletaListaComponent;
  let fixture: ComponentFixture<AtletaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtletaListaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtletaListaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
