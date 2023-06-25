import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactViewComponent } from './user-contact-view.component';

describe('UserContactViewComponent', () => {
  let component: UserContactViewComponent;
  let fixture: ComponentFixture<UserContactViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserContactViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserContactViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
