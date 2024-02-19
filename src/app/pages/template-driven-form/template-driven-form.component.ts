import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {

    firstName= ''
    city= ''
    isChecked= false
  

  onSubmit() {
    console.log(this.isChecked)
  }

  onChecked() {
    this.isChecked = !this.isChecked
  }

}
