/**
 * Title: app.component.ts
 * Author: Ashleigh Lyman
 * Date: 17 July 2020
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Composer App';
}
