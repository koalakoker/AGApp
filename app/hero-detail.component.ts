import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address, Hero, states, heroes } from "./data-model";

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent {

    heroForm: FormGroup;
    states = states;
    @Input() hero: Hero;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.heroForm = this.fb.group({
            name: ['', Validators.required],
            surname: '',

            address: this.fb.group(new Address()),
        
            power: '',
            sidekick: ''
        });
    }

    ngOnChanges() {
        this.heroForm.reset({
            name:    this.hero.name,
            address: this.hero.addresses[0] || new Address()
        });
    }
}
