import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HaiComponent } from './hai/hai.component';
import { FstCompComponent } from './fst-comp/fst-comp.component';
import { HaiChildComponent } from './hai-child/hai-child.component';
import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingEmitterComponent } from './event-binding-emitter.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    HaiComponent,
    FstCompComponent,
    HaiChildComponent,
    PropertyBindingComponent,
    EventBindingEmitterComponent,
    TwoWayDataBindingComponent,
    LifeCycleHooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
