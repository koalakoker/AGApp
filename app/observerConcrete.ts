import { Observer } from "./observer";
import { SubjectConcrete } from "./subjectConcrete"

export class ObserverConcrete implements Observer
{
    subj: SubjectConcrete;
    state: number;
    name : string;

    constructor(subj : SubjectConcrete, name : string)
    {
        this.state = 0;
        this.name = name;
        this.subj = subj;
        this.subj.Attach(this);
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
