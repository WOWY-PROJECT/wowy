import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostArticlesComponent } from './lost-articles.component';

describe('LostArticlesComponent', () => {
  let component: LostArticlesComponent;
  let fixture: ComponentFixture<LostArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
