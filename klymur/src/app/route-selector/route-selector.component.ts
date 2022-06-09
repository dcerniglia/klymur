import { Component, OnInit } from '@angular/core';
import { Grades } from './grades';

@Component({
  selector: 'klym-route-selector',
  templateUrl: './route-selector.component.html',
  styleUrls: ['./route-selector.component.scss']
})
export class RouteSelectorComponent implements OnInit {
  grades: Grades[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
