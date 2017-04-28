import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
	<hr/>
	<h1>Property Binding<h1>
    <p>
     {{result}}
    </p>
	<hr/>
  `,
})
export class PropertyBindingComponent {
	@Input() result:number = 0;
	
}
