import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorsFormComponent } from './contributors-form.component';

describe('ContributorsFormComponent', () => {
  let component: ContributorsFormComponent;
  let fixture: ComponentFixture<ContributorsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributorsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
