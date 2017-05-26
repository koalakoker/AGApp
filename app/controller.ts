import { Observer } from "./observer";
import { View } from "./View"
import { Model } from "./model";

export class Controller implements Observer
{
    view: View;
    model: Model;
    
    constructor(model : Model, view : View)
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
        this.model.setSurname(userInput);
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