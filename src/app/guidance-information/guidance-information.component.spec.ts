import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceInformationComponent } from './guidance-information.component';

describe('GuidanceInformationComponent', () => {
  let component: GuidanceInformationComponent;
  let fixture: ComponentFixture<GuidanceInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidanceInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidanceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
