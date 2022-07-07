import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LootdetailsComponent } from './lootdetails.component';

describe('LootdetailsComponent', () => {
  let component: LootdetailsComponent;
  let fixture: ComponentFixture<LootdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LootdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LootdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
