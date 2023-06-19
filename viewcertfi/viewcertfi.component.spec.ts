import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcertfiComponent } from './viewcertfi.component';

describe('ViewcertfiComponent', () => {
  let component: ViewcertfiComponent;
  let fixture: ComponentFixture<ViewcertfiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcertfiComponent]
    });
    fixture = TestBed.createComponent(ViewcertfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
