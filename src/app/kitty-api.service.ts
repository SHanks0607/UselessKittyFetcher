import { Injectable } from '@angular/core';
import { Breed, BreedResponse } from './models/breed';
import { CatFact } from './models/facts';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KittyApiService {

  private kittyAPI = 'https://catfact.ninja/breeds?limit=';
  private kittyFacts = 'https://catfact.ninja/facts?limit=';

  constructor(private httpClient: HttpClient) { }

  getBreed(qtyKitty: number): Observable<Breed[]> {
    return this.httpClient.get<Breed[]>(this.kittyAPI + qtyKitty)
    .pipe(
      map((data: Breed[]) => {return data;}
      )
    );
  }

  getFacts(factQty: number): Observable<CatFact[]> {
    return this.httpClient.get<CatFact[]>(this.kittyFacts + factQty)
    .pipe(
      map((data: CatFact[]) => {return data;})
    );
  }
}


// https://catfact.ninja/breeds?limit=1
