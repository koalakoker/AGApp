import { Subject } from "../subject";

export class CursorModel extends Subject
{
    xPos : number;

    constructor()
    {
        super();
        this.xPos = 0;
    }

    getXpos() : number
    {
        return this.xPos;
    }

    setXpos(xPos : number) : void
    {
        this.xPos = xPos;
        this.Notify();
    }
}