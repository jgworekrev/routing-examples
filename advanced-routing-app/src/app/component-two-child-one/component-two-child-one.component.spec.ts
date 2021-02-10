import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTwoChildOneComponent } from './component-two-child-one.component';

describe('ComponentTwoChildOneComponent', () => {
  let component: ComponentTwoChildOneComponent;
  let fixture: ComponentFixture<ComponentTwoChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTwoChildOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTwoChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
