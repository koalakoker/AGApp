import { Observer } from "./observer";
import { Subject } from "./subject";
import { Model } from "./model"

export class View extends Subject implements Observer
{
    name : String;
    surname : String;
    model : Model;

    userInput : String;

    constructor(model : Model)
    {
        super();
        this.model = model;
        this.name = this.model.getName();
        this.surname = this.model.getSurname();
        this.model.Attach(this);
    }

    Update() : void
    {
        this.name = this.model.getName();
        this.surname = this.model.getSurname();
        this.Draw();
    }

    ToString() : String 
    {
        return this.name + " " + this.surname;
    }

    Draw() : void
    {
        console.info(this.ToString());
    }

    GetUserInput() : String
    {
        return this.userInput;
    }

    SetUserInput(userInput : String) : void
    {
        this.userInput = userInput;
        this.Notify();
    } 
}