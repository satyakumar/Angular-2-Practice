import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-binding-emitter',
  template: `
    <button (click)="onClicked3();">Click me 3!</button>
  `,
})
export class EventBindingEmitterComponent {
  @Output() clicked3 = new 	EventEmitter<string>();
  onClicked3() {
	this.clicked3.emit("clicked3");
  }

}
