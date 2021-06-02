import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAndSpinnerComponent } from './post-and-spinner.component';

describe('PostAndSpinnerComponent', () => {
  let component: PostAndSpinnerComponent;
  let fixture: ComponentFixture<PostAndSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAndSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAndSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
