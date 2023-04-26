import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersopeningComponent } from './othersopening.component';

describe('OthersopeningComponent', () => {
  let component: OthersopeningComponent;
  let fixture: ComponentFixture<OthersopeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersopeningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthersopeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
