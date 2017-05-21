import { Component } from "@angular/core";
import { CanvComponent } from "./canv.component";

@Component ({
    selector : 'canv-ctrl',
    templateUrl : './canv.ctrl.component.html'
})
export class CanvasControllerComponent
{
    canv: CanvComponent = new CanvComponent(800,600);

    border : number = this.canv.getBorder();
    height : number = this.canv.getHeight();
    width : number = this.canv.getWidth();

    click() : void
    {
        this.canv.initData();
    }

    onSubmit() : void
    {
        this.canv.setBorder(this.border);
        this.canv.setArea(this.width, this.height);
    }
}