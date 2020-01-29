import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLayoutComponent } from './show-layout.component';

describe('ShowLayoutComponent', () => {
  let component: ShowLayoutComponent;
  let fixture: ComponentFixture<ShowLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
