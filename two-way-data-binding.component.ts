import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent {
	person = {
		name: "SatyaSri",
		age:29,
	}


}
