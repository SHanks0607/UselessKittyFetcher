import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { KittyApiService } from '../kitty-api.service';
import { CatFact } from '../models/facts';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {
  facts: CatFact[] = [];
  catFactGetter: FormGroup;
  submitted = false;
  factError = false;

  constructor(
    http: HttpClient,
    private factService: KittyApiService) { }

  ngOnInit() {
    this.initForm();
  }

  getKittyFacts() {
    if (this.catFactGetter.invalid) {
      console.log('Not the right amount of facts');
      this.factError = true;
      this.reset();
      return;
    }
    this.factService.getFacts(this.catFactGetter.controls.factQty.value)
      .subscribe((data: any) => {
        this.facts = data.data;
        this.submitted = true;
      });
  }

  reset() {
    this.facts = [];
    this.submitted = false;
    this.catFactGetter.reset();
  }
  initForm() {
    const factQty = '';
    this.catFactGetter = new FormGroup({
      factQty: new FormControl(factQty, [Validators.required, Validators.min(0), Validators.max(98)])
    });
  }
}
