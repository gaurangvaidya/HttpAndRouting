import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomechildtwoComponent } from './homechildtwo.component';

describe('HomechildtwoComponent', () => {
  let component: HomechildtwoComponent;
  let fixture: ComponentFixture<HomechildtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomechildtwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomechildtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
