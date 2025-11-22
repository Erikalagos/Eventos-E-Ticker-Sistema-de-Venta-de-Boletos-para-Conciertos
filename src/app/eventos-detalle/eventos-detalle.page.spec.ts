import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventosDetallePage } from './eventos-detalle.page';

describe('EventosDetallePage', () => {
  let component: EventosDetallePage;
  let fixture: ComponentFixture<EventosDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
