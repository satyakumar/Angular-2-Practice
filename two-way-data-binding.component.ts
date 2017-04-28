import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  template: `
    <input type="text" [(ngModel)]="person.name">
	<input type="text" [(ngModel)]="person.name">
  `,
})
export class TwoWayDataBindingComponent{
	person = {
		name:"Satya",
		age:29,
	}
}
