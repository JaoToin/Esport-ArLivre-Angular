import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaComponent } from './tabela-component';

describe('TabelaComponent', () => {
  let component: TabelaComponent;
  let fixture: ComponentFixture<TabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabelaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
