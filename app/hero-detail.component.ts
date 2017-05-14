import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Address, Hero, states } from "./data-model";

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
        this.trackNameChange();
    }

    createForm() {
        this.heroForm = this.fb.group({
            name: ['', Validators.required],
            surname: '',

            secretLairs: this.fb.array([]),

            power: '',
            sidekick: ''
        });
    }

    ngOnChanges() {
        this.heroForm.reset({
            name:    this.hero.name,
            //address: this.hero.addresses[0] || new Address()
        });

        this.setAddresses(this.hero.addresses);
    }

    setAddresses(addresses: Address[]) {
        const addressFGs = addresses.map(address => this.fb.group(address));
        const addressFormArray = this.fb.array(addressFGs);
        this.heroForm.setControl('secretLairs', addressFormArray);
    }

    get secretLairs(): FormArray {
        return this.heroForm.get('secretLairs') as FormArray;
    }

    get surname(): FormControl {
        return this.heroForm.get('surname') as FormControl;
    }

    addLair() {
        this.secretLairs.push(this.fb.group(new Address()));
    }

    removeLair(index: number) {
        this.secretLairs.removeAt(index);
    }

    onNameUpdate(newName: string) {
        // this.heroForm.setValue({
        //     name: newName
        // })
    }

    trackNameChange() {
        const nameControl = this.heroForm.get('name');
        nameControl.valueChanges.forEach(
            (value: string) => this.onNameUpdate(value)
        );
    }

}
