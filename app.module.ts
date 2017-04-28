import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CounterExampleComponent } from './counter-example/counter-example.component';
import { TwoWayBindingComponent } from './counter-example/counter-with-two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterExampleComponent,
    TwoWayBindingComponent
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
