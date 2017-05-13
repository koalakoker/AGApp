import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    ReactiveFormsModule ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
