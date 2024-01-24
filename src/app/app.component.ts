import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

interface Profile{
  firstName: string,
  lastName: string,
  age: number,
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  public firstName = 'Samuel'
  private lastName = 'Sunday'
  public age = 30
  public bool = true
  email:string = 'sunday@gmail.com'
  address:string = 'No 20, Ogbomoso, Oyo, State, United States'
  phone:number= 7046656333
  isLoading:boolean = false
  isNull:undefined
  isError:boolean = true

  // Object
  obj1:Profile = {
    firstName: 'Sunday',
    lastName: 'Emmanuel',
    age: 100,
  }

  // Array
  array1:number[] = [1,2,3,4,5,6]

  array2:(string|number)[] = [1,2,3,4,'yoo']

  array3:(string|number|boolean)[] = [1,2,3,4,'yoo', true]

  arrayObject:Profile[] = [
    {
      firstName: 'Sunday',
      lastName: 'Emmanuel',
      age: 100,
    },
    {
      firstName: 'Toyin',
      lastName: 'Tobiloba',
      age: 16,
    },
  ]


  checkIndex(index: number) {
    console.log(index)
  }

  onToggle() {
    this.isError = !this.isError
  }

  // union, inference, interface

}
