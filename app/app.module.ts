import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent }  from './app.component';
import { CanvasContainerComponent} from "./canv.container.component";
import { CanvasViewComponent} from "./canv.view.component";

@NgModule({
  imports:      [ 
                  BrowserModule,
                  FormsModule
                ],
  declarations: [ AppComponent,  
                  CanvasContainerComponent, 
                  CanvasViewComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
