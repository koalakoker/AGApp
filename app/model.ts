import { Subject } from "./subject";

export class Model extends Subject
{
    protected name : String;
    protected surname : String;

    constructor()
    {
        super();
        this.name = "";
        this.surname = "";
    }

    getName() : String
    {
        return this.name;
    }

    setName(name : String) : void
    {
        this.name = name;
        this.Notify();
    }

    getSurname() : String
    {
        return this.surname;
    }

    setSurname(surname : String) : void
    {
        this.surname = surname;
        this.Notify();
    }
}