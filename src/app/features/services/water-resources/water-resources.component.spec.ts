import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterResourcesComponent } from './water-resources.component';

describe('WaterResourcesComponent', () => {
  let component: WaterResourcesComponent;
  let fixture: ComponentFixture<WaterResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterResourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaterResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
