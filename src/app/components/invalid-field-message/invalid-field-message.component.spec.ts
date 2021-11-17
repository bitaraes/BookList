import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidFieldMessageComponent } from './invalid-field-message.component';

describe('InvalidFieldMessageComponent', () => {
  let component: InvalidFieldMessageComponent;
  let fixture: ComponentFixture<InvalidFieldMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidFieldMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidFieldMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
