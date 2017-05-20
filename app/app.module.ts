import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { CanvComponent } from "./canv.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CanvComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
