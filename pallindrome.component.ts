import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pallindrome',
  template: `
    <div>
      <p>pallindrome Works!</p>
      <input type="text" [value]="inpValFromRoot" (input)="inpValFromRoot=$event.target.value">
      <button type="button" (click)="check();">Check</button>    
      <p>{{result}}</p>        
    </div>
  `,
  styles: [`div { background-color: green;}`]
})
export class PallindromeComponent {
  @Input() inpValFromRoot:string;
  @Output() toRoot: EventEmitter<string>; 
  result: string;
  constructor() {
    this.toRoot = new EventEmitter();
  }
  check() {
      if(Array.from(this.inpValFromRoot).reverse().join("") === this.inpValFromRoot) {
          this.result = "Yes! It's a Pallindrome string"; 
          this.toRoot.emit(this.result);
      } else {
          this.result = "No! It's not a Pallindrome string";
          this.toRoot.emit(this.result);
      }
  }   
}
