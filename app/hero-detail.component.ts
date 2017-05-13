import { Component }              from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent {
    heroForm = new FormGroup ({
        name: new FormControl()
    });
}
