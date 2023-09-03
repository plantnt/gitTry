import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FantasmagoricoComponent } from './fantasmagorico.component';

describe('FantasmagoricoComponent', () => {
  let component: FantasmagoricoComponent;
  let fixture: ComponentFixture<FantasmagoricoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FantasmagoricoComponent]
    });
    fixture = TestBed.createComponent(FantasmagoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
