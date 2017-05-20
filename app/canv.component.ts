import { Component, AfterViewChecked } from "@angular/core";

@Component ({
    selector: 'canvComp',
    templateUrl: './canv.component.html'
})
export class CanvComponent implements AfterViewChecked
{
    dbg = "Debug text";

    width = 400;
    height = 300;

    click() : void
    {
        this.dbg = "Click";
        this.show();
    }

    show() : void
    {
        var canvas: HTMLCanvasElement;
        var ctx: CanvasRenderingContext2D;

        canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
        ctx = canvas.getContext("2d");
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'red';
        ctx.moveTo(0,0);
        ctx.lineTo(200,100);
        ctx.lineTo(400,0);
        ctx.moveTo(0,300);
        ctx.lineTo(200,200);
        ctx.lineTo(400,300);
        ctx.moveTo(200,200);
        ctx.lineTo(200,100);
        ctx.stroke();
        
    }

    ngAfterViewChecked() {
        this.show();
    }

}