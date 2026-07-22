import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadOfertaInvComponent } from './cad-oferta-inv.component';
import { AppModule } from '../app.module';

describe('CadOfertaInvComponent', () => {
  let component: CadOfertaInvComponent;
  let fixture: ComponentFixture<CadOfertaInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadOfertaInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
