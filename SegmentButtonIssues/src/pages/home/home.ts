import { Component, ChangeDetectorRef } from '@angular/core';
import { NavParams, ViewController, Platform } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    public editFormGroup: FormGroup;
    public drinkTypes;

    public drink = {
        drinkType: {
            id: 2,
            name: 'tea'
        }
    };


    constructor(private params: NavParams, public viewCtrl: ViewController, private formBuilder: FormBuilder,
                 private changeDetection: ChangeDetectorRef) {


  }
  
    ngOnInit() {
        this.editFormGroup = this.formBuilder.group({
            "drinkTypeName": new FormControl({ value: this.drink.drinkType.id }, Validators.required),
        });
        this.getDrinkTypesFromDataBase();
    }


    getDrinkTypesFromDataBase() {
       // this.drinkTypes = [{ id: 1, name: 'coffee' }, { id: 2, name: 'tea' }, { id: 3, name: 'milk' }]; //HERE, IT WORKS

        setTimeout(() => {
            this.drinkTypes = [{ id: 1, name: 'coffee' }, { id: 2, name: 'tea' }, { id: 3, name: 'milk' }]; //HERE iT DIES
        }, 100)
        
    }

    iclicked(evt) {
        var i = evt;
    }

}