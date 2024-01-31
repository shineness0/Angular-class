import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserProfile } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private activated:ActivatedRoute, private navigate:Router, private profileService:ProfileService){}

  firstName = ''
  lastName = ''
  email = ''
  phone = ''
  gender = ''
  address = ''

  users:UserProfile[]= []
  userId:number = 0

  user:UserProfile = 
    {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      gender: '',
      address: ''
    }
  
  

  ngOnInit() {
    console.log(this.profileService.getUsers(this.userId))
    this.getUser()
  }

  getUser(): void {
    this.userId = this.activated.snapshot.params['id']
    
    this.users = JSON.parse(localStorage['users']);

    let user = this.users.find((user:UserProfile) => user.id == this.userId)


    this.user = user || this.user

    if(user){
      this.firstName = user.firstName
      this.lastName = user.lastName
      this.email = user.email
      this.phone = user.phone
      this.address = user.address
      this.gender = user.gender
    }
  }

  onDelete(): void {
    if(window.confirm('Are you sure you want to delete this')){
      const newUsers =  this.users.filter((user:UserProfile) => user.id != this.userId)
  
      localStorage.setItem('users', JSON.stringify(newUsers))
   
      this.navigate.navigate(['/'])
    }
  }

  onEdit (): void {

    const userIdx = Number(this.users.findIndex(user => user.id == this.userId))

    const user = {
      id: this.user.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      gender: this.gender,
      address: this.address
    }

    this.users.splice(userIdx, 1, user);

    localStorage.setItem('users', JSON.stringify(this.users))

    this.getUser()

  }

}
