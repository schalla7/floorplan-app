import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseFloorplanComponent } from './house-floorplan.component';

describe('HouseFloorplanComponent', () => {
  let component: HouseFloorplanComponent;
  let fixture: ComponentFixture<HouseFloorplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseFloorplanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HouseFloorplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
