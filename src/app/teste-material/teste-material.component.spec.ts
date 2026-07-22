import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteMaterialComponent } from './teste-material.component';
import { AppModule } from '../app.module';

describe('TesteMaterialComponent', () => {
  let component: TesteMaterialComponent;
  let fixture: ComponentFixture<TesteMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
