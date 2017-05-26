import { Component, Input, AfterViewChecked } from "@angular/core";

import { V2 } from "./v2";
import { Interp } from "./interp";

import { Observer } from "./observer";
import { Subject } from "./subject";
import { CanvModel } from "./canv.model";

@Component ({
    selector : 'canv-view',
    templateUrl : './canv.view.component.html'
})
export class CanvasViewComponent extends Subject implements Observer
{
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    @Input() canv: CanvModel;
    
    show() : void
    {
        var dataNum = this.canv.getDataNum();
        if (dataNum > 1)
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
            this.ctx.clearRect(0,0,this.canv.getWidth(),this.canv.getHeight());
            this.ctx.beginPath();

            var iP : V2 = this.canv.getData(0);
            this.ctx.moveTo(iP.x,iP.y);
            for (var i = 1; i < dataNum; i++) {
                iP = this.canv.getData(i);
                this.ctx.lineTo(iP.x,iP.y);
            }
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'gray';
            var border : number = this.canv.getBorder();
            this.ctx.rect(border, border, this.canv.getWidth()-border-border, this.canv.getHeight()-border-border);
            this.ctx.stroke();
        }
    }

    ngAfterViewChecked() {
        this.show();
    }

    Update() : void
    {
        // Update from model
        this.Draw();
    }

    ToString() : String 
    {
        return "Canvas view";
    }

    Draw() : void
    {
        console.info(this.ToString());
    }
}