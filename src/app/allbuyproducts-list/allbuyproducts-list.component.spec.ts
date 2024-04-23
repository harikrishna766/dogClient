import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbuyproductsListComponent } from './allbuyproducts-list.component';

describe('AllbuyproductsListComponent', () => {
  let component: AllbuyproductsListComponent;
  let fixture: ComponentFixture<AllbuyproductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllbuyproductsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllbuyproductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
