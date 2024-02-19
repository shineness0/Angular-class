import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourSubjectChildTwoComponent } from './behaviour-subject-child-two.component';

describe('BehaviourSubjectChildTwoComponent', () => {
  let component: BehaviourSubjectChildTwoComponent;
  let fixture: ComponentFixture<BehaviourSubjectChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviourSubjectChildTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviourSubjectChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
