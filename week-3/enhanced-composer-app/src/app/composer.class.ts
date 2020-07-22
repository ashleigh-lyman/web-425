/**
 * Title: composer.class.ts
 * Author: Ashleigh Lyman
 * Date: 22 July 2020
 * Description: Class file for the Composer object
 */

import { IComposer } from './composer.interface';

export class Composer {

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

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
