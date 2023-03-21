import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSectorListsComponent } from './tech-sector-lists.component';

describe('TechSectorListsComponent', () => {
  let component: TechSectorListsComponent;
  let fixture: ComponentFixture<TechSectorListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechSectorListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechSectorListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
