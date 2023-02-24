import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent implements OnInit {
  name: any;
  constructor() {
  }

  ngOnInit(): void {
  }

  change() {
    console.log("i am change");
  }
}
