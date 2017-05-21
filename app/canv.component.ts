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
    private width : number;
    private height : number;
    private border: number;

    private xAxis : Axis;
    private yAxis : Axis;

    private iAxis : Axis;
    private jAxis : Axis;

    private interp : Interp;

    private dataX : number[] = [];
    private dataY : number[] = [];
    private dataNum : number;

    dbg = "Debug text";

    setArea(width : number, height : number)
    {
        this.width = width;
        this.height = height;
        this.updateAxis();
    }

    getWidth() : number {return this.width;}
    getHeight() : number {return this.height;}

    setBorder(border : number)
    {
        this.border = border;
        this.updateAxis();
    }

    getBorder() : number {return this.border;}

    setXAxis(min : number, max : number )
    {
        this.xAxis = new Axis(min, max);
        this.updateInterp();
    }

    setYAxis(min : number, max : number )
    {
        this.yAxis = new Axis(min, max);
        this.updateInterp();
    }

    getXAxis() : Axis {return this.xAxis;}
    getYAxis() : Axis {return this.yAxis;}

    updateInterp() : void
    {
        this.interp = new Interp(this.xAxis, this.yAxis, this.iAxis, this.jAxis);
    }

    updateAxis() : void
    {
        this.iAxis = new Axis(this.border, this.width-this.border);
        this.jAxis = new Axis(this.border, this.height-this.border);
        this.updateInterp();
    }

    constructor(width : number, height : number) 
    {
        this.setArea(width, height);
        this.setBorder(20);
        this.setXAxis(-0.2, 0.2);
        this.setYAxis(-0.2, 0.2);

        this.initData();
    }

    initData() : void 
    {
        this.dataX = [];
        this.dataY = [];
        var n = Math.floor(Math.random() * 100);
        var delta = this.xAxis.max - this.xAxis.min;
        var xStep = delta/(n-1);
        var x = this.xAxis.min;
        for (var i = 0; i < n; i++) 
        {
            this.dataX.push(x);
            x += xStep;
            this.dataY.push((Math.random() * delta) - 0.2);
        }
        this.dataNum = n;
    }

    getDataNum() : number {return this.dataNum;}

    getData(index : number) : V2 
    {
        var p : V2 = new V2(this.dataX[index], this.dataY[index]); 
        var iP : V2 = this.interp.interp(p);
        return iP;
    }
}