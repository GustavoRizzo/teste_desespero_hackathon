import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadFinanciamentoComponent } from './cad-financiamento.component';

describe('CadFinanciamentoComponent', () => {
  let component: CadFinanciamentoComponent;
  let fixture: ComponentFixture<CadFinanciamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadFinanciamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadFinanciamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
