import { Observer } from "./observer";
import { CanvasViewComponent } from "./canv.view.component"
import { CanvModel } from "./canv.model";

export class CanvController implements Observer
{
    view: CanvasViewComponent;
    model: CanvModel;
    
    constructor(model : CanvModel, view : CanvasViewComponent)
    {
        this.model = model;
        this.view = view;
        this.view.Attach(this);

        this.OnLoad();
    }

    Update() : void
    {
        var userInput : String = this.view.GetUserInput();
        console.info("Controller received user input:" + userInput);
        // Update model
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