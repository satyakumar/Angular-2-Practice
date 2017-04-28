import { Component } from '@angular/core';

@Component({
  selector: 'event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  clikme() {
	alert("Clicked");
  }	
  constructor() { }

  

}
