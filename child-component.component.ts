import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `<p>{{_messageFromParent}}</p>
            <p>{{_name}}</p>`,
})
export class ChildComponentComponent {
    _messageFromParent:string;
    _name:string;
    @Input() 
        set messageFromParent(message: string) {
            this._messageFromParent = message+ ' Manipulated at child component';
        }
        get messageFromParent() {
            return this._messageFromParent;
        }
    @Input()
        set Name(name: string) {
            this._name = (name && name.trim()) || "This is default message for name variable";
        }
        get Name() {
            return this._name;
        }
  

}
