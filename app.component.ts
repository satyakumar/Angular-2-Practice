import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div><h3>Root Component</h3><p>Please enter a number to know it is even or odd</p>
            <input [value]="attrVal" (input)="attrVal=$event.target.value" >
            <p>Given Number is (Root Component):- {{attrVal}}</p>
            <p> Result: Given number is(Root Component) :-  {{result}}</p>
            </div>
            <app-event-odd-component [at_val]="attrVal" (findEvenOdd)="finalResult($event);"></app-event-odd-component>
            `,
    styles: [`div { background-color: orange; padding:2%;}`]
})
export class AppComponent {
  title = 'app works!';
  attrVal: number = 0;    
  finalResult(result: string) {
    this.result = result;
  }
}

/*<div>   NG Model block
            <p><input [(ngModel)]="attrVal" [value]="attrVal"></p>
            <p>Given Number is:- {{attrVal}}</p>
            </div>*/