import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLocalizationComponent } from './show-localization.component';

describe('ShowLocalizationComponent', () => {
  let component: ShowLocalizationComponent;
  let fixture: ComponentFixture<ShowLocalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLocalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLocalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
