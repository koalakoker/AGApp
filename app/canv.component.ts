import { Component, AfterViewChecked } from "@angular/core";

@Component ({
    selector: 'canvComp',
    templateUrl: './canv.component.html'
})
export class CanvComponent implements AfterViewChecked
{
    dataX : number[] = [0,50,100,150,200,250,300,350,400];
    dataY : number[] = [300, 250, 200, 250, 250, 100, 150, 50, 20];
    dataNum : number = 9;

    dbg = "Debug text";

    width = 400;
    height = 300;

    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    click() : void
    {
        this.dbg = "Click";
        this.ctx.fillStyle = 'rgb(255,255,255)';
        this.ctx.fillRect(0,0,this.width,this.height);
        for (var i = 0; i < this.dataNum; i++) {
            this.dataY[i] = Math.random() * this.height;
        }
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
        this.ctx.moveTo(this.dataX[0],this.dataY[0]);
        for (var i = 1; i < this.dataNum; i++) {
            this.ctx.lineTo(this.dataX[i],this.dataY[i]);
        }
        this.ctx.stroke();
        
    }

    ngAfterViewChecked() {
        this.show();
    }

}