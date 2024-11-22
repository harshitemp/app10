import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
    @Output() messageEvent = new EventEmitter<string>();
  
    sendMessage() {
      const message = 'Hello from Child!';
      this.messageEvent.emit(message); // Emit the event with the message
    }
  }
  

