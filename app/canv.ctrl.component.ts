import { Component } from "@angular/core";
import { CanvComponent } from "./canv.component";
import { View } from "./View"
import { Model } from "./model";
import { Controller } from "./controller"

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

    model : Model;
    view : View;
    controller : Controller;

    constructor()
    {
        this.model = new Model();

        this.model.setName("Gino");
        this.model.setSurname("Strada");

        this.view = new View(this.model);
        this.controller = new Controller(this.model, this.view);

        // Model update by itself
        this.model.setName("Carmelo");
        
        // View update from user
        this.view.SetUserInput("Latilla");

    }

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