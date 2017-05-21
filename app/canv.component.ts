import { Component } from "@angular/core";
import { Axis } from "./axis";
import { V2 } from "./v2";
import { Interp } from "./interp";

@Component ({
    selector: 'canvComp',
    templateUrl: './canv.component.html'
})
export class CanvComponent
{
    width = 400;
    height = 300;
    border = 10;

    xAxis : Axis = new Axis(-0.2, 0.2);
    yAxis : Axis = new Axis(-0.2, 0.2);

    iAxis : Axis = new Axis(this.border, this.width-this.border);
    jAxis : Axis = new Axis(this.border, this.height-this.border);

    interp : Interp = new Interp(this.xAxis, this.yAxis,
                                  this.iAxis, this.jAxis);
    dataX : number[] = [];
    dataY : number[] = [];
    dataNum : number;

    dbg = "Debug text";

    constructor() 
    {
        this.initData();
    }

    initData() : void 
    {
        this.dataX = [];
        this.dataY = [];
        var n = Math.random() * 100;
        var delta = 0.4;
        var xStep = delta/(n-1);
        var x = -0.2;
        for (var i = 0; i < n; i++) 
        {
            this.dataX.push(x);
            x += xStep;
            this.dataY.push((Math.random() * delta) - 0.2);
        }
        this.dataNum = n;
    }

}