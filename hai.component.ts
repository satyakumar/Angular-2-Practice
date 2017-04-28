import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hai',
  templateUrl: './hai.component.html',
  styleUrls: ['./hai.component.css'],
})
export class HaiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClicked2(value: string) {
	alert(value);
  }
  onClicked3(value: string) {
	alert(value);
  }

}
