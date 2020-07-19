/**
 * Title: composer-list.component.ts
 * Author: Professor Krasso
 * Date: 21 April 2020
 * Description: Composer list component; displays a list of composers
 */

/**
 * Title: composer-list.component.ts
 * Author: Ashleigh Lyman
 * Date: 17 July 2020
 * Description: Composer-list component
 */



 import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Amy Beach", "Classical"),
      new Composer("Claude Debussy", "Classical"),
      new Composer("Antonio Vivaldi", "Classical"),
      new Composer("Clara Schumann", "Classical"),
      new Composer("Florence Price", "Classical")
    ]
  }

  ngOnInit(): void {
  }

}
