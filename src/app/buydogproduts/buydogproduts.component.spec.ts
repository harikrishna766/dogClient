import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuydogprodutsComponent } from './buydogproduts.component';

describe('BuydogprodutsComponent', () => {
  let component: BuydogprodutsComponent;
  let fixture: ComponentFixture<BuydogprodutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuydogprodutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuydogprodutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
