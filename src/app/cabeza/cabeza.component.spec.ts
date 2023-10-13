import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabezaComponent } from './cabeza.component';

describe('CabezaComponent', () => {
  let component: CabezaComponent;
  let fixture: ComponentFixture<CabezaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabezaComponent]
    });
    fixture = TestBed.createComponent(CabezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
