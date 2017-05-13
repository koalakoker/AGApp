import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent }   from './hero-list.component';
import { HeroService }         from './hero.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    ReactiveFormsModule
    ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    HeroListComponent
     ],
  providers: [HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
