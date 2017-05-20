import { Component } from '@angular/core';
import { LineChartDemoComponent } from './line-chart-demo'

@Component({
  selector: 'my-app',
  template: `
  <h1>Google chart with: {{name}}</h1>
  <div id="chart_div"></div>
  `
  ,
})
export class AppComponent  { name = 'Angular'; }
