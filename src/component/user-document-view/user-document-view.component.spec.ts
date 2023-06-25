import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDocumentViewComponent } from './user-document-view.component';

describe('UserDocumentViewComponent', () => {
  let component: UserDocumentViewComponent;
  let fixture: ComponentFixture<UserDocumentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDocumentViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDocumentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
