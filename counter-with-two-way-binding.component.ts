import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'two-way-binding-counter',
  template: `<div class="container">
                <button (click)="inc()">Increment</button>    
                {{count}} {{counter}}
                <button (click)="dec()">Decrement</button>    
            </div>`,
    styles: [`.container { background: orange;margin:1% auto;padding:5%;max-width:1200px;}`]
})
export class TwoWayBindingComponent {
    count: number = 0;
    @Output() counterChange: EventEmitter<number>;
    constructor() {
        this.counterChange = new EventEmitter();
    }
    /*@Input() counter:number;*/
    @Input()
        get counter() {
            return this.count;
        } 
    inc() {
        this.count = this.count+1;
        this.counterChange.emit(this.count);
    }
    dec() {
        this.count = this.count-1;
        this.counterChange.emit(this.count);
    }
 
}
