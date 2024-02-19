import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourSubjectChildOneComponent } from './behaviour-subject-child-one.component';

describe('BehaviourSubjectChildOneComponent', () => {
  let component: BehaviourSubjectChildOneComponent;
  let fixture: ComponentFixture<BehaviourSubjectChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviourSubjectChildOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviourSubjectChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
