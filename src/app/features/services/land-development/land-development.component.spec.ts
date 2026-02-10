import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandDevelopmentComponent } from './land-development.component';

describe('LandDevelopmentComponent', () => {
  let component: LandDevelopmentComponent;
  let fixture: ComponentFixture<LandDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandDevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
