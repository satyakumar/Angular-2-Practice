import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div><p>Root</p>
             {{resultToRoot}}
            </div>
            <app-pallindrome [inpValFromRoot]="inpVal" (toRoot)="toRootEmit($event)"></app-pallindrome>`,
  styles: [`div { background-color: orange}`]    
  
})
export class AppComponent {
  inpVal:string = "hai";
  resultToRoot:string;      
  toRootEmit(result: string) {
      this.resultToRoot = result;
  }    
}
