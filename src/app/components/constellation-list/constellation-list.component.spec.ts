import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstellationListComponent } from './constellation-list.component';

describe('ConstellationListComponent', () => {
  let component: ConstellationListComponent;
  let fixture: ComponentFixture<ConstellationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstellationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstellationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
