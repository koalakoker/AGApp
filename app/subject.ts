import { Observer } from './observer';

export class Subject
{
    observers : Observer[] = [];

    Attach(obs : Observer) : void
    {
        this.observers.push(obs);
    }

    Detach(obs : Observer) : void
    {
        var removeIndex : number = this.observers.indexOf(obs, 0);
        console.info("Deatch index " + removeIndex);
        if (removeIndex > -1)
        {
            for (var index = 0; index < this.observers.length - 1; index++) {
                if (index >= removeIndex)
                {
                    this.observers[index] = this.observers[index + 1];
                }
            }
            this.observers.pop();
        }
    }

    Notify() : void
    {
        if (this.observers.length > 0)
        {
            this.observers.forEach(obs => {
                obs.Update();
            });
        }
    }

    Info() : void
    {
        console.info(this.observers.length);
        this.observers.forEach(element => {
            console.info(element.ToString());
        });
    }
}