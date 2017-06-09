import { Component, Input } from "@angular/core";

import { V2 } from "./v2";
import { Interp } from "./interp";

import { Observer } from "./observer";
import { Subject } from "./subject";
import { CanvModel } from "./canv.model";
import { Cursor } from "./cursor/cursor";
import { Cursors } from "./cursor/cursors";

@Component ({
    selector : 'canv-view',
    templateUrl : './canv.view.component.html'
})
export class CanvasViewComponent extends Subject implements Observer
{
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    width : number;
    height : number;

    dbg : String;
    cursors : Cursors = new Cursors();

    @Input() canv: CanvModel;

    constructor()
    {
        super();
    }

    GetContext()
    {
        if (this.canvas == null)
        {
            this.canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
        }
        if (this.ctx == null)
        {
            this.ctx = this.canvas.getContext("2d");
            this.cursors.c.forEach(element => {
                element.SetContext(this.ctx, this.canv);    
            });
            
        }
    }

    DrawStart() : void
    {
        this.GetContext();
        this.ctx.clearRect(0,0,this.canv.getWidth(),this.canv.getHeight());
    }

    DrawGraph() : void
    {
        var dataNum = this.canv.getDataNum();
        if (dataNum > 1)
        {
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = 'red';
            
            this.ctx.beginPath();
            var iP : V2 = this.canv.getData(0);
            this.ctx.moveTo(iP.x,iP.y);
            for (var i = 1; i < dataNum; i++) {
                iP = this.canv.getData(i);
                this.ctx.lineTo(iP.x,iP.y);
            }
            this.ctx.stroke();
        }
    }

    DrawBorder() : void
    {
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = 'gray';

        this.ctx.beginPath();
        var border : number = this.canv.getBorder();
        this.ctx.rect(border, border, this.canv.getWidth()-border-border, this.canv.getHeight()-border-border);
        this.ctx.stroke();
    }

    DrawCursors() : void
    {
        this.cursors.c.forEach(element => {
            element.Draw();
        });
    }

    Draw() : void
    {
        this.DrawStart();
        this.DrawBorder();
        this.DrawGraph();
        this.DrawCursors();
    }

    Update() : void
    {
        // Update from model
        var redrawafter : boolean = false;

        if (this.width != this.canv.getWidth())
        {
            this.width = this.canv.getWidth();
            redrawafter = true;
        }

        if  (this.height != this.canv.getHeight())
        {
            this.height = this.canv.getHeight();
            redrawafter = true;
        }

        this.Draw();

        if (redrawafter)
        {
            setTimeout(this.redrawAfterResize, 1, this);
        }

        //console.info("Canv View -> Received update from model");
    }

    ToString() : String 
    {
        return "Canvas view";
    }

    userInput : String;

    GetUserInput() : String
    {
        return this.userInput;
    }

    SetUserInput(userInput : String) : void
    {
        this.userInput = userInput;
        this.Notify();
    }

    click()
    {
        this.Draw();
        console.info("Canvas view -> Click");
    }

    mouseDown(event : MouseEvent)
    {
        if (event.button == 0)
        {
            var x : number = event.clientX;
            var y : number = event.clientY;
            var clicked : boolean = false;
            this.cursors.c.forEach(element => {
                if ((element.ClickOn(x,y)) && (!clicked))
                {
                    element.dragCursor = true;
                    clicked = true;
                } 
            });   
        }
        if (event.button == 2)
        {
            this.cursors.NewCursor(event.clientX).SetContext(this.ctx, this.canv);
            this.Draw();
        }
        this.dbg = "Button Down " + event.button.toString(10);
    }

    mouseUp(event : MouseEvent)
    {
        if (event.button == 0)
        {
            this.cursors.c.forEach(element => {
                element.dragCursor = false;
            });
        }
        this.dbg = "Button Up " + event.button.toString(10);
    }

    mouseMove(event : MouseEvent)
    {
        this.cursors.c.forEach(element => {
            if (element.dragCursor)
            {
                element.xPos = event.clientX;
                this.Draw();
            }    
        });
        
        this.dbg = "x:" + event.clientX + " y:" + event.clientY;
    }

    private redrawAfterResize(cw : CanvasViewComponent)
    {
        cw.Draw();
    }

    prepareSize() : void
    {
        setTimeout(this.redrawAfterInit, 100, this);
    }

    private redrawAfterInit(cw : CanvasViewComponent)
    {
        cw.Update();
    }
}