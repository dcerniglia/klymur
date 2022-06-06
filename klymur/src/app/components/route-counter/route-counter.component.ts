import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'klym-route-counter',
  templateUrl: './route-counter.component.html',
  styleUrls: ['./route-counter.component.scss']
})
export class RouteCounterComponent implements OnInit {

  countNumber = 0;

  resetBtn()
  {
    this.countNumber = 0;
  }

  increaseBtn()
  {
    this.countNumber = this.countNumber + 1;
  }

  decreaseBtn(){
    this.countNumber = this.countNumber - 1;
    if(this.countNumber<0) {
      this.countNumber = 0;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
