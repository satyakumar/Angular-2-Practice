import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-odd-component',
  template: `<div><h3>Event Odd Component</h3>
    <p>Given input value (From Root): {{at_val}}
    </p>
<p><button type="button" (click)="check();">Check</button></p>
<p>Given number is (From Child):- {{evenOdd}}</p>
</div>`,
  styles: [`div {background-color: aqua; padding:2%;}`]    
})
export class EventOddComponentComponent {
    @Input() at_val:number;
    @Output() findEvenOdd: EventEmitter<string> ;
    evenOdd: string;
    constructor() {
        this.findEvenOdd = new EventEmitter();
    }
    check() { 
        //var evenOdd;
        if(this.at_val % 2 == 0) {
            this.evenOdd = "Even";
        } else {
            this.evenOdd = "Odd";
        }
        this.findEvenOdd.emit(this.evenOdd);
    }
    
 
 
  

}
