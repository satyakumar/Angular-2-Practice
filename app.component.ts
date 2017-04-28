import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}} {{message}}</h1>
            <app-child-component [greetngMessage]="childMessage" [objectFromParent]="childObject">
            </app-child-component>`,
})
export class AppComponent {
    title = 'app works!';
    message:string = "Hai..I am parent";
    childMessage:string = "Hai...This is child message, Passed from parent";
    childObject:Object = {
        id: 1,
        name: "Kotipalli",
        address: "TPP",
        dist: "AP",
    }
}
