import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuydogComponent } from './buydog.component';

describe('BuydogComponent', () => {
  let component: BuydogComponent;
  let fixture: ComponentFixture<BuydogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuydogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuydogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
