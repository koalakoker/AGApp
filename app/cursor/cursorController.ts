import { Observer } from "../observer";
import { CursorView } from "./cursorView"
import { CursorModel } from "./cursorModel";

export class CursorController implements Observer
{
    view: CursorView;
    model: CursorModel;
    
    constructor(model : CursorModel, view : CursorView)
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
        this.model.setXpos(0);
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