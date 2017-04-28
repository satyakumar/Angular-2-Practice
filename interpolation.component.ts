import { Component } from '@angular/core';

@Component({
  selector: 'interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  stringAdd = "This is the string interpolation"; 			
  numAdd = 54;
  constructor() { }
}
