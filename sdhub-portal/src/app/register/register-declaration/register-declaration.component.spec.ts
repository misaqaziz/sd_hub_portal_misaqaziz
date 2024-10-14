import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDeclarationComponent } from './register-declaration.component';

describe('RegisterDeclarationComponent', () => {
  let component: RegisterDeclarationComponent;
  let fixture: ComponentFixture<RegisterDeclarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterDeclarationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
