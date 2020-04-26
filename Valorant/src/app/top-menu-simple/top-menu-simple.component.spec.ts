import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuSimpleComponent } from './top-menu-simple.component';

describe('TopMenuSimpleComponent', () => {
  let component: TopMenuSimpleComponent;
  let fixture: ComponentFixture<TopMenuSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMenuSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
