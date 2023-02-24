import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childc',
  templateUrl: './childc.component.html',
  styleUrls: ['./childc.component.scss']
})
export class ChildcComponent {

  @Input() public parentData: any;
  // alternate
  // @Input("parentData") public name: any;

  // pass data child to parent 
  @Output() public childEvent = new EventEmitter();

  constructor() {

  }

  sendData(val:any) {
    this.childEvent.emit(val)
  }
}
