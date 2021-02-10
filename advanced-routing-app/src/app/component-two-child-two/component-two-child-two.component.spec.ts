import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTwoChildTwoComponent } from './component-two-child-two.component';

describe('ComponentTwoChildTwoComponent', () => {
  let component: ComponentTwoChildTwoComponent;
  let fixture: ComponentFixture<ComponentTwoChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTwoChildTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTwoChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
