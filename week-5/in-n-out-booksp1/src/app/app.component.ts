/**
 * Title: app.component.ts
 * Author: Ashleigh Lyman
 * Date: 06 August 2020
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
    this.assignment = "Exercise 5.2 - Navigation and Layout";
  }
}
