import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsefulComponent } from './unseful.component';

describe('UnsefulComponent', () => {
  let component: UnsefulComponent;
  let fixture: ComponentFixture<UnsefulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsefulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsefulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
