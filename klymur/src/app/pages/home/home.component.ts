import { Component, OnInit } from '@angular/core';
import { Grade } from 'src/models';

import { fakeGrades } from 'src/dev-data/dev-data';


@Component({
  selector: 'klym-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  grades: Array<Grade> = []; 

  constructor() {
    this.grades = fakeGrades;
   }

  ngOnInit(): void {
  }

}
