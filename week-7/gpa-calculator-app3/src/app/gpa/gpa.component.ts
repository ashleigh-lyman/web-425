/**
 * Title: gpa.component.ts
 * Author: Ashleigh Lyman
 * Date: 13 August 2020
 * Description: gpa component page
 */


import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
