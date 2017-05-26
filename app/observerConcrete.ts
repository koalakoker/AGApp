import { Observer } from "./observer";
import { SubjectConcrete } from "./SubjectConcrete"

export class ObserverConcrete implements Observer
{
    subj: SubjectConcrete;
    state: number;
    name : string;

    constructor(subj : SubjectConcrete, name : string)
    {
        this.name = name;
        this.subj = subj;
    }

    Update() : void
    {
        this.state = this.subj.GetState();
    }

    ToString() : String 
    {
        return this.name + " " + this.state.toString(10);
    }
}