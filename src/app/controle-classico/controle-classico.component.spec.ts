import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleClassicoComponent } from './controle-classico.component';
import { AppModule } from '../app.module';

describe('ControleClassicoComponent', () => {
  let component: ControleClassicoComponent;
  let fixture: ComponentFixture<ControleClassicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleClassicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
