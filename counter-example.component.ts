import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-example',
  template: `<div class="container">
                <button (click)="inc()">Increment</button>    
                {{count}}
                <button (click)="dec()">Decrement</button>    
            </div>`,
    styles: [`.container { background: pink;margin:1% auto;padding:5%;max-width:1200px;}`]
})
export class CounterExampleComponent {
    count: number = 0;
    inc() {
        this.count = this.count + 1;
    }
    dec() {
        this.count = this.count - 1;
    }

 
}
