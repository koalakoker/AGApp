import { Axis } from "./axis";
import { V2 } from "./v2";

export class Interp
{
    xAxis : Axis;
    yAxis : Axis;
    iAxis : Axis;
    jAxis : Axis;

    constructor (xAxis : Axis, yAxis : Axis, iAxis : Axis, jAxis : Axis)
    {
        this.xAxis = xAxis;
        this.yAxis = yAxis;
        this.iAxis = iAxis;
        this.jAxis = jAxis;
    }

    private static interp_val(x : number, xAxis : Axis, iAxis : Axis) : number
    {
        var beta = (iAxis.max - iAxis.min) / 
                   (xAxis.max - xAxis.min);
        var k = iAxis.min - (beta * xAxis.min);
        return (beta * x) + k;
    }

    interp(p : V2) : V2
    {
        return new V2(
            Interp.interp_val(p.x, this.xAxis, this.iAxis),
            Interp.interp_val(p.y, this.yAxis, this.jAxis)
            );
    }
}