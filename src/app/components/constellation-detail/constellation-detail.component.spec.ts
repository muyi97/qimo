import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstellationDetailComponent } from './constellation-detail.component';

describe('ConstellationDetailComponent', () => {
  let component: ConstellationDetailComponent;
  let fixture: ComponentFixture<ConstellationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstellationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstellationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
