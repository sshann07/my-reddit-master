import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRedditComponent } from './my-reddit.component';

describe('MyRedditComponent', () => {
  let component: MyRedditComponent;
  let fixture: ComponentFixture<MyRedditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRedditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
