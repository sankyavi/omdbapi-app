import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieExploreComponent } from './movie-explore.component';

describe('MovieExploreComponent', () => {
  let component: MovieExploreComponent;
  let fixture: ComponentFixture<MovieExploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieExploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
