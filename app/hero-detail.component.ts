import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Address, Hero, states } from "./data-model";
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent {

    heroForm: FormGroup;
    states = states;
    @Input() hero: Hero;

    constructor(private fb: FormBuilder, private heroService: HeroService) {
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
    
    onSubmit() {
        this.hero = this.prepareSaveHero();
        this.heroService.updateHero(this.hero).subscribe(/* error handling */);
        this.ngOnChanges();
   }

    prepareSaveHero(): Hero {
        const formModel = this.heroForm.value;

        // deep copy of form model lairs
        const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
            (address: Address) => Object.assign({}, address)
        );

        // return new `Hero` object containing a combination of original hero value(s)
        // and deep copies of changed form model values
        const saveHero: Hero = {
            id: this.hero.id,
            name: formModel.name as string,
            // addresses: formModel.secretLairs // <-- bad!
            addresses: secretLairsDeepCopy
        };
        return saveHero;
    }

    revert() { this.ngOnChanges(); }

}
