import { Component } from '@angular/core';
import { BehaviourSubjectChildOneComponent } from '../behaviour-subject-child-one/behaviour-subject-child-one.component';
import { BehaviourSubjectChildTwoComponent } from '../behaviour-subject-child-two/behaviour-subject-child-two.component';
import { BehaviorSubjectService } from '../../services/behavior-subject.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-behaviour-subject-parent',
  standalone: true,
  imports: [BehaviourSubjectChildOneComponent, BehaviourSubjectChildTwoComponent, FormsModule],
  templateUrl: './behaviour-subject-parent.component.html',
  styleUrl: './behaviour-subject-parent.component.css'
})
export class BehaviourSubjectParentComponent {
  constructor(private behaviourService:BehaviorSubjectService){}

  showForm = false

  firstName = ''
  lastName = ''
  email = ''
  age = ''

  contactArr: {}[] = []

  ngOnInit() {
    if(localStorage['users']) {
      this.contactArr = JSON.parse(localStorage['users'])
    }
  }

  onToggle() {
    this.showForm = !this.showForm
  }

  onSubmit() {
    const user = {
      firstName: this.firstName,
      lastName:this.lastName,
      email: this.email,
      age: this.age
    }

    this.contactArr = [...this.contactArr, user]

    localStorage.setItem('users', JSON.stringify(this.contactArr))
  }
}
