import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosProyectosComponent } from './otros-proyectos.component';

describe('OtrosProyectosComponent', () => {
  let component: OtrosProyectosComponent;
  let fixture: ComponentFixture<OtrosProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrosProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
