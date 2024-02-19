import { Component } from '@angular/core';
import { BehaviorSubjectService } from '../../services/behavior-subject.service';

@Component({
  selector: 'app-behaviour-subject-child-one',
  standalone: true,
  imports: [],
  templateUrl: './behaviour-subject-child-one.component.html',
  styleUrl: './behaviour-subject-child-one.component.css'
})
export class BehaviourSubjectChildOneComponent {
  constructor(private behaviourService:BehaviorSubjectService){}


  behaviourArray:any[] = []

  ngOnInit() {
    this.behaviourArray = JSON.parse(localStorage['users']) || []
  }

  sendList(list:any, idx:number) {
    this.behaviourService.behaviour.next({...list, idx})
  }
}
