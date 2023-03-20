import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingsegmentComponent } from './ringsegment.component';

describe('RingsegmentComponent', () => {
  let component: RingsegmentComponent;
  let fixture: ComponentFixture<RingsegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RingsegmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RingsegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
