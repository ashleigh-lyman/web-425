/**
 * Title: app.component.ts
 * Author: Ashleigh Lyman
 * Date: 08 August 2020
 * Description: App component.ts
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = "Exercise 6.2 - Input/Output Properties Part 1";
  }
}
