import { Component } from '@angular/core';
import { BehaviorSubjectService } from '../../services/behavior-subject.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-behaviour-subject-child-two',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './behaviour-subject-child-two.component.html',
  styleUrl: './behaviour-subject-child-two.component.css'
})
export class BehaviourSubjectChildTwoComponent {
  constructor(private behaviourService:BehaviorSubjectService){}

  behaviourObj:any = ''
  behaviourArr:{}[] = []

  showForm = false

  firstName = ''
  lastName = ''
  email = ''
  age = ''

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.behaviourService.behaviour.subscribe((res) => {
      this.behaviourObj = res
      this.firstName = this.behaviourObj.firstName
      this.lastName = this.behaviourObj.lastName
      this.email = this.behaviourObj.email
      this.age = this.behaviourObj.age

      this.behaviourArr = JSON.parse(localStorage['users']) || []
    })
  }

  onToggle() {
    this.showForm = !this.showForm
  }

  onSubmit() {
    const updatedUserObj = {
      firstName: this.firstName,
      lastName:this.lastName,
      email: this.email,
      age: this.age
    }

    this.behaviourArr.splice(this.behaviourObj.idx,1, updatedUserObj)
    
    localStorage.setItem('users', JSON.stringify(this.behaviourArr))
    this.onToggle()
  }

}
