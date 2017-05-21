import { Component } from "@angular/core";
import { CanvComponent } from "./canv.component";

@Component ({
    selector : 'canv-ctrl',
    templateUrl : './canv.ctrl.component.html'
})
export class CanvasControllerComponent
{
    canv: CanvComponent = new CanvComponent;

    click() : void
    {
        this.canv.initData();
    }
}