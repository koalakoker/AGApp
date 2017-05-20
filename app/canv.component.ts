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
        ctx.moveTo(0,0);
        ctx.lineTo(200,100);
        ctx.stroke();
        ctx.fillStyle = 'red';
        ctx.fillRect(10, 10, 20, 40);
    }

    ngAfterViewChecked() {
        this.show();
    }

}