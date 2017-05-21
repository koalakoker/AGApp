import { Component, Input, AfterViewChecked } from "@angular/core";

import { V2 } from "./v2";
import { Interp } from "./interp";
import { CanvComponent } from "./canv.component";

@Component ({
    selector : 'canv-view',
    templateUrl : './canv.view.component.html'
})
export class CanvasViewComponent
{
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    @Input() canv: CanvComponent;

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
        this.ctx.clearRect(0,0,this.canv.width,this.canv.height);
        this.ctx.beginPath();

        var p : V2 = new V2(this.canv.dataX[0], this.canv.dataY[0]); 
        var iP : V2 = this.canv.interp.interp(p);
        
        this.ctx.moveTo(iP.x,iP.y);
        for (var i = 1; i < this.canv.dataNum; i++) {
            p = new V2(this.canv.dataX[i], this.canv.dataY[i]);
            iP = this.canv.interp.interp(p);
            this.ctx.lineTo(iP.x,iP.y);
        }
        this.ctx.stroke();
        
    }

    ngAfterViewChecked() {
        this.show();
    }

}