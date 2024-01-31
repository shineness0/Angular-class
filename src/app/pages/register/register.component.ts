import { Component } from '@angular/core';
import { UserProfile } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private router:Router){}

  firstName = ''
  lastName = ''
  email = ''
  phone = ''
  gender = ''
  address = ''
  password = ''

  message = ''

  students: UserProfile[] = []

  onSubmit = () => {
    const student = {
      id: this.students.length + 1,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      gender: this.gender,
      address: this.address,
      password:this.password
    }

    this.students = [...this.students, student]

    localStorage.setItem('students', JSON.stringify(this.students))

    // this.showAlert('Profile created successfully')
    this.router.navigate(['/login'])
  }

}
