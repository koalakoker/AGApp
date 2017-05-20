import { Component } from '@angular/core';
import { CanvComponent } from "./canv.component";

@Component({
  selector: 'my-app',
  template: `
  <canvComp>Loading AppComponent content here ...</canvComp>
  `
  ,
})
export class AppComponent  { name = 'Angular'; }
