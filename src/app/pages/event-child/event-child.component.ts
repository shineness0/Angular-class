import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './event-child.component.html',
  styleUrl: './event-child.component.css'
})
export class EventChildComponent {
  @Input() recieveText:any = ''
  @Output() eventEmit = new EventEmitter

  sendResponse = ''

  send() {
    this.eventEmit.emit(this.sendResponse)
    this.sendResponse = ''
  }
}
