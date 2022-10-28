import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAlumnosComponent } from './eliminar-alumnos.component';

describe('EliminarAlumnosComponent', () => {
  let component: EliminarAlumnosComponent;
  let fixture: ComponentFixture<EliminarAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
