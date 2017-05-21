import { Component } from '@angular/core';
import { CanvComponent } from "./canv.component";

@Component({
  selector: 'my-app',
  template: `
  <canv-ctrl>Loading AppComponent content here ...</canv-ctrl>
  `
  ,
})
export class AppComponent  { name = 'Angular'; }
