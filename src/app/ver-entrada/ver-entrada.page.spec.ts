import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerEntradaPage } from './ver-entrada.page';

describe('VerEntradaPage', () => {
  let component: VerEntradaPage;
  let fixture: ComponentFixture<VerEntradaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEntradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
