import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight-converter',
  templateUrl: './weight-converter.component.html',
  styleUrls: ['./weight-converter.component.scss']
})
export class WeightConverterComponent implements OnInit {
  pound_val!: number;
  kg_val!: number;
  constructor() {

  }
  ngOnInit(): void {

  }
  clickme() {
    this.kg_val = this.pound_val * 0.453592
  }

}
