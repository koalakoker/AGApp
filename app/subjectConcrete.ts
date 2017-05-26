import { Subject } from "./subject";

export class SubjectConcrete extends Subject
{
    private data : number;

    GetState() : number 
    {
        return this.data;
    }

    SetState(num : number) : void
    {
        this.data = num;
        this.Notify();
    }

}