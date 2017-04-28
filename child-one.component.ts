import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child-one',
  template: `
    <p>
      Child Component
    </p>
	<ng-content></ng-content>
	
  `,
  styles: []
})
export class ChildOneComponent {
	
}
