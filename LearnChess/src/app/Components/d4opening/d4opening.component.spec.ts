import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D4openingComponent } from './d4opening.component';

describe('D4openingComponent', () => {
  let component: D4openingComponent;
  let fixture: ComponentFixture<D4openingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [D4openingComponent]
    });
    fixture = TestBed.createComponent(D4openingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
