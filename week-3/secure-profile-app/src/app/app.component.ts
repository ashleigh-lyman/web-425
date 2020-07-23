/*
 * Title: app.component.ts
 * Author: Ashleigh Lyman
 * Date: 22 July 2020
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  assignment: string = 'Secure Profile App';
}
