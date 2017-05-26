import { Component } from "@angular/core";

import { Observer } from "./observer";
import { CanvasViewComponent } from "./canv.view.component"
import { CanvModel } from "./canv.model";

@Component ({
    selector : 'canv-ctrl',
    templateUrl : './canv.ctrl.component.html'
})
export class CanvasControllerComponent
{
    model: CanvModel = new CanvModel(800,600);;
    view: CanvasViewComponent;

    border : number;
    height : number;
    width : number;

    constructor()
    {
        this.view = new CanvasViewComponent();
    }

    Bind(model : CanvModel, view : CanvasViewComponent)
    {
        this.model = model;
        this.view = view;
        this.view.Attach(this);

        this.OnLoad();
    }

    click() : void
    {
        this.model.initData();
    }

    onSubmit() : void
    {
        this.model.setBorder(this.border);
        this.model.setArea(this.width, this.height);
    }

    Update() : void
    {
        // Update from View -> Get
        console.info("Controller received update from view:");
        // Act on model
    }

    ToString() : String 
    {
        return "";
    }

    OnLoad() : void
    {
        this.view.Draw();
    }
}