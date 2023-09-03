import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormitoComponent } from './formito.component';

describe('FormitoComponent', () => {
  let component: FormitoComponent;
  let fixture: ComponentFixture<FormitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormitoComponent]
    });
    fixture = TestBed.createComponent(FormitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
