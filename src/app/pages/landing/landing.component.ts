import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserProfile } from '../../models/user';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  constructor(private navigate:Router){}

  firstName = ''
  lastName = ''
  email = ''
  phone = ''
  gender = ''
  address = ''

  showForm = false
  message = ''

  users: UserProfile[] = []

  ngOnInit() {
    if(localStorage['users']) {
      this.users = JSON.parse(localStorage['users'])
    }
  }
  
  onSubmit(): void {
    const user = {
      id: this.users.length + 1,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      gender: this.gender,
      address: this.address
    }

    this.users = [...this.users, user]

    localStorage.setItem('users', JSON.stringify(this.users))

    this.showAlert('Profile created successfully')

    this.onToggle()
  }

  onToggle(): void {
   this.showForm = !this.showForm
  }

  showAlert(msg:string): void {
    this.message = msg

    setTimeout(() => {
      this.message = ''
    }, 5000)
  }

  onNaviagte(): void {
    this.navigate.navigate(['/'])
  }

  onDelete(id:number): void {
   const newUsers =  this.users.filter((user:UserProfile) => user.id !== id)

   localStorage.setItem('users', JSON.stringify(newUsers))

   if(localStorage['users']) {
    this.users = JSON.parse(localStorage['users'])
  }

  }
}
