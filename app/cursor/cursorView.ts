import { Observer } from "../observer";
import { Subject } from "../subject";
import { CursorModel } from "./cursorModel"
import { CanvModel } from "../canv.model";
import { ClickRect } from "../clickRect";

export class CursorView extends Subject implements Observer
{
    userInput : String;
    ctx : CanvasRenderingContext2D;
    canvModel : CanvModel;
    public cursorRect : ClickRect = new ClickRect(0, 0, 0, 0);

    constructor(private cursorModel : CursorModel)
    {
        super();
        this.cursorModel = cursorModel;
        this.cursorModel.Attach(this);
    }

    SetContext(ctx : CanvasRenderingContext2D, canvModel : CanvModel)
    {
        this.ctx = ctx;
        this.canvModel = canvModel;
    }

    Update() : void
    {
    }

    ToString() : String 
    {
        return "Cursor View xPos:" + this.cursorModel.getXpos();
    }

    CursorRectUpdate()
    {
        var cursorLeftMargin : number = 10;
        var cursorRightMargin : number = 20;
        var border : number = this.canvModel.getBorder();
        this.cursorRect.top = border;
        this.cursorRect.left = this.cursorModel.getXpos() - cursorLeftMargin;
        this.cursorRect.bottom = this.canvModel.getHeight() - border;
        this.cursorRect.right = this.cursorModel.getXpos() + cursorRightMargin;
    }

    Draw() : void
    {
        if (this.ctx != null)
        {
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = '#0000FF';

            this.ctx.beginPath();
            var border : number = this.canvModel.getBorder();
            this.ctx.moveTo(this.cursorModel.getXpos(), border);
            this.ctx.lineTo(this.cursorModel.getXpos(),this.canvModel.getHeight() - border);
            this.ctx.stroke();
            this.CursorRectUpdate();
        }
    }

    GetUserInput() : String
    {
        return this.userInput;
    }

    SetUserInput(userInput : String) : void
    {
        this.userInput = userInput;
        this.Notify();
    } 
}