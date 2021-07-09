import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarquesListComponent } from './marques-list.component';

describe('MarquesListComponent', () => {
  let component: MarquesListComponent;
  let fixture: ComponentFixture<MarquesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarquesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarquesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
