import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterMetricsComponent } from './character-metrics.component';

describe('CharacterMetricsComponent', () => {
  let component: CharacterMetricsComponent;
  let fixture: ComponentFixture<CharacterMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
