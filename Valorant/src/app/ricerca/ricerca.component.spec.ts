import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaComponent } from './ricerca.component';

describe('RicercaComponent', () => {
  let component: RicercaComponent;
  let fixture: ComponentFixture<RicercaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicercaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
