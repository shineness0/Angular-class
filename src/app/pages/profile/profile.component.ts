import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private activated:ActivatedRoute, navigate:Router){}

  userId:string = '';

  ngOnInit() {
    this.userId = this.activated.snapshot.params['id']
  }

}
