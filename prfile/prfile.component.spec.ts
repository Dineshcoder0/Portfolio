import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrfileComponent } from './prfile.component';

describe('PrfileComponent', () => {
  let component: PrfileComponent;
  let fixture: ComponentFixture<PrfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrfileComponent]
    });
    fixture = TestBed.createComponent(PrfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
