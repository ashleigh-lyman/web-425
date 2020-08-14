/**
 * Title: grade-summary.component.ts
 * Author: Ashleigh Lyman
 * Date: 13 August 2020
 * Description: grade summary component page
 */


import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade: string;
  @Input() course: string;


  constructor() {

  }

  ngOnInit(): void {
  }
}
