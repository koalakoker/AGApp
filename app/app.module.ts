import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { CanvComponent } from "./canv.component";
import { CanvasControllerComponent} from "./canv.ctrl.component";
import { CanvasViewComponent} from "./canv.view.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, 
                  CanvComponent, 
                  CanvasControllerComponent, 
                  CanvasViewComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
