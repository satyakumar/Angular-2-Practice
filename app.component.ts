import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
			<h1>Hello App...This is H12</h1>
			<app-hai><div>Div</div></app-hai>
			<app-fst-comp><article>Article</article></app-fst-comp>
			<app-two-way-data-binding></app-two-way-data-binding>
			<app-life-cycle-hooks *ngIf="!delete" [bindable]="boundValue">
				<p>{{test}}</p>
				<p>{{boundValue}}</p>
			</app-life-cycle-hooks>
			<button (click)="delete=true">Click to delete</button>
			<button (click)="test='changed value'">Click to change</button>
			<button (click)="boundValue=2000">Click to chage bindable value</button>
  `,
  styles: [`
	h1 {
		color:red;
	}
  `]
})
export class AppComponent {
  delete = false;
  test = "starting value";
  boundValue = 1000;
}
