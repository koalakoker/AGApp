import { Component } from "@angular/core";
import { CanvComponent } from "./canv.component";
import { ObserverConcrete } from "./observerConcrete"
import { SubjectConcrete } from "./subjectConcrete"

@Component ({
    selector : 'canv-ctrl',
    templateUrl : './canv.ctrl.component.html'
})
export class CanvasControllerComponent
{
    canv: CanvComponent = new CanvComponent(800,600);

    border : number = this.canv.getBorder();
    height : number = this.canv.getHeight();
    width : number = this.canv.getWidth();

    sub : SubjectConcrete;
    obs : ObserverConcrete;
    obs2 : ObserverConcrete;
    obs3 : ObserverConcrete;

    constructor()
    {
        this.sub = new SubjectConcrete;
        this.obs = new ObserverConcrete(this.sub,'a');
        this.obs2 = new ObserverConcrete(this.sub,'b');
        this.obs3 = new ObserverConcrete(this.sub,'c');

        this.sub.Attach(this.obs);
        this.sub.Attach(this.obs2);
        this.sub.SetState(100);
        this.sub.Info();

        this.sub.Attach(this.obs3);
        this.sub.SetState(20);
        this.sub.Info();

        this.sub.Detach(this.obs);
        this.sub.SetState(30);
        this.sub.Info();

    }

    click() : void
    {
        this.canv.initData();
    }

    onSubmit() : void
    {
        this.canv.setBorder(this.border);
        this.canv.setArea(this.width, this.height);
    }
}