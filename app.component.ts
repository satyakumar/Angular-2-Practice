import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<input [value]="name" (input)="name=$event.target.value"><br/>
             {{name}} 
            <app-counter-example></app-counter-example>
            <two-way-binding-counter [(counter)]="c"></two-way-binding-counter><br/>
            <h2>count = {{c}}</h2>`,
})
export class AppComponent {
    title = 'app works!';
    name:String = "";
    c:number = 1;
}
/*source:- http://www.infragistics.com/community/blogs/dhananjay_kumar/archive/2016/12/12/simplifying-two-way-data-binding-in-angular-2.aspx */