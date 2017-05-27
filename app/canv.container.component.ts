import { Component, AfterViewInit, ViewChild } from "@angular/core";

import { CanvasViewComponent } from "./canv.view.component"
import { CanvModel } from "./canv.model";
import { CanvController } from "./canv.controller";

import { Observer } from "./observer";

@Component ({
    selector : 'canv-ctrl',
    templateUrl : './canv.container.component.html'
})
export class CanvasContainerComponent implements AfterViewInit, Observer
{
    model: CanvModel;
    @ViewChild(CanvasViewComponent) private view : CanvasViewComponent;
    contr : CanvController;

    width : number;
    height : number;
    border : number;

    blockSignals : boolean;
    
    constructor()
    {
        this.model = new CanvModel(800,600);
        this.UpdateFromModel();
        this.model.Attach(this);
        this.blockSignals = false;
    }

    ngAfterViewInit() 
    {
        this.model.Attach(this.view);
        this.contr = new CanvController(this.model, this.view);
    }

    onChange()
    {
        //  User change value in the form
        this.UpdateToModel();
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
        // Receiving an update from the model
        if (!this.blockSignals)
        {
            this.UpdateFromModel();
            console.info("Container received update from model");
        }
    }

    ToString() : String 
    {
        return "";
    }

    private UpdateFromModel() : void
    {
        this.width = this.model.getWidth();
        this.height = this.model.getHeight();
        this.border = this.model.getBorder();
    }

    private UpdateToModel() : void
    {
        // Disable signal to update the model
        this.blockSignals = true;
        //this.model.setArea(this.width, this.height);
        //this.model.setBorder(this.border);
        this.model.set(this.width, this.height, this.border);
        this.blockSignals = false;
    }
}