import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlladdcartproductsListComponent } from './alladdcartproducts-list.component';

describe('AlladdcartproductsListComponent', () => {
  let component: AlladdcartproductsListComponent;
  let fixture: ComponentFixture<AlladdcartproductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlladdcartproductsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlladdcartproductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
