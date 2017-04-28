import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div id="parent-component">
	<h1>
	  {{title}}
	</h1>
	<p>{{stringInterpolationFromSameComponent}}</p>
	<p>{{numberInterpolationFromSameComponent}}</p>
	<p>
		<button (click)="clickbtn();">Button from same component</button>
	</p>
	</div>
	<div id="child-one-component">
		<app-child-one *ngIf="!delete">
		<p>{{numberFromChid}}</p>
		<p>{{string123}}</p>
		<p>{{numberInterpolationFromChild1Component}}</p>
		<p><input type="text" [value]="stringInterpolationFromSameComponent"></p>
		<p><input type="number" [value]="numberInterpolationFromSameComponent"></p>
		<p><button (click)="clickbtn2();">Button from child</button></p>
		<p><button (click)="stringInterpolationFromSameComponent = 'updated value';">Click to Change text value </button></p>
		<p><button (click)="numberInterpolationFromSameComponent = 444;">Click to Change number value </button></p>
		<p><button (click)="delete = true">Click to Delete this component </button></p>
		<p [ngClass]="{bg:true}">hai this is example for ngClass</p>
		<div [ngClass]="{bg:classFun()}">
			Change color
		</div>
		<p><input type="text" [(ngModel)]="person.name"></p>
		<p><input type="text" [(ngModel)]="person.name"></p>
		</app-child-one>
	</div>
	
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Same component';
  stringInterpolationFromSameComponent = "Hai this is stringInterpolation from same component";
  numberInterpolationFromSameComponent = 5;
  clickbtn() {
	alert("Button from same component");
  }
  clickbtn2() {
	alert("Button from child component");
  }
  delete = false
  bg = true;
  classFun() {
	return true;
  }
  person = {
	name: "Satya",
	age:29,
  }
}
