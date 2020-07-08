import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoComponent } from './grafico.component';

describe('GraficoComponent', () => {
  let component: GraficoComponent;
  let fixture: ComponentFixture<GraficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
