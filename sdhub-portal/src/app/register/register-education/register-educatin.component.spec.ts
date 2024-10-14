import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEducatinComponent } from './register-educatin.component';

describe('RegisterEducatinComponent', () => {
  let component: RegisterEducatinComponent;
  let fixture: ComponentFixture<RegisterEducatinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterEducatinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEducatinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
