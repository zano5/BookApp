import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetWEmailComponent } from './reset-wemail.component';

describe('ResetWEmailComponent', () => {
  let component: ResetWEmailComponent;
  let fixture: ComponentFixture<ResetWEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetWEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetWEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
