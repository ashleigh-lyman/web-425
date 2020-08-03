/**
 * Title: composer.service.ts
 * Author: Ashleigh Lyman
 * Date: 28 July 2020
 * Description: Service class for Composer objects
 */




import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {composerId: 100, fullName: "Amy Beach", genre: "Classical"},
      {composerId: 101, fullName: "Claude Debussy", genre: "Classical"},
      {composerId: 102, fullName: "Antonio Vivaldi", genre: "Classical"},
      {composerId: 103, fullName: "Clara Schumann", genre: "Classical"},
      {composerId: 104, fullName: "Florence Price", genre: "Classical"}
    ]
  }

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map(composers =>
        composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}

