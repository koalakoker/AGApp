import { CanvModel } from "../canv.model";
import { ClickRect } from "../clickRect";

export class Cursor
{
    canvModel : CanvModel;
    ctx : CanvasRenderingContext2D;
    public cursorRect : ClickRect = new ClickRect(0, 0, 0, 0);
    public dragCursor : boolean = false;

    constructor(public xPos : number, public strokeStyle : String)
    {

    }

    SetContext(ctx : CanvasRenderingContext2D, canvModel : CanvModel)
    {
        this.ctx = ctx;
        this.canvModel = canvModel;
    }

    CursorRectUpdate()
    {
        var cursorLeftMargin : number = 10;
        var cursorRightMargin : number = 20;
        var border : number = this.canvModel.getBorder();
        this.cursorRect.top = border;
        this.cursorRect.left = this.xPos - cursorLeftMargin;
        this.cursorRect.bottom = this.canvModel.getHeight() - border;
        this.cursorRect.right = this.xPos + cursorRightMargin;
    }

    Draw() : void
    {
        if (this.ctx != null)
        {
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = this.strokeStyle;

            this.ctx.beginPath();
            var border : number = this.canvModel.getBorder();
            this.ctx.moveTo(this.xPos, border);
            this.ctx.lineTo(this.xPos, this.canvModel.getHeight() - border);
            this.ctx.stroke();
            this.CursorRectUpdate();
        }
    }

    ClickOn(x: number, y: number) : boolean
    {
        return this.cursorRect.ClickOn(x, y);
    }
}