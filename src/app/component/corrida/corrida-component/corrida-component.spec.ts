import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridaComponent } from './corrida-component';

describe('CorridaComponent', () => {
  let component: CorridaComponent;
  let fixture: ComponentFixture<CorridaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorridaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CorridaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
