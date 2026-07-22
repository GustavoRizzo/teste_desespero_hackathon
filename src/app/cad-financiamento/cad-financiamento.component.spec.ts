import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadFinanciamentoComponent } from './cad-financiamento.component';
import { AppModule } from '../app.module';

describe('CadFinanciamentoComponent', () => {
  let component: CadFinanciamentoComponent;
  let fixture: ComponentFixture<CadFinanciamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadFinanciamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
