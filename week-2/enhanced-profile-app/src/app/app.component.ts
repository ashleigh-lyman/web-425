/**
 * Title: app.component.ts
 * Author: Ashleigh Lyman
 * Date: 16 July 2020
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: Boolean = true;

  assignment: string = 'Exercise 2.3 - Data Binding';
}
