import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumistroComponent } from './sumistro.component';

describe('SumistroComponent', () => {
  let component: SumistroComponent;
  let fixture: ComponentFixture<SumistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SumistroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SumistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
