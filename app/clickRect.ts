export class ClickRect
{
    constructor(public top : number, public left : number, public bottom : number, public right : number)
    {

    }

    ClickOn(x: number, y: number) : boolean
    {
        return ((x > this.left) && (x < this.right) && (y > this.top) && (y < this.bottom));
    }

    ToString()
    {
        return "ClickRect [top:" + this.top + " left:" + this.left + " bottom:" + this.bottom + " right" + this.right + "]";
    }
}