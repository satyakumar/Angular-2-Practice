import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
    template: `<p><app-child-component [messageFromParent]="message" [Name]="name"></app-child-component></p>
<p><app-child-component messageFromParent="{{message}}" [Name]="name"></app-child-component></p>`,
})
export class AppComponent {
   title = 'app works!';
   message:String = "This is a message from parent component..IE..APP"; 
   name:String = "";    //name:String = "Name";    
}
