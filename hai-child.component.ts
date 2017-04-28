import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hai-child',
  templateUrl: './hai-child.component.html',
  styleUrls: ['./hai-child.component.css'],
 })
export class HaiChildComponent {
  @Input() resultFromChild: number = 0;
  @Output() clicked2 = new EventEmitter<string>();
  stringInterpolation = "String in hai child component";
  numberInterpolation = 3;
  borderClass = "redBorder";
  onTest() {
	return true;
  }
  ngOnInit() {
	console.log("on init");
  }
  onClicked() {
	alert("Hai i am from child component.ts file.");
  }
  onClicked2() {
	this.clicked2.emit("Hai i am from child component.ts file.");
  }

}
