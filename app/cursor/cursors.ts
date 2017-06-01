import { Cursor } from "./cursor";

export class Cursors
{
    public c : Array<Cursor> = [];
    private n : number = 0;
    
    NewCursor(xPos : number) : Cursor
    {
        var cursor = new Cursor(xPos, this.NewColor());
        this.c.push(cursor);
        return cursor;
    }

    NewColor() : string
    {
        var retVal : string = "";
        var colors : Array<string> = [
        "#0000FF",
        "#FF0000",
        "#000000",
        "#009900"
        ]

        retVal = colors[this.n];
        console.info("Color selected " + this.n.toString(10));
        
        this.n++;
        if (this.n >= colors.length)
        {
            this.n = 0;
        }
        
        return retVal;
    }
}