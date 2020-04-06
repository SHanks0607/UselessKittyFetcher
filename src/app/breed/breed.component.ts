import { Component, OnInit } from '@angular/core';
import { KittyApiService } from '../kitty-api.service';
import { Breed } from '../models/breed';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit {
  breeds: Breed[] = [];
  qtyKitty: number;
  validKitty: FormGroup;
  submitted = false;
  kittyError = false;

  headers = ['Breed', 'Country', 'Origin', 'Coat', 'Pattern'];

  constructor(
    private formBuilder: FormBuilder,
    private breedService: KittyApiService,
    private router: Router,
    http: HttpClient) { }

  ngOnInit() {
    this.validKitty = this.formBuilder.group({
      qty: ['', [Validators.required, Validators.min(1), Validators.max(98)]]
    });
  }

  getKittys() {
    if (this.validKitty.invalid) {
      console.log('too many kitties');
      this.kittyError = true;
      this.validKitty.reset();
      return;
    }
    this.kittyError = false;
    this.submitted = true;
    this.breedService.getBreed(this.validKitty.controls.qty.value)
      .subscribe((data: any) => {
        console.log(data);
        this.breeds = data.data;
        this.validKitty.reset();
      });
  }

  kittyGoAway() {
    this.breeds = [];
    this.submitted = false;
    this.kittyError = false;
    }
}

