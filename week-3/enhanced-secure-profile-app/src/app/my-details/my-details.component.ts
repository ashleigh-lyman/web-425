/*
 * Title: my-details.component.ts
 * Author: Ashleigh Lyman
 * Date: 22 July 2020
 * Description: My details component
 */


import { Component, OnInit } from '@angular/core';


export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ]

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Ashleigh Lyman", "Cheeseburgers", "Blue");
  }

  ngOnInit(): void {
  }

}
