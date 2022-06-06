import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'klym-route-counter',
  templateUrl: './route-counter.component.html',
  styleUrls: ['./route-counter.component.scss']
})
export class RouteCounterComponent implements OnInit {
  @Input() gradeName: string = 'no name';
  @Input() count = 0;

  isEditing: boolean = false;

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  resetCount() {
    this.count = 0;
  }

  increaseCount() {
    this.count = this.count + 1;
  }

  decreaseCount() {
    this.count = this.count - 1;
    if (this.count < 0) {
      this.count = 0;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
