import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `<p>
              child-component works!
            </p>
            {{greetngMessage}}
            <ul>
                <li>{{objectFromParent.id}}</li>
                <li>{{objectFromParent.name}}</li>
                <li>{{objectFromParent.address}}</li>
                <li>{{objectFromParent.dist}}</li>
            </ul>`,
})
export class ChildComponentComponent{
    @Input() greetngMessage: string;
    @Input() objectFromParent: Object;
    //greetngMessage: String = "Hai..I am Child";
 
}

