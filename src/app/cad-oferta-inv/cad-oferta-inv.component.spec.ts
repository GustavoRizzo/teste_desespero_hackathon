import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadOfertaInvComponent } from './cad-oferta-inv.component';

describe('CadOfertaInvComponent', () => {
  let component: CadOfertaInvComponent;
  let fixture: ComponentFixture<CadOfertaInvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadOfertaInvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadOfertaInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
