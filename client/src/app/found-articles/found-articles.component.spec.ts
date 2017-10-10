import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundArticlesComponent } from './found-articles.component';

describe('FoundArticlesComponent', () => {
  let component: FoundArticlesComponent;
  let fixture: ComponentFixture<FoundArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
