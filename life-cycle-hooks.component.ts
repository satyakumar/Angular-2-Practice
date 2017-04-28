import { Component, Input,OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy,ViewChild} from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  template: `
   <ng-content></ng-content>
   <hr/>
   <p #boundParagraph>{{bindable}}</p>
   <p>{{boundParagraph.textContent}}</p>
  `,
  styles: []
})
export class LifeCycleHooksComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  @Input() bindable = 3000;
  @ViewChild('boundParagraph')
  boundParagraph:HTMLElement;
  constructor() { }

  ngOnInit() {
  this.log("ngOnInit");
  }
	ngOnChanges() {
	this.log("ngOnChanges");
	}
	ngDoCheck() {
	this.log("ngDoCheck");
	}
	ngAfterContentInit() {
	this.log("ngAfterContentInit");
	}
	ngAfterContentChecked() {
	this.log("ngAfterContentChecked");
	}
	ngAfterViewInit() {
	this.log("ngAfterViewInit");
	console.log(this.boundParagraph);
	}
	ngAfterViewChecked() {
	this.log("ngAfterViewChecked");
	}
	ngOnDestroy() {
		this.log("ngOnDestroy");
	}
	private log(hook:string) {
	console.log(hook);
	}
}
