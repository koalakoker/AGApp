import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { Axis } from "./axis";
import { V2 } from "./v2";
import { Interp } from "./interp";

@Component ({
    selector: 'canvComp',
    templateUrl: './canv.component.html'
})
export class CanvComponent implements OnInit, AfterViewChecked
{
    width = 400;
    height = 300;
    border = 10;

    xAxis : Axis = new Axis(-0.2, 0.2);
    yAxis : Axis = new Axis(-0.2, 0.2);

    iAxis : Axis = new Axis(this.border, this.width-this.border);
    jAxis : Axis = new Axis(this.border, this.height-this.border);

    interpX : Interp = new Interp(this.xAxis, this.yAxis,
                                  this.iAxis, this.jAxis);

    dbg = "Debug text";

    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    click() : void
    {
        this.dbg = "Click";
        this.initData2();
    }

    show() : void
    {
        if (this.canvas == null)
        {
            this.canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
        }
        if (this.ctx == null)
        {
            this.ctx = this.canvas.getContext("2d");
        }
        
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = 'red';
        this.ctx.clearRect(0,0,this.width,this.height);
        this.ctx.beginPath();

        var p : V2 = new V2(this.dataX[0], this.dataY[0]); 
        var iP : V2 = this.interpX.interp(p);
        
        this.ctx.moveTo(iP.x,iP.y);
        for (var i = 1; i < this.dataNum; i++) {
            p = new V2(this.dataX[i], this.dataY[i]);
            iP = this.interpX.interp(p);
            this.ctx.lineTo(iP.x,iP.y);
        }
        this.ctx.stroke();
        
    }

    ngOnInit() 
    {
        this.initData2();
    }

    ngAfterViewChecked() {
        this.show();
    }

    dataX : number[] = [];
    dataY : number[] = [];
    dataNum : number;

    initData() : void 
    {
        this.dataX = [0,50,100,150,200,250,300,350,400];
        this.dataY = [300, 250, 200, 250, 250, 100, 150, 50, 20];
        this.dataNum = 9;
    }

    initData2() : void 
    {
        this.dataX = [];
        this.dataY = [];
        var n = 10;
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