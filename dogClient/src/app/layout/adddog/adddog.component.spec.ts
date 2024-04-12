import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddogComponent } from './adddog.component';

describe('AdddogComponent', () => {
  let component: AdddogComponent;
  let fixture: ComponentFixture<AdddogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
