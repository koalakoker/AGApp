import { Observer} from './observer';

export abstract class Subject
{
    private observers : Observer[] = [];

    Attach(obs : Observer) : void
    {
        this.observers.push(obs);
    }

    Detach(obs : Observer) : void
    {
        var index : number = this.observers.indexOf(obs, 0);
        if (index > -1)
        {
            this.observers.slice(index,1);
        }
    }
}