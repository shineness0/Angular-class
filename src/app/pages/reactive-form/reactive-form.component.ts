import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  constructor(private formBuilder:FormBuilder){}

  formOne = this.formBuilder.group({
    firstName:['', Validators.required],
    email:['',[Validators.email, Validators.required]],
    password:['',[Validators.minLength(5), Validators.required]],
  })



  onSubmit() {
    const {firstName, email, password}=this.formOne.value
    console.log(firstName)
  }
}
