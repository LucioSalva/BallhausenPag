import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SismonComponent } from './sismon.component';

describe('SismonComponent', () => {
  let component: SismonComponent;
  let fixture: ComponentFixture<SismonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SismonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SismonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
