import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassActionComponent } from './class-action.component';

describe('ClassActionComponent', () => {
  let component: ClassActionComponent;
  let fixture: ComponentFixture<ClassActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
